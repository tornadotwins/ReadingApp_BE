import express from 'express';
import BookmarkController from '../controllers/bookmark.controller';
import { checkToken } from '../utils';

const router = express.Router();

router.get('/', checkToken, BookmarkController.getAll);
router.post('/', checkToken, BookmarkController.create);
router.delete('/:id', checkToken, BookmarkController.delete);

export default router;
