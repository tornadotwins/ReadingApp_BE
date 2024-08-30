import express from 'express';
import BookController from '../controllers/book.controller';

const router = express.Router();

router.get('/libraries', BookController.getLibraries);
router.get('/:bookId/subbooks', BookController.getSubBooks);
router.get('/:subBookId/chapters', BookController.getChapters);
router.get('/:chapterId/verses', BookController.getVerses);
router.get('/:userId/:bookId/history', BookController.getHistory);
router.get('/:userId/histories', BookController.getAllHistory);
router.get('/:userId/bookmarks', BookController.getBookmarks);
router.get('/:bookmarkId/bookmark', BookController.getBookmark);
router.post('/saveBookmark', BookController.saveBookmark);
router.get('/:userId/:subBookId/filterBookmark', BookController.filterBookmark);
router.post('/removeBookmark', BookController.removeBookmark);
router.post('/removeBookmarkById', BookController.removeBookmarkById);
router.post('/search', BookController.searchByKeyword);

router.post('/createSubBook', BookController.createSubBook);
router.post('/createChapter', BookController.createChapter);
router.post('/createVerse', BookController.createVerse);

export default router;
