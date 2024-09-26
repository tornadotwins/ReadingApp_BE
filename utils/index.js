const jwt = require('jsonwebtoken');
const ERROR_MESSAGES = require('../config/error.message');

/////////////////////////////////////////////////////////////////////////
////////// Generate Token by payload data and expiresIn  ////////////////
/////////////////////////////////////////////////////////////////////////
exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, (process.env.CRYPTR_KEY || "YTkxOGhcE1MjQtMzJkOMBC00MWJiLTg0NzAtZGZmOYIVHVJHVDI2ZDlhNzRh"), {
    expiresIn: expiresIn,
  });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Decode token  //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.decodeToken = (token) => {
  const decoded = jwt.verify(token, (process.env.CRYPTR_KEY || "YTkxOGhcE1MjQtMzJkOMBC00MWJiLTg0NzAtZGZmOYIVHVJHVDI2ZDlhNzRh"));
  return decoded;
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Check token  ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.checkToken = (req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']
  if (!token) {
    return res.status(401).send({
      status: false,
      message: ERROR_MESSAGES.NO_TOKEN,
    })
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }
  try {
    const decoded = jwt.verify(token, (process.env.CRYPTR_KEY || "YTkxOGhcE1MjQtMzJkOMBC00MWJiLTg0NzAtZGZmOYIVHVJHVDI2ZDlhNzRh"))
    if (decoded.id) {
      req.currentUserId = decoded.id
      next()
    }
    return true
  } catch (error) {
    return res.status(401).send({
      status: false,
      message: ERROR_MESSAGES.TOKEN_EXPIRED,
    })
  }
}
