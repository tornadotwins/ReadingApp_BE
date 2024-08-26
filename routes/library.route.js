import express from 'express';
import LibraryController from '../controllers/library.controller';

const router = express.Router();

router.get('/libraries', LibraryController.getLibraries);

export default router;
