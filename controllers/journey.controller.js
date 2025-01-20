const Journey = require('../models/journey.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Journeys ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getJourneys = async (req, res) => {
  try {
    const { parent } = req.params;
    const journeys = await Journey.find({ parent: parent }).sort({
      number: 1,
    });

    if (journeys) {
      return res.status(200).json(journeys);
    } else {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.JOURNEY_NOT_FOUND });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
