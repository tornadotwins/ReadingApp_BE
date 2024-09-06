import Bookmark from '../models/bookmark.model';
import User from '../models/user.model';

import ERROR_MESSAGES from '../config/error.message';

/////////////////////////////////////////////////////////////////////////
/////////////////////// Get All Bookmark by User ////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getAll = async (req, res) => {
  try {
    const user = await User.findById(req.currentUserId);

    if (!user) {
      return res.status(400).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }

    const bookmarks = await Bookmark.find({ user: req.currentUserId })
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

    const formattedBookmarks = bookmarks.map(bookmark => ({
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
    }));

    return res.status(200).json(formattedBookmarks);
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Create Bookmark ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.create = async (req, res) => {
  const { verseId } = req.body;

  if (!verseId) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const user = await User.findById(req.currentUserId);

    if (!user) {
      return res.status(400).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }

    const bookmark = new Bookmark({
      user: req.currentUserId,
      verse: verseId
    });

    await bookmark.save();
    const savedBookmark = await Bookmark.findOne({ user: req.currentUserId, verse: verseId }).populate({
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
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Delete Bookmark ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.delete = async (req, res) => {
  const bookmarkId = req.params.id;

  if (!bookmarkId) {
    return res.status(400).json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    const deletedBookmark = await Bookmark.findOneAndDelete({ _id: bookmarkId });

    if (!deletedBookmark) {
      return res.status(404).send({ message: ERROR_MESSAGES.BOOKMARK_NOT_FOUND });
    }

    return res.status(200).json({ bookmark: deletedBookmark, message: ERROR_MESSAGES.BOOKMARK_DELETE });
  } catch (error) {
    return res.status(500).json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
}