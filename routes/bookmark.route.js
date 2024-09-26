const express = require('express');
const BookmarkController = require('../controllers/bookmark.controller');
const {checkToken} = require('../utils');

const router = express.Router();

router.get('/', checkToken, BookmarkController.getAll);
router.post('/', checkToken, BookmarkController.create);
router.delete('/:id', checkToken, BookmarkController.delete);

module.exports = router;
