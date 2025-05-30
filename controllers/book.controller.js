const Book = require('../models/book.model');
const SubBook = require('../models/subBook.model');
const Chapter = require('../models/chapter.model');
const Verse = require('../models/verse.model');
const Introduction = require('../models/introduction.model');
const History = require('../models/history.model');
const User = require('../models/user.model');
const ERROR_MESSAGES = require('../config/error.message');
const { getChapterNumbers, getLanguageCode } = require('../utils');

/////////////////////////////////////////////////////////////////////////
///////////////////////////// Get All books /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getLibraries = async (req, res) => {
  try {
    const libraries = await Book.find()
      .populate('library')
      .sort({ order: 1 });

    if (libraries.length > 0) {
      const sortedLibraries = sortAndGroupLibraries(libraries);
      res.status(200).send({ libraries: sortedLibraries });
    } else {
      res
        .status(404)
        .send({ message: ERROR_MESSAGES.BOOK_NOT_FOUND });
    }
  } catch (error) {
    res.status(500).send({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Get All Sub-books ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getSubBooks = async (req, res) => {
  const { bookId } = req.params;

  try {
    const subBooks = await SubBook.find({ book: bookId }).populate(
      'book',
    );

    if (!subBooks.length) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.SUBBOOK_NOT_FOUND });
    }

    // Sort subBooks by number
    const sortedSubBooks = subBooks.sort(
      (a, b) => a.number - b.number,
    );

    // Return the sub-books
    return res.status(200).json(sortedSubBooks);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Chapters ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getChapters = async (req, res) => {
  const { subBookId } = req.params;

  try {
    const chapters = await Chapter.find({
      subBook: subBookId,
    }).populate('subBook');

    if (!chapters.length) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.CHAPTER_NOT_FOUND });
    }

    // Sort subBooks by number
    const sortedChapters = chapters.sort(
      (a, b) => a.chapterNumber - b.chapterNumber,
    );

    // Return the sub-books
    return res.status(200).json(sortedChapters);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get Verses ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getVerses = async (req, res) => {
  const { chapterId } = req.params;

  try {
    const verses = await Verse.find({
      chapter: chapterId,
    })
      .sort({ number: 1 })
      .populate('chapter');

    if (!verses.length) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.VERSE_NOT_FOUND });
    }

    // Filter Verses
    let filteredVerses = {
      subBookId: verses[0].chapter.subBook,
      chapterId: verses[0].chapter._id,
      chapterNumber: verses[0].chapter.chapterNumber,
      chapterTranslated: verses[0].chapter.isTranslated,
      chapterIsCompleted: verses[0].chapter.isCompleted,
      chapterIsPublished: verses[0].chapter.isPublished,
      chapterAudio: verses[0].chapter.audio,
      verses: [],
    };

    let temp = [];
    for (const verse of verses) {
      temp.push({
        verseId: verse._id,
        verseNumber: verse.number,
        verseHeader: verse.header,
        verseReference: verse.reference,
        verseText: verse.text,
        verseAudioStart: verse.audioStart,
      });
    }

    filteredVerses.verses = temp;

    // Return the sub-books
    return res.status(200).json(filteredVerses);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get History //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getHistory = async (req, res) => {
  try {
    const { userId, bookId } = req.params;
    // Step 1: Find all sub-books for the given bookId
    const subBooks = await SubBook.find({ book: bookId }).exec();

    if (!subBooks.length) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.SUBBOOK_NOT_FOUND });
    }

    // Step 2: Initialize the result structure
    const result = {
      userId: userId,
      bookId: bookId,
      totalChapterNumber: 0,
      readChapterNumber: 0,
      subBooks: [],
    };

    // Step 3: Loop through each sub-book to gather chapter information
    for (const subBook of subBooks) {
      // Total chapters in the sub-book
      const totalChaptersInSubBook = await Chapter.countDocuments({
        subBook: subBook._id,
      }).exec();

      // Total chapters read by the user in the sub-book
      const readChaptersInSubBook = await History.countDocuments({
        user: userId,
        chapter: {
          $in: await Chapter.find({ subBook: subBook._id })
            .select('_id')
            .exec(),
        },
      }).exec();

      // Accumulate total chapters in the book
      result.totalChapterNumber += totalChaptersInSubBook;

      // Accumulate total read chapters in the book
      result.readChapterNumber += readChaptersInSubBook;

      // Add the sub-book details to the result
      result.subBooks.push({
        subBookId: subBook._id,
        totalChapterNumber: totalChaptersInSubBook,
        readChapterNumber: readChaptersInSubBook,
      });
    }

    // return result;
    return res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////// Get All History of the User //////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getAllHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    // Step 1: Find all books where the user has any reading history
    const historyRecords = await History.find({
      user: userId,
    }).populate({
      path: 'chapter',
      populate: {
        path: 'subBook',
        populate: {
          path: 'book',
        },
      },
    });

    let results = [];
    for (const historyRecord of historyRecords) {
      // Get total number of chapters in book
      const subBooks = await SubBook.find({
        book: historyRecord.chapter.subBook.book._id,
      })
        .select('_id')
        .exec();

      // Step 2: Get total chapter count for each sub-book
      const chapterCounts = await Chapter.aggregate([
        {
          $match: {
            subBook: { $in: subBooks.map((subBook) => subBook._id) },
          },
        },
        {
          $group: {
            _id: null,
            totalChapters: { $sum: 1 },
          },
        },
      ]);

      // Step 3: Get the total chapter count
      const totalChapters =
        chapterCounts.length > 0 ? chapterCounts[0].totalChapters : 0;

      const structuredHistoryRecord = {
        bookId: historyRecord.chapter.subBook.book._id,
        bookTitle: historyRecord.chapter.subBook.book.title,
        totalChapterCount: totalChapters,
        subBookId: historyRecord.chapter.subBook._id,
        subBookTitle: historyRecord.chapter.subBook.title,
        subBookNumber: historyRecord.chapter.subBook.number,
        chapterId: historyRecord.chapter._id,
        chapterNumber: historyRecord.chapter.chapterNumber,
      };

      results.push(structuredHistoryRecord);
    }

    // Group by book
    const groupedResult = results.reduce((acc, item) => {
      const existingBook = acc.find(
        (book) => book.bookId === item.bookId,
      );

      if (existingBook) {
        // If the book already exists, increment the readChapters count
        existingBook.readChapters += 1;
        existingBook.readChapterIds.push(item.chapterId);
      } else {
        // If the book doesn't exist, add it to the array with a readChapters field
        acc.push({
          bookId: item.bookId,
          bookTitle: item.bookTitle,
          totalChapterCount: item.totalChapterCount,
          readChapters: 1, // Start with 1 read chapter
          readChapterIds: [item.chapterId],
          subBooks: [],
        });
      }

      // Find the subBook within the book
      const subBook = existingBook
        ? existingBook.subBooks.find(
            (sb) => sb.subBookId === item.subBookId,
          )
        : null;

      if (subBook) {
        // If the subBook exists, increment the readChapters count for it
        subBook.readChapters += 1;
      } else {
        // If the subBook doesn't exist, add it
        const bookToUpdate = existingBook || acc[acc.length - 1];
        bookToUpdate.subBooks.push({
          subBookId: item.subBookId,
          subBookTitle: item.subBookTitle,
          subBookNumber: item.subBookNumber,
          readChapters: 1, // Start with 1 read chapter
        });
      }

      return acc;
    }, []);

    return res.status(200).json(groupedResult);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Save User History ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.createHistory = async (req, res) => {
  const { chapterId } = req.body;

  if (!chapterId) {
    return res
      .status(400)
      .json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const user = await User.findById(req.currentUserId);

    if (!user) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }

    const history = new History({
      user: req.currentUserId,
      chapter: chapterId,
    });

    await history.save();

    const historyRecords = await History.find({
      user: req.currentUserId,
    }).populate({
      path: 'chapter',
      populate: {
        path: 'subBook',
        populate: {
          path: 'book',
        },
      },
    });

    let results = [];
    for (const historyRecord of historyRecords) {
      // Get total number of chapters in book
      const subBooks = await SubBook.find({
        book: historyRecord.chapter.subBook.book._id,
      })
        .select('_id')
        .exec();

      // Step 2: Get total chapter count for each sub-book
      const chapterCounts = await Chapter.aggregate([
        {
          $match: {
            subBook: { $in: subBooks.map((subBook) => subBook._id) },
          },
        },
        {
          $group: {
            _id: null,
            totalChapters: { $sum: 1 },
          },
        },
      ]);

      // Step 3: Get the total chapter count
      const totalChapters =
        chapterCounts.length > 0 ? chapterCounts[0].totalChapters : 0;

      const structuredHistoryRecord = {
        bookId: historyRecord.chapter.subBook.book._id,
        bookTitle: historyRecord.chapter.subBook.book.title,
        totalChapterCount: totalChapters,
        subBookId: historyRecord.chapter.subBook._id,
        subBookTitle: historyRecord.chapter.subBook.title,
        subBookNumber: historyRecord.chapter.subBook.number,
        chapterId: historyRecord.chapter._id,
        chapterNumber: historyRecord.chapter.chapterNumber,
      };

      results.push(structuredHistoryRecord);
    }

    // Group by book
    const groupedResult = results.reduce((acc, item) => {
      const existingBook = acc.find(
        (book) => book.bookId === item.bookId,
      );

      if (existingBook) {
        // If the book already exists, increment the readChapters count
        existingBook.readChapters += 1;
        existingBook.readChapterIds.push(item.chapterId);
      } else {
        // If the book doesn't exist, add it to the array with a readChapters field
        acc.push({
          bookId: item.bookId,
          bookTitle: item.bookTitle,
          totalChapterCount: item.totalChapterCount,
          readChapters: 1, // Start with 1 read chapter
          readChapterIds: [item.chapterId],
          subBooks: [],
        });
      }

      // Find the subBook within the book
      const subBook = existingBook
        ? existingBook.subBooks.find(
            (sb) => sb.subBookId === item.subBookId,
          )
        : null;

      if (subBook) {
        // If the subBook exists, increment the readChapters count for it
        subBook.readChapters += 1;
      } else {
        // If the subBook doesn't exist, add it
        const bookToUpdate = existingBook || acc[acc.length - 1];
        bookToUpdate.subBooks.push({
          subBookId: item.subBookId,
          subBookTitle: item.subBookTitle,
          subBookNumber: item.subBookNumber,
          readChapters: 1, // Start with 1 read chapter
        });
      }

      return acc;
    }, []);

    return res.status(200).json(groupedResult);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get bookinfo /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getBookInformation = async (req, res) => {
  try {
    const { bookId } = req.params;

    // Step 1: Find the book by bookId
    const book = await Book.findById(bookId).exec();
    if (!book) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.BOOK_NOT_FOUND });
    }

    // Step 2: Find all sub-books related to this book
    const subBooks = await SubBook.find({ book: bookId })
      .lean()
      .exec();

    // Step 3: For each sub-book, find the chapters
    const subBooksWithChapters = await Promise.all(
      subBooks.map(async (subBook) => {
        const chapters = await Chapter.find({ subBook: subBook._id })
          .select(
            'chapterNumber audio isTranslated isCompleted isPublished',
          )
          .lean()
          .exec();
        return {
          subBookId: subBook._id,
          subBookTitle: subBook.title,
          subBookNumber: subBook.number,
          noChapter: subBook.noChapter,
          chapterInfos: chapters
            .map((chapter) => ({
              chapterId: chapter._id,
              chapterNumber: chapter.chapterNumber,
              audio: chapter.audio,
              isTranslated: chapter.isTranslated,
              isCompleted: chapter.isCompleted,
              isPublished: chapter.isPublished,
            }))
            .sort((a, b) => a.chapterNumber - b.chapterNumber),
        };
      }),
    );

    // Step 4: Structure the response
    const result = {
      bookId: book._id,
      bookTitle: book.title,
      bookImage: book.coverImage,
      markImage: book.markImage,
      subBooks: subBooksWithChapters,
    };

    // Step 5: Return the result
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in getBookInformation:', error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////// Get All SubBook Information //////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getSubBookInfomation = async (req, res) => {
  const { subBookId } = req.params;
  try {
    const subBook = await SubBook.findById(subBookId);
    if (!subBook) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.SUBBOOK_NOT_FOUND });
    }
    // Step 2: Find all chapters related to this book
    const chapters = await Chapter.find({ subBook: subBookId });
    let chapterInfos = [];
    await Promise.all(
      chapters.map(async (chapter) => {
        let chapterInfo = {
          chapterId: chapter._id,
          chapterNumber: chapter.chapterNumber,
          chapterAudio: chapter.audio,
          chapterTranslated: chapter.isTranslated,
          chapterIsCompleted: chapter.isCompleted,
          chapterIsPublished: chapter.isPublished,
          verses: [],
        };

        if (chapter.chapterNumber === 0) {
          // Fetch data from Introduction model
          const introVerses = await Introduction.find({
            chapter: chapter._id,
          })
            .select(
              'chapter text image number isCollapse title content',
            )
            .exec();

          chapterInfo.verses = introVerses.map((intro) => ({
            id: intro._id,
            text: intro.text,
            image: intro.image,
            number: intro.number,
            isCollapse: intro.isCollapse,
            title: intro.title,
            content: intro.content,
          }));
        } else {
          // Existing code for regular verses
          const verses = await Verse.find({ chapter: chapter._id })
            .select('chapter text number audioStart header reference')
            .exec();
          chapterInfo.verses = verses.map((verse) => ({
            verseId: verse._id,
            verseNumber: verse.number,
            verseHeader: verse.header,
            verseReference: verse.reference,
            verseText: verse.text,
            verseAudioStart: verse.audioStart,
          }));
        }

        chapterInfos.push(chapterInfo);
      }),
    );
    // Sort chapter information by its number
    const sortedChapterInfos = chapterInfos.sort((a, b) =>
      a.chapterNumber > b.chapterNumber ? 1 : -1,
    );
    const result = {
      subBookId: subBook._id,
      subBookTitle: subBook.title,
      subBookNumber: subBook.number,
      chapterInfos: sortedChapterInfos,
    };
    res.status(200).json(result);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get Introduction ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getIntroVerses = async (req, res) => {
  const { chapterId } = req.params;

  try {
    const introVerses = await Introduction.find({
      chapter: chapterId,
    }).populate('chapter');

    // If no information about introduction, return 404
    if (!introVerses.length) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.VERSE_NOT_FOUND });
    }

    // Filter verses
    let filteredVerses = {
      subBookId: introVerses[0].chapter.subBook,
      chapterId: introVerses[0].chapter._id,
      chapterNumber: introVerses[0].chapter.chapterNumber,
      chapterTranslated: introVerses[0].chapter.isTranslated,
      isCompleted: introVerses[0].chapter.isCompleted,
      isPublished: introVerses[0].chapter.isPublished,
      chapterAudio: introVerses[0].chapter.audio,
      verses: [],
    };

    let temp = [];

    for (const introVerse of introVerses) {
      temp.push({
        id: introVerse._id,
        image: introVerse.image,
        number: introVerse.number,
        text: introVerse.text,
        isCollapse: introVerse.isCollapse,
        title: introVerse.title,
        content: introVerse.content,
      });
    }

    filteredVerses.verses = temp;

    // Return the verses
    return res.status(200).json(filteredVerses);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////// Save book by picked file ///////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveBookByFile = async (req, res) => {
  try {
    const { bookInfos, bookTitle, language } = req.body;

    // Get information for the books (language, book title, sub book titles, chapters information, verses information)
    const languageCode = getLanguageCode(language);
    const subBookTitle = bookInfos[0]?.[`SubBook_${language}`];
    const enSubBookTitle = bookInfos[0]?.['SubBook_English'];
    const subBookTransliteration =
      bookInfos[0]?.['SubBook_Transliteration'];

    const chapterNumbers = getChapterNumbers(bookInfos);

    const bookId = await getSavedBookId(languageCode, bookTitle);

    const existingSubBook = await SubBook.findOne({
      book: bookId,
      [`title.${languageCode}`]: subBookTitle,
    });

    if (existingSubBook) {
      // Delete verses for this language in the existing sub book
      await deleteVersesByLanguage(existingSubBook._id, languageCode);
    }

    const savedSubBookInfo = await saveSubBook(
      bookId,
      bookTitle,
      languageCode,
      subBookTitle,
      enSubBookTitle,
      subBookTransliteration,
    );

    const savedChapterInfo = await saveChapter(
      languageCode,
      savedSubBookInfo._id,
      chapterNumbers,
    );

    const savedVerseInfo = await saveVerse(
      bookInfos,
      savedChapterInfo,
      language,
      subBookTitle,
    );

    return res.status(200).json(savedVerseInfo);
  } catch (error) {
    return res.status(400).json({
      message: 'Failed to save book',
      error: error,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////// Get Book information from book title /////////////////
/////////////////////////////////////////////////////////////////////////
exports.getBookInformationByTitle = async (req, res) => {
  try {
    const { bookTitle } = req.params;

    // Step 1: Find the book by title
    const book = await Book.findOne({ 'title.en': bookTitle }).exec();
    if (!book) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.BOOK_NOT_FOUND });
    }

    const bookId = book._id;

    // Step 2: Find all sub-books related to this book
    const subBooks = await SubBook.find({ book: bookId })
      .lean()
      .exec();

    // Step 3: For each sub-book, find the chapters
    const subBooksWithChapters = await Promise.all(
      subBooks.map(async (subBook) => {
        const chapters = await Chapter.find({ subBook: subBook._id })
          .select(
            'chapterNumber audio isTranslated isCompleted isPublished',
          )
          .lean()
          .exec();

        // Resolve verses for each chapter
        const chapterInfos = await Promise.all(
          chapters.map(async (chapter) => {
            return {
              chapterId: chapter._id,
              chapterNumber: chapter.chapterNumber,
              chapterAudio: chapter.audio,
              chapterIsTranslated: chapter.isTranslated,
              chapterIsCompleted: chapter.isCompleted,
              chapterIsPublished: chapter.isPublished,
            };
          }),
        );

        return {
          subBookId: subBook._id,
          subBookTitle: subBook.title,
          subBookNumber: subBook.number,
          noChapter: subBook.noChapter,
          chapterInfos: chapterInfos.sort(
            (a, b) => a.chapterNumber - b.chapterNumber,
          ),
        };
      }),
    );

    // Sort subBooks by subBookNumber
    const sortedSubBooks = subBooksWithChapters.sort(
      (a, b) => a.subBookNumber - b.subBookNumber,
    );

    // Step 4: Structure the response
    const result = {
      bookId: book._id,
      bookTitle: book.title,
      bookImage: book.coverImage,
      markImage: book.markImage,
      subBooks: sortedSubBooks,
    };

    // Step 5: Return the result
    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in getBookInformationByTitle:', error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////// Update Chapter Information //////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateChapterInfo = async (req, res) => {
  try {
    const { chapterId, newChapterInfo } = req.body;

    if (!chapterId || !newChapterInfo) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
    }

    const newChapterInfoWithUpdatedDate = {
      ...newChapterInfo,
      updatedAt: Date.now(),
    };

    let updatedChapter = await Chapter.findByIdAndUpdate(
      chapterId,
      newChapterInfoWithUpdatedDate,
      { new: true, runValidators: true },
    );

    if (!updatedChapter)
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.CHAPTER_NOT_FOUND });

    const verses = await Verse.find({ chapter: chapterId }).sort({
      number: 1,
    });

    let updatedVerses = [];
    verses.map((verse) => {
      updatedVerses.push({
        verseId: verse._id,
        verseHeader: verse.header,
        verseAudioStart: verse.audioStart,
        verseNumber: verse.number,
        verseText: verse.text,
        verseReference: verse.reference,
      });
    });

    updatedChapter = {
      ...updatedChapter.toObject(),
      verses: updatedVerses,
    };

    return res.status(200).json(updatedChapter);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.NETWORK_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////// Update SubBook Information //////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateSubBookInfo = async (req, res) => {
  try {
    const { subBookId, newSubBookInfo } = req.body;

    if (!subBookId || !newSubBookInfo) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
    }

    const newSubBookInfoWithUpdatedDate = {
      ...newSubBookInfo,
      updatedAt: Date.now(),
    };

    const updatedSubBook = await SubBook.findByIdAndUpdate(
      subBookId,
      newSubBookInfoWithUpdatedDate,
      { new: true, runValidators: true },
    );

    if (!updatedSubBook)
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.SUBBOOK_NOT_FOUND });

    return res.status(200).json(updatedSubBook);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.NETWORK_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////// Update Intro Information ///////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateIntro = async (req, res) => {
  // Destructure required fields from the request body
  const {
    chapterId, // ID of the chapter to update
    isCompleted, // Completion status for each language
    isPublished, // Publication status for each language
    languageCode, // Current language code for the update
    subBookId, // SubBook ID associated with the chapter
    verses, // Array of verses to update or create
  } = req.body;

  // Step 1: Update Chapter (isCompleted, isPublished, isTranslated)
  const existingChapterInfo = await Chapter.findById(chapterId); // Fetch the chapter by ID

  // Merge existing completion status with the new value for the current language
  const updatedIsCompleted = {
    ...existingChapterInfo.isCompleted,
    [languageCode]: isCompleted[languageCode],
  };

  // Merge existing publication status with the new value for the current language
  const updatedIsPublished = {
    ...existingChapterInfo.isPublished,
    [languageCode]: isPublished[languageCode],
  };

  // Mark the chapter as translated for the current language
  const updatedIsTranslated = {
    ...existingChapterInfo.isTranslated,
    [languageCode]: true,
  };

  // Prepare the updated chapter object with new information
  const updatedChapterInfo = {
    chapterNumber: 0, // Static value as per the original logic
    subBook: subBookId, // Update SubBook ID
    isTranslated: updatedIsTranslated, // Updated translation status
    isCompleted: updatedIsCompleted, // Updated completion status
    isPublished: updatedIsPublished, // Updated publication status
    createdAt: existingChapterInfo.createdAt, // Retain original creation timestamp
    updatedAt: Date.now(), // Set current timestamp for update
  };

  // Update the chapter document in the database
  const updatedChapter = await Chapter.findByIdAndUpdate(
    chapterId, // Find the chapter by ID
    updatedChapterInfo, // Apply the updates
    {
      new: true, // Return the updated document
      runValidators: true, // Enforce schema validation
    },
  );

  // Step 2: Update Verses in the Introduction collection
  let updatedIntroVerses = []; // Array to hold the updated verse objects

  // Remove all documents that has the chapter id
  await Introduction.deleteMany({ chapter: chapterId });

  // Loop through each verse in the input array
  for (const verse of verses) {
    // If the verse does not exist, create a new Introduction document
    const introductionObj = new Introduction({
      chapter: chapterId,
      text: verse.text,
      image: verse.image,
      number: verse.number,
      isCollapse: verse.isCollapse,
      title: verse.title,
      content: verse.content,
    });

    // Save the new Introduction document and add it to the array
    const newIntroductionObj = introductionObj.save();
    updatedIntroVerses.push(newIntroductionObj);
  }

  const updatedIntroChapter = {
    _id: updatedChapter._id,
    subBook: subBookId,
    chapterNumber: 0,
    isTranslated: updatedChapter.isTranslated,
    isCompleted: updatedChapter.isCompleted,
    isPublished: updatedChapter.isPublished,
    verses: updatedIntroVerses.sort((a, b) => a.number - b.number),
  };

  // Return the updated chapter information in the response
  return res.status(200).json(updatedIntroChapter);
};

