const express = require('express');
const LakeController = require('../controllers/lake.controller');

const router = express.Router();

router.get('/road', LakeController.getRoad);

module.exports = router;
