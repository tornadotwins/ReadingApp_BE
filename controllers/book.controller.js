const Book = require('../models/book.model');
const SubBook = require('../models/subBook.model');
const Chapter = require('../models/chapter.model');
const Verse = require('../models/verse.model');
const Introduction = require('../models/introduction.model');
const History = require('../models/history.model');
const User = require('../models/user.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
///////////////////////////// Get All books /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getLibraries = async (req, res) => {
  try {
    const libraries = await Book.find().populate('library');

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
    }).populate('chapter');

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
          .select('chapterNumber audio isTranslated')
          .lean()
          .exec();
        return {
          subBookId: subBook._id,
          subBookTitle: subBook.title,
          subBookNumber: subBook.number,
          noChapter: subBook.noChapter,
          chapterInfos: chapters.map((chapter) => ({
            chapterId: chapter._id,
            chapterNumber: chapter.chapterNumber,
            audio: chapter.audio,
            isTranslated: chapter.isTranslated,
          })),
        };
      }),
    );

    // Step 4: Structure the response
    const result = {
      bookId: book._id,
      bookTitle: book.title,
      bookImage: book.coverImage,
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
    console.log(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