// Check if the book already exists in DB. If it doesn't exist, save it
const getSavedBookId = async (languageCode, title) => {
  try {
    // Input validation
    if (!languageCode || !title) {
      throw new Error('Language code and title are required');
    }
    // Check if the book already exists in db (English book title is received from front-end)
    const foundBook = await Book.findOne({
      'title.en': {
        $regex: new RegExp(`^${title.replace(/'/g, "[’']")}$`),
      },
    });

    if (foundBook) {
      return foundBook._id;
    }

    // Create new book if it doesn't exist
    const bookObj = new Book({
      title: {
        en: title,
      },
      library: '66cbe68db07590b6dcd5f13a',
      coverImage: '', // Optional or provide a default value if needed
      markImage: '',
      order:
        title == "Qur'an"
          ? 1
          : title == 'Injil'
          ? 2
          : title == 'Zabur'
          ? 3
          : 4,
    });

    const createdBook = await bookObj.save();
    return createdBook._id;
  } catch (error) {
    console.error('Error in getSavedBookId:', error);
    throw error; // Re-throw to handle it in the calling function
  }
};

const saveSubBook = async (
  bookId,
  bookTitle,
  languageCode,
  subBookTitle,
  enSubBookTitle,
  subBookTransliteration = '',
) => {
  // Check if the sub book already exists in db (compare with enSubBook)
  const existingSubBooks = await SubBook.find({ book: bookId });

  // If subBook doesn't exist, create a new sub book
  if (
    !(existingSubBooks.length > 0) ||
    !existingSubBooks.some(
      (existingSubBook) => existingSubBook.title.en == enSubBookTitle,
    )
  ) {
    const subBookObj =
      languageCode == 'en'
        ? new SubBook({
            number: existingSubBooks.length + 1,
            title: {
              en: enSubBookTitle,
              transliteration: subBookTransliteration,
            },
            book: bookId,
            noChapter:
              bookTitle == "Qur'an" || bookTitle == 'Zabur'
                ? true
                : false,
          })
        : new SubBook({
            number: existingSubBooks.length + 1,
            title: {
              en: enSubBookTitle,
              transliteration: subBookTransliteration,
              [languageCode]: subBookTitle,
            },
            book: bookId,
            noChapter:
              bookTitle == "Qur'an" || bookTitle == 'Zabra'
                ? true
                : false,
          });

    const newSubBook = subBookObj.save();
    return newSubBook;
  } else {
    // update the current sub book
    const currentSubBook = existingSubBooks.find(
      (existingSubBook) => existingSubBook.title.en == enSubBookTitle,
    );

    currentSubBook.title[languageCode] = subBookTitle;

    await SubBook.updateOne(
      { _id: currentSubBook._id },
      {
        $set: {
          [`title.${languageCode}`]: subBookTitle,
        },
      },
    );

    return await SubBook.findById({ _id: currentSubBook._id });
  }
};

