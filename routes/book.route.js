import express from 'express';
import BookController from '../controllers/book.controller';

const router = express.Router();

// Library
router.get('/libraries', BookController.getLibraries);

// Index
router.get('/:bookId/subbooks', BookController.getSubBooks);
router.get('/:subBookId/chapters', BookController.getChapters);

// Reading
router.get('/:chapterId/verses', BookController.getVerses);
router.get('/:userId/:bookId/history', BookController.getHistory);
router.get('/:userId/histories', BookController.getAllHistory);
router.get('/:bookId/bookInfo', BookController.getBookInformation);
router.get('/:subBookId/subBookInfo', BookController.getSubBookInfomation);

// Bookmark
router.post('/bookmarks', BookController.getBookmarks);
router.post('/saveBookmark', BookController.saveBookmark);
router.post('/removeBookmark', BookController.removeBookmark);
router.post('/removeBookmarkById', BookController.removeBookmarkById);
router.post('/search', BookController.searchByKeyword);

router.post('/createSubBook', BookController.createSubBook);
router.post('/createChapter', BookController.createChapter);
router.post('/createVerse', BookController.createVerse);

export default router;
