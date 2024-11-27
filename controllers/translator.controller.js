const AppText = require('../models/appText.model');
const AppTextPage = require('../models/appTextPage.model');
const ERROR_MESSAGES = require('../config/error.message');

exports.getAppTexts = async (req, res) => {
  const appTextBooks = await AppTextPage.find().sort({ number: 1 });

  appTextBooks.map(async (appTextBook) => {
    const appTexts = await AppText.find({ page: appTextBook._id });
  });
};

/////////////////////////////////////////////////////////////////////////
////////////////////////// Create App Text Page /////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.createAppTextPage = async (req, res) => {
  try {
    const { title, number, isCompleted, isPublished } = req.body;

    const appTextPage = new AppTextPage({
      title,
      number,
      isCompleted,
      isPublished,
    });

    const newAppTextPage = await appTextPage.save();

    return res.status(200).json(newAppTextPage);
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_CREATE_PAGE,
      error: error,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Create App Text ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.createAppText = async (req, res) => {
  try {
    const { variable, image, page, text } = req.body;

    const appText = new AppText({
      variable,
      image,
      page,
      text,
    });

    const newAppText = await appText.save();

    return res.status(200).json(newAppText);
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_CREATE_APP_TEXT,
      error: error,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Update App Text ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateAppTexts = async (req, res) => {
  try {
    const { page, texts } = req.body;

    const existingAppTexts = await AppText.find({ page: page });
    
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_UPDATE_APP_TEXT,
      error: error,
    });
  }
};