const saveChapter = async (
  languageCode,
  subBookId,
  chapterNumbers,
) => {
  // Check if the chapter already exists in database
  const existingChapters = await Chapter.find({
    subBook: subBookId,
  });

  // If chapter doesn't exist, create a new one
  if (!existingChapters.length > 0) {
    const newChapters = await Promise.all(
      chapterNumbers.map(async (chapterInfo) => {
        const saveChapterObj = new Chapter({
          chapterNumber: chapterInfo,
          subBook: subBookId,
          audio: {
            [languageCode]: '', // Initialize with an empty string or the desired value
          },
          isTranslated: {
            [languageCode]: true,
          },
        });

        return await saveChapterObj.save();
      }),
    );

    return newChapters;
  } else {
    let updatedChapters = [];

    // If chapters already exist, update their `isTranslated` field
    await Promise.all(
      chapterNumbers.map(async (chapterNumber) => {
        const existingChapter = existingChapters.find(
          (chapter) => chapter.chapterNumber === chapterNumber,
        );

        if (existingChapter) {
          // Update the `isTranslated` field if it exists
          existingChapter.isTranslated[languageCode] = true;
          existingChapter.updatedAt = Date.now(); // Update the `updatedAt` field

          await Chapter.updateOne(
            { _id: existingChapter._id },
            {
              $set: {
                [`isTranslated.${languageCode}`]: true,
              },
            },
          );

          const updatedChapter = await Chapter.findById(
            existingChapter._id,
          );
          updatedChapters.push(updatedChapter);
        }
      }),
    );
    return updatedChapters;
  }
};

