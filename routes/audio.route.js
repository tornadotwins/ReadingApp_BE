const express = require('express');
const AudioController = require('../controllers/audio.controller');

const router = express.Router();

router.post('/uploadAudio', AudioController.uploadAudio);
router.post('/saveMarker', AudioController.saveMarker);

module.exports = router;