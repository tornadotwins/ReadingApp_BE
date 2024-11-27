const express = require('express');
const TranslatorController = require('../controllers/translator.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.post('/createPage', TranslatorController.createAppTextPage);
router.post('/createAppText', TranslatorController.createAppText);

module.exports = router;