const saveVerse = async (
  bookInfos,
  savedChaptersInfo,
  language,
  subBookTitle,
) => {
  let result = [];

  const languageCode = getLanguageCode(language);

  savedChaptersInfo.forEach(async (savedChapterInfo) => {
    const chapterId = savedChapterInfo._id;
    const chapterNumber = savedChapterInfo.chapterNumber;

    // find verse text and verse number from bookInfo
    const verseInfos = bookInfos.filter(
      (bookInfo) =>
        bookInfo['Chapter_Number'] == chapterNumber &&
        bookInfo[`SubBook_${language}`] == subBookTitle,
    );

    verseInfos.forEach(async (verseInfo) => {
      const verseText = verseInfo[`Verse_${language}`];
      const verseNumber = verseInfo['Verse_Number'];
      const existingVerse = await Verse.findOne({
        chapter: chapterId,
        number: verseNumber,
      });

      if (!existingVerse) {
        // If verse doesn't exist in database, create it to database
        const verseObj = new Verse({
          chapter: chapterId,
          text: {
            [languageCode]: verseText,
          },
          number: verseNumber,
          audioStart: {
            [languageCode]: '',
          },
          header: {
            [languageCode]: '',
          },
          reference: [],
        });

        const savedVerse = await verseObj.save();

        result.push(savedVerse);
      } else {
        const updatedVerse = await Verse.findByIdAndUpdate(
          existingVerse._id,
          {
            $set: {
              [`text.${languageCode}`]: verseText,
              updatedAt: Date.now(),
            },
          },
          {
            new: true,
          },
        );

        result.push(updatedVerse);
      }
    });
  });

  return result;
};

