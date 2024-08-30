import Book from '../models/book.model';
import SubBook from '../models/subBook.model';
import Chapter from '../models/chapter.model';
import Verse from '../models/verse.model';
import History from '../models/history.model';
import Bookmark from '../models/bookmark.model';
import ERROR_MESSAGES from '../config/error.message';
import mongoose from 'mongoose';

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
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
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
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
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

    // Return the sub-books
    return res.status(200).json(verses);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
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
        chapter: { $in: await Chapter.find({ subBook: subBook._id }).select('_id').exec() },
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
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

exports.getAllHistory = async (req, res) => {
  try {
    const { userId } = req.params;

    // Step 1: Find all books where the user has any reading history
    const historyRecords = await History.find({ user: userId })
      .populate({
        path: 'chapter',
        populate: {
          path: 'subBook',
          populate: {
            path: 'book'
          }
        }
      });

    if (!historyRecords.length) {
      return res.status(400).json({ message: 'No reading history found for this user.' });
    }

    let results = [];
    for (const historyRecord of historyRecords) {
      // Get total number of chapters in book
      const subBooks = await SubBook.find({ book: historyRecord.chapter.subBook.book._id }).select('_id').exec();

      if (!subBooks.length) {
        return res.status(400).json({ message: 'No sub-books found for this book.' });
      }

      // Step 2: Get total chapter count for each sub-book
      const chapterCounts = await Chapter.aggregate([
        {
          $match: { subBook: { $in: subBooks.map(subBook => subBook._id) } }
        },
        {
          $group: {
            _id: null,
            totalChapters: { $sum: 1 }
          }
        }
      ]);

      // Step 3: Get the total chapter count
      const totalChapters = chapterCounts.length > 0 ? chapterCounts[0].totalChapters : 0;

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
      const existingBook = acc.find(book => book.bookId === item.bookId);

      if (existingBook) {
        // If the book already exists, increment the readChapters count
        existingBook.readChapters += 1;
      } else {
        // If the book doesn't exist, add it to the array with a readChapters field
        acc.push({
          bookId: item.bookId,
          bookTitle: item.bookTitle,
          totalChapterCount: item.totalChapterCount,
          readChapters: 1, // Start with 1 read chapter
          subBooks: []
        });
      }

      // Find the subBook within the book
      const subBook = existingBook ? existingBook.subBooks.find(sb => sb.subBookId === item.subBookId) : null;

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
          readChapters: 1 // Start with 1 read chapter
        });
      }

      return acc;
    }, []);

    return res.status(200).json(groupedResult);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Get Bookmark /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getBookmarks = async (req, res) => {
  const { userId } = req.params;

  try {
    const bookmarks = await Bookmark.find({ user: userId })
      .populate({
        path: 'verse',
        populate: {
          path: 'chapter',
          populate: {
            path: 'subBook',
            select: 'title number _id'
          },
          select: 'chapterNumber _id'
        },
        select: '_id number'
      })
      .sort({ createdAt: -1 })
      .lean(); // Converts the documents to plain JavaScript objects

    const formattedBookmarks = bookmarks.map(bookmark => ({
      _id: bookmark._id,
      verseId: bookmark.verse._id,
      verseNumber: bookmark.verse.number,
      chapterNumber: bookmark.verse.chapter.chapterNumber,
      subBookId: bookmark.verse.chapter.subBook._id,
      subBookTitle: bookmark.verse.chapter.subBook.title,
      subBookNumber: bookmark.verse.chapter.subBook.number,
    }));

    return res.status(200).json(formattedBookmarks);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
//////////////////////// Get Bookmark Infomation ////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getBookmark = async (req, res) => {
  const { bookmarkId } = req.params;

  try {
    const bookmark = await Bookmark.findOne({ _id: bookmarkId })
      .populate({
        path: 'verse',
        populate: {
          path: 'chapter',
          populate: {
            path: 'subBook',
            populate: {
              path: 'book',
              select: '_id title',
            },
            select: 'title number _id'
          },
          select: 'chapterNumber _id'
        },
        select: '_id number'
      })
      .sort({ createdAt: -1 })
      .lean(); // Converts the documents to plain JavaScript objects

    const formattedBookmark = {
      _id: bookmark._id,
      verseId: bookmark.verse._id,
      verseNumber: bookmark.verse.number,
      chapterId: bookmark.verse.chapter._id,
      chapterNumber: bookmark.verse.chapter.chapterNumber,
      subBookId: bookmark.verse.chapter.subBook._id,
      subBookTitle: bookmark.verse.chapter.subBook.title,
      subBookNumber: bookmark.verse.chapter.subBook.number,
      bookId: bookmark.verse.chapter.subBook.book._id,
      bookTitle: bookmark.verse.chapter.subBook.book.title,
    };

    return res.status(200).json(formattedBookmark);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Set Bookmark /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveBookmark = async (req, res) => {
  const { userId, verseId } = req.body;

  if (!userId || !verseId) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const bookmark = new Bookmark({
      user: userId,
      verse: verseId
    });

    await bookmark.save();
    const savedBookmark = await Bookmark.findOne({ user: userId, verse: verseId }).populate({
      path: 'verse',
      populate: {
        path: 'chapter',
        populate: {
          path: 'subBook',
          select: 'title number _id'
        },
        select: 'chapterNumber _id'
      },
      select: '_id number'
    });

    const formattedBookmark = {
      _id: savedBookmark._id,
      verseId: savedBookmark.verse._id,
      verseNumber: savedBookmark.verse.number,
      chapterNumber: savedBookmark.verse.chapter.chapterNumber,
      subBookId: savedBookmark.verse.chapter.subBook._id,
      subBookTitle: savedBookmark.verse.chapter.subBook.title,
      subBookNumber: savedBookmark.verse.chapter.subBook.number,
    };

    return res.status(200).json({
      bookmark: formattedBookmark,
      message: ERROR_MESSAGES.BOOKMARK_ADDED
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Search Bookmark ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.filterBookmark = async (req, res) => {
  const { userId, subBookId } = req.params;

  try {
    const bookmarks = await Bookmark.find({ user: userId })
      .populate({
        path: 'verse',
        populate: {
          path: 'chapter',
          match: { subBook: subBookId },
          populate: {
            path: 'subBook',
            select: 'title number',
          },
          select: 'chapter_number',
        },
        select: 'number',
      })
      .lean(); // Converts Mongoose documents to plain JavaScript objects

    // Filter out bookmarks where the subBook is null (i.e., doesn't match the bookId)
    const filteredBookmarks = bookmarks.filter(bookmark => bookmark.verse.chapter !== null);

    return res.status(200).json(filteredBookmarks);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Remove Bookmark ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.removeBookmark = async (req, res) => {
  const { userId, verseId } = req.body;

  if (!userId || !verseId) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const bookmark = await Bookmark.findOneAndDelete({ user: userId, verse: verseId });
    console.log({ bookmark })

    if (!bookmark) {
      return res.status(404).json({ message: ERROR_MESSAGES.BOOKMARK_NOT_FOUND });
    }

    return res.status(200).json({ message: ERROR_MESSAGES.BOOKMARK_DELETE });
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
////////////////////// Remove Bookmark by bookmarId /////////////////////
/////////////////////////////////////////////////////////////////////////
exports.removeBookmarkById = async (req, res) => {
  const { bookmarkId } = req.body;

  if (!bookmarkId) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const bookmark = await Bookmark.findOneAndDelete({ _id: bookmarkId });

    if (!bookmark) {
      return res.status(404).json({ message: ERROR_MESSAGES.BOOKMARK_NOT_FOUND });
    }

    return res.status(200).json({ message: ERROR_MESSAGES.BOOKMARK_DELETE });
  } catch (error) {
    console.error("Error removing bookmark:", error);
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Search Books /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.searchByKeyword = async (req, res) => {
  const { keyword } = req.body;

  if (!keyword) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const verses = await Verse.find({
      $or: [
        {
          "text.en": {
            $regex: keyword,
            $options: 'i'
          },
        },
        {
          "text.ar": {
            $regex: keyword,
            $options: 'i'
          },
        }
      ]
    });

    return res.status(200).json(verses);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
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
      bookTitle: book.title,
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
      number, book, title
    });

    await subBook.save();


    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}


// Create Chapter
exports.createChapter = async (req, res) => {
  const { subBook, chapterNumber, isTranslated, audio } = req.body;

  try {
    const chapter = new Chapter({
      subBook, chapterNumber, isTranslated, audio
    });

    await chapter.save();


    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

// Create Verse
exports.createVerse = async (req, res) => {
  const { chapter, text, number, audioStart, header, reference } = req.body;

  try {
    const verse = new Verse({
      chapter, text, number, audioStart, header, reference
    });

    await verse.save();


    return res.status(200).json({
      message: ERROR_MESSAGES.BOOKMARK_ADDED
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}