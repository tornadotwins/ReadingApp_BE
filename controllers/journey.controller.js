const Book = require('../models/book.model');
const Journey = require('../models/journey.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Journeys ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getJourneys = async (req, res) => {
  try {
    const { parent } = req.params;

    // Fetch journeys and populate their parent based on the depth
    const journeys = await Journey.find({ parent: parent }).sort({
      number: 1,
    });

    if (journeys && journeys.length > 0) {
      // Get parents
      if (journeys[0].depth == 1) {
        const bookInfo = await Book.findById(parent);
        const result = {
          bookTitle: bookInfo.title,
          coverImage: bookInfo.coverImage,
          markImage: bookInfo.markImage,
          cards: journeys,
        };
        return res.status(200).json(result);
      } else {
        const parentInfo = await Journey.findById(parent);
        const result = {
          parentId: parentInfo._id,
          parentNumber: parentInfo.number,
          parentDepth: parentInfo.depth,
          parentIsArticle: false,
          parentTitle: parentInfo.title,
          parentImage: parentInfo.image,
          cards: journeys,
        };
        return res.status(200).json(result);
      }
    } else {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.JOURNEY_NOT_FOUND });
    }
  } catch (error) {
    console.error('Error fetching journeys:', error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
