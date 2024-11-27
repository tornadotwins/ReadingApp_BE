const express = require('express');
const TranslatorController = require('../controllers/translator.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.get('/appTexts', TranslatorController.getAppTexts);
router.post('/createPage', TranslatorController.createAppTextPage);
router.post('/createAppText', TranslatorController.createAppText);
router.put('/appTexts', TranslatorController.updateAppTexts);
router.put('/appTextPage', TranslatorController.updateAppTextPage);

module.exports = router;