// Function to delete all verses for a specific language in a given subBook
const deleteVersesByLanguage = async (subBookId, languageCode) => {
  try {
    // Find all chapters in the subBook
    const chapters = await Chapter.find({ subBook: subBookId });

    // Iterate over chapters to delete verses in the specified language
    for (const chapter of chapters) {
      await Verse.updateMany(
        { chapter: chapter._id },
        { $unset: { [`text.${languageCode}`]: '' } },
      );
    }
  } catch (error) {
    console.error(
      `Error deleting verses for language '${languageCode}':`,
      error,
    );
  }
};

// Sort and Group by its library
const sortAndGroupLibraries = (libraries) => {
  // Group books by library
  const groupedLibraries = libraries.reduce((acc, book) => {
    const libraryId = book.library._id.toString();
    if (!acc[libraryId]) {
      acc[libraryId] = {
        library: book.library,
        books: [],
      };
    }
    acc[libraryId].books.push({
      _id: book._id,
      title: book.title,
      coverImage: book.coverImage,
      markImage: book.markImage,
      createdAt: book.createdAt,
      updatedAt: book.updatedAt,
    });
    return acc;
  }, {});

  // Convert grouped object to array and sort by library title
  return Object.values(groupedLibraries).sort((a, b) => {
    return a.library.title.en.localeCompare(b.library.title.en);
  });
};

// Create Subbook
exports.createSubBook = async (req, res) => {
  const { title, book, number } = req.body;

  try {
    const subBook = new SubBook({
      number,
      book,
      title,
    });

    await subBook.save();

    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

// Create Chapter
exports.createChapter = async (req, res) => {
  const { subBook, chapterNumber, isTranslated, audio } = req.body;

  try {
    const chapter = new Chapter({
      subBook,
      chapterNumber,
      isTranslated,
      audio,
    });

    await chapter.save();

    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

// Create Verse
exports.createVerse = async (req, res) => {
  const { chapter, text, number, audioStart, header, reference } =
    req.body;

  try {
    const verse = new Verse({
      chapter,
      text,
      number,
      audioStart,
      header,
      reference,
    });

    await verse.save();

    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
