import express from 'express';
import BookController from '../controllers/book.controller';
import { checkToken } from '../utils';

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
router.post('/history', checkToken, BookController.createHistory);
router.get('/:bookId/bookInfo', BookController.getBookInformation);
router.get('/:subBookId/subBookInfo', BookController.getSubBookInfomation);

router.post('/createSubBook', BookController.createSubBook);
router.post('/createChapter', BookController.createChapter);
router.post('/createVerse', BookController.createVerse);

export default router;
