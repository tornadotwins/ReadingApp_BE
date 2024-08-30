import jwt from 'jsonwebtoken';

/////////////////////////////////////////////////////////////////////////
////////// Generate Token by payload data and expiresIn  ////////////////
/////////////////////////////////////////////////////////////////////////
exports.generateToken = (payload, expiresIn) => {
  return jwt.sign(payload, process.env.CRYPTR_KEY, {
    expiresIn: expiresIn,
  });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Decode token  //////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.decodeToken = (token) => {
  const decoded = jwt.verify(token, process.env.CRYPTR_KEY);
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
    })
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length)
  }
  try {
    const decoded = jwt.verify(token, process.env.CRYPTR_KEY)
    if (decoded.id) {
      req.currentUserId = decoded.id
      next()
    }
    return true
  } catch (error) {
    console.log('error: ', error)
    return res.status(401).send({
      status: false,
    })
  }
}
