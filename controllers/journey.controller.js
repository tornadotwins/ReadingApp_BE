const Book = require('../models/book.model');
const Article = require('../models/article.model');
const Journey = require('../models/journey.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Journeys ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getJourneys = async (req, res) => {
  const { parent } = req.params;

  if (parent == '' || parent == 'undefined')
    return res
      .status(400)
      .json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });

  try {
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
      return res.status(200).json([]);
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
      return journeyIds.map((id) => ({
        articleIdInJourney: id,
        articleContents: [],
      }));
    }

    // Group articles by their parent journey ID
    const groupedArticles = articles.reduce((acc, article) => {
      const parentId = article.article.toString(); // Convert ObjectId to string
      if (!acc[parentId]) {
        acc[parentId] = [];
      }
      acc[parentId].push(article.toObject());
      return acc;
    }, {});

    // Format the result as an array
    return journeyIds.map((id) => ({
      articleIdInJourney: id,
      articleContents: groupedArticles[id] || [],
    }));
  } catch (error) {
    console.error('Error fetching articles:', error);
    return journeyIds.map((id) => ({
      articleIdInJourney: id,
      articleContents: [],
    }));
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
      articles: groupedArticles,
    });
  } catch (error) {
    console.error('Error fetching journeys:', error);
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Article ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.find({ article: articleId }).sort({
      number: 1,
    });

    const journey = await Journey.findById(articleId);
    const isCompleted = journey.isCompleted;
    const isPublished = journey.isPublished;

    if (article) {
      return res.status(200).json({
        isCompleted,
        isPublished,
        verses: article,
      });
    } else {
      return res
        .status(404)
        .json({ message: ERROR_MESSAGES.ARTICLE_NOT_FOUND });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Save Journey Cards //////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveJourneyStage = async (req, res) => {
  const { languageCode, journeyCards } = req.body;

  if (journeyCards.length === 0 || !languageCode) {
    return res
      .status(400)
      .json({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    let updatedJourneyCards = [];
    for (const journeyCard of journeyCards) {
      const journeyCardId = journeyCard.id;

      // If the journey card is new to save
      if (
        journeyCardId.startsWith('directory') ||
        journeyCardId.startsWith('article')
      ) {
        const card = new Journey({
          number: journeyCard.number,
          parent: journeyCard.parent,
          parentModel: journeyCard.parentModel,
          depth: journeyCard.depth,
          isArticle: journeyCard.isArticle,
          title: journeyCard.title,
          seriesTitle: journeyCard.seriesTitle,
          image: journeyCard.image,
          isCompleted: journeyCard.isCompleted,
          isPublished: journeyCard.isPublished,
        });

        const savedCard = await card.save();
        updatedJourneyCards.push(savedCard);
      } else {
        // if the journey card already exists
        // Get the existing journey card
        const existingJourneyInfo = await Journey.findById(
          journeyCardId,
        );

        // Merge existing title with the new value for the curent language
        const updatedTitle = {
          ...existingJourneyInfo.title,
          [languageCode]: journeyCard.title?.[languageCode],
        };

        // Merge existing series title with the new value for the current language
        const updatedSeriesTitle = {
          ...existingJourneyInfo.seriesTitle,
          [languageCode]: journeyCard.seriesTitle?.[languageCode],
        };

        // Prepare the updated Journey object with new information
        const updatedJourneyInfo = {
          parent: existingJourneyInfo.parent,
          parentModel: existingJourneyInfo.parentModel,
          isArticle: journeyCard.isArticle,
          title: updatedTitle,
          seriesTitle: updatedSeriesTitle,
          image: journeyCard.image,
          depth: journeyCard.depth,
          number: journeyCard.number,
        };

        // Update the journey document in db
        const updatedJourney = await Journey.findByIdAndUpdate(
          existingJourneyInfo._id,
          updatedJourneyInfo,
          {
            new: true,
            runValidators: true,
          },
        );

        updatedJourneyCards.push(updatedJourney);
      }
    }

    updatedJourneyCards.sort((a, b) => a.number - b.number);
    return res.status(200).json(updatedJourneyCards);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Save Article /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveArticle = async (req, res) => {
  try {
    const {
      parentId,
      languageCode,
      isCompleted,
      isPublished,
      verses,
    } = req.body;

    // Get the existing journey
    const existingJourneyInfo = await Journey.findById(parentId);

    // merge existing completion status with the new value for the current language
    const updatedIsCompleted = {
      ...existingJourneyInfo.isCompleted,
      [languageCode]: isCompleted,
    };

    // Merge existing publish status with the new value for the current language
    const updatedIsPublished = {
      ...existingJourneyInfo.isPublished,
      [languageCode]: isPublished,
    };

    // Prepare the updated Journey object with new information
    const updatedJourneyInfo = {
      parent: existingJourneyInfo.parent,
      parentModel: existingJourneyInfo.parentModel,
      isArticle: existingJourneyInfo.isArticle,
      title: existingJourneyInfo.title,
      image: existingJourneyInfo.image,
      depth: existingJourneyInfo.depth,
      seriesTitle: existingJourneyInfo.seriesTitle,
      isCompleted: updatedIsCompleted,
      isPublished: updatedIsPublished,
    };

    // Update the Journey document in database
    const updatedJourney = await Journey.findByIdAndUpdate(
      parentId,
      updatedJourneyInfo,
      {
        new: true,
        runValidators: true,
      },
    );

    // Update verses in the article collection
    let updatedArticleVerses = [];

    // Loop through each verse in the input array
    for (const verse of verses) {
      // Check if a verse with the give journey and number exists in database
      const existingVerse = await Article.findOne({
        article: parentId,
        number: verse.number,
      });

      if (!existingVerse) {
        // If the verse doesn't exist, create a new Article document
        const articleObj = new Article({
          article: parentId,
          text: verse.text,
          image: verse.image,
          number: verse.number,
          isCollapse: verse.isCollapse,
          title: verse.title,
          content: verse.content,
        });

        // Save new article document and add it to the array
        const newArticleObj = articleObj.save();
        updatedArticleVerses.push(newArticleObj);
      } else {
        // If the verse exists, update its fields
        existingVerse.title = {
          ...existingVerse.title,
          ...verse.title,
        };

        existingVerse.text = {
          ...existingVerse.text,
          ...verse.text,
        };

        existingVerse.image = {
          ...existingVerse.image,
          ...verse.image,
        };

        existingVerse.isCollapse = verse.isCollapse;
        existingVerse.updatedAt = Date.now();

        // Update the content array
        const updatedContent = [...verse.content];

        // Update the content field in the Article document
        existingVerse.content = updatedContent;

        // Save the updated article document
        const updatedVerse = await existingVerse.save();
        updatedArticleVerses.push(updatedVerse);
      }
    }

    const updatedArticle = {
      _id: updatedJourney._id,
      journeyNumber: updatedJourney.number,
      isCompleted: updatedJourney.isCompleted,
      isPublished: updatedJourney.isPublished,
      verses: updatedArticleVerses,
    };

    return res.status(200).json(updatedArticle);
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.SERVER_ERROR });
  }
};
