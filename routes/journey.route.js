const express = require('express');
const JourneyController = require('../controllers/journey.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.get('/:parent/journeys', JourneyController.getJourneys);
router.get(
  '/:parent/hierarchy',
  JourneyController.getHierarchicalJourneyList,
);
router.get('/:articleId/article', JourneyController.getArticle);

router.post('/save-stage', JourneyController.saveJourneyStage);
router.post('/save-article', JourneyController.saveArticle);

module.exports = router;
