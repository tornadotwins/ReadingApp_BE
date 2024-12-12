const express = require('express');
const AudioController = require('../controllers/audio.controller');

const router = express.Router();

router.post('/uploadAudio', AudioController.uploadAudio);

module.exports = router;