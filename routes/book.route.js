const express = require('express');
const BookController = require('../controllers/book.controller');
const { checkToken } = require('../utils');

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
router.get(
  '/:subBookId/subBookInfo',
  BookController.getSubBookInfomation,
);

router.post('/createSubBook', BookController.createSubBook);
router.post('/createChapter', BookController.createChapter);
router.post('/createVerse', BookController.createVerse);

router.get('/:chapterId/intro', BookController.getIntroVerses);

router.post('/saveBookByFile', BookController.saveBookByFile);

router.get(
  '/:bookTitle/bookInfoByTitle',
  BookController.getBookInformationByTitle,
);

router.put('/chapter', BookController.updateChapterInfo);
router.put('/subbook', BookController.updateSubBookInfo);

router.put('/updateIntro', BookController.updateIntro);

module.exports = router;
