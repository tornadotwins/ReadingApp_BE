const Article = require('../models/article.model');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Get All Article ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getArticle = async (req, res) => {
  try {
    const { articleId } = req.params;
    const article = await Article.find({ article: articleId }).sort({
      number: 1,
    });

    if (article) {
      return res.status(200).json(article);
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
