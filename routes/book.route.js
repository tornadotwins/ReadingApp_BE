import express from 'express';
import BookController from '../controllers/book.controller';

const router = express.Router();

router.get('/libraries', BookController.getLibraries);
router.get('/:bookId/subbooks', BookController.getSubBooks);
router.get('/:subBookId/chapters', BookController.getChapters);
router.get('/:userId/:bookId/history', BookController.getHistory);

export default router;
