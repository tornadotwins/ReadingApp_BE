const express = require('express');
const JourneyController = require('../controllers/journey.controller');
const { checkToken } = require('../utils');

const router = express.Router();

router.get('/:parent/journeys', JourneyController.getJourneys);
router.get(
  '/:parent/hierarchy',
  JourneyController.getHierarchicalJourneyList,
);

module.exports = router;
