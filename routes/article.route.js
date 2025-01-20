const express = require('express');
const ArticleController = require('../controllers/article.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.get('/:articleId/article', ArticleController.getArticle);

module.exports = router;
