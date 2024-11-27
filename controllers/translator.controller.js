const AppText = require('../models/appText.model');
const AppTextPage = require('../models/appTextPage.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
/////////////////////////// Get All App Texts ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getAppTexts = async (req, res) => {
  try {
    const appTextPages = await AppTextPage.find().sort({ number: 1 });

    const groupedAppTexts = await Promise.all(
      appTextPages.map(async (appTextBook) => {
        const appTexts = await AppText.find({
          page: appTextBook._id,
        });
        return {
          pageId: appTextBook._id,
          pageTitle: appTextBook.title,
          pageNumber: appTextBook.number,
          isCompleted: appTextBook.isCompleted,
          isPublished: appTextBook.isPublished,
          texts: appTexts,
        };
      }),
    );

    return res.status(200).json(groupedAppTexts);
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_GET_APP_TEXTS,
      error: error.message,
    });
  }
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
    const { texts } = req.body;

    if (!texts || !Array.isArray(texts)) {
      return res.status(400).json({
        message: "Invalid input. 'texts' must be an array.",
      });
    }

    const updatePromises = texts.map(async (text) => {
      const { _id, text: nestedUpdates } = text;

      if (
        !_id ||
        !nestedUpdates ||
        typeof nestedUpdates !== 'object'
      ) {
        return Promise.reject({
          status: 400,
          message: ERROR_MESSAGES.INCORRECT_PARAMS,
        });
      }

      const existingText = await AppText.findById(_id);

      if (!existingText) {
        return Promise.reject({
          status: 400,
          message: `App text with id ${_id} not found.`,
        });
      }

      // Construct nested field updates using dot notation
      const updateFields = {};
      for (const [key, value] of Object.entries(nestedUpdates)) {
        updateFields[`text.${key}`] = value;
      }

      return AppText.findByIdAndUpdate(
        _id,
        { $set: { ...updateFields, updatedAt: Date.now() } },
        { new: true },
      );
    });

    const updateResults = await Promise.allSettled(updatePromises);

    const successfulUpdates = updateResults
      .filter((result) => result.status === 'fulfilled')
      .map((result) => result.value);

    const errors = updateResults
      .filter((result) => result.status === 'rejected')
      .map((result) => result.reason);

    if (errors.length > 0) {
      return res.status(207).json({
        message: 'Partial updates applied.',
        updatedTexts: successfulUpdates,
        errors,
      });
    }

    return res.status(200).json(successfulUpdates);
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_UPDATE_APP_TEXT,
      error: error.message,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
////////////////////////// Update App Text Page /////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateAppTextPage = async (req, res) => {
  try {
    const { pageId, updates } = req.body;

    // Construct the update object for nested fields
    const updateFields = {};
    for (const [key, value] of Object.entries(updates)) {
      if (typeof value === 'object' && !Array.isArray(value)) {
        // For nested objects, use dot notation
        for (const [nestedKey, nestedValue] of Object.entries(
          value,
        )) {
          updateFields[`${key}.${nestedKey}`] = nestedValue;
        }
      } else {
        // For non-nested fields
        updateFields[key] = value;
      }
    }

    // Perform the update
    const updatedPage = await AppTextPage.findByIdAndUpdate(
      pageId,
      { $set: updateFields, updatedAt: Date.now() },
      { new: true },
    );

    if (!updatedPage) {
      return res.status(404).json({
        message: ERROR_MESSAGES.PAGE_NOT_FOUND,
      });
    }

    return res.status(200).json(updatedPage);
  } catch (error) {
    return res.status(400).json({
      message: ERROR_MESSAGES.FAIL_UPDATE_PAGE,
      error: error.message,
    });
  }
};
