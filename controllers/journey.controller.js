const Book = require('../models/book.model');
const Article = require('../models/article.model');
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

/////////////////////////////////////////////////////////////////////////
/////// Recursive function to collect all journeys in a flat list ///////
/////////////////////////////////////////////////////////////////////////
const collectAllJourneys = async (parentId, result = []) => {
  const children = await Journey.find({ parent: parentId }).sort({
    number: 1,
  });

  if (children.length === 0) {
    return result;
  }

  for (const child of children) {
    result.push(child.toObject());
    await collectAllJourneys(child._id, result); // Recursively collect children
  }

  return result;
};

/////////////////////////////////////////////////////////////////////////
//////////////////////// Get article lists by ids ///////////////////////
/////////////////////////////////////////////////////////////////////////
const collectArticlesByIds = async (journeyIds) => {
  try {
    if (!Array.isArray(journeyIds) || journeyIds.length === 0) {
      return {};
    }

    // Find articles whose `article` field matches the given journey IDs
    const articles = await Article.find({
      article: { $in: journeyIds },
    });

    if (!articles || articles.length === 0) {
      return {};
    }

    // Group articles by their parent journey ID
    const groupedArticles = articles.reduce((acc, article) => {
      const parentId = article.article.toString(); // Convert ObjectId to string for consistent keys
      if (!acc[parentId]) {
        acc[parentId] = [];
      }
      acc[parentId].push(article);
      return acc;
    }, {});

    return groupedArticles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return {};
  }
};

/////////////////////////////////////////////////////////////////////////
/////// Get list of all journeys starting from a given parent ID ////////
/////////////////////////////////////////////////////////////////////////
exports.getHierarchicalJourneyList = async (req, res) => {
  try {
    const { parent } = req.params;

    // Verify if the parent exists
    const parentExists = await Journey.findById(parent);
    if (!parentExists) {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.JOURNEY_NOT_FOUND });
    }

    // Collect all journeys in a flat list
    const journeyList = await collectAllJourneys(parent);

    // Get article IDs from journeys where `isArticle` is true
    const articleIds = journeyList
      .filter((journey) => journey.isArticle)
      .map((journey) => journey._id);

    // Get articles grouped by parent journey IDs
    const groupedArticles = await collectArticlesByIds(articleIds);

    return res.status(200).json({
      journeys: journeyList,
      articlesByParent: groupedArticles,
    });
  } catch (error) {
    console.error('Error fetching journeys:', error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
