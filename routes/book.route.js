import express from 'express';
import BookController from '../controllers/book.controller';

const router = express.Router();

router.get('/libraries', BookController.getLibraries);
router.get('/:bookId/subbooks', BookController.getSubBooks);
router.get('/:subBookId/chapters', BookController.getChapters);
router.get('/:chapterId/verses', BookController.getVerses);
router.get('/:userId/:bookId/history', BookController.getHistory);
router.get('/:userId/bookmarks', BookController.getBookmarks);
router.post('/setBookmark', BookController.saveBookmark);
router.get('/:userId/:bookId/filterBookmark', BookController.filterBookmark);
router.post('/removeBookmark', BookController.removeBookmark);

export default router;
