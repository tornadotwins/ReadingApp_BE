const AdminUser = require('../models/adminUser.model');
const ERROR_MESSAGES = require('../config/error.message');
const Config = require('../config');
const crypto = require('crypto');
const { generateToken } = require('../utils');

/////////////////////////////////////////////////////////////////////////
///////////////////////////////// Login /////////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.login = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { username, password } = req.body;

  // Check user is existing with username.
  const user = await AdminUser.findOneAndUpdate(
    { username },
    { lastLoggedInAt: Date.now() },
  );

  if (!user) {
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.USERNAME_NOT_EXIST });
  }

  const salt = user.password.split('$')[0];
  const hash = user.password.split('$')[1];
  const newHash = crypto
    .createHmac('sha512', salt)
    .update(password)
    .digest('base64');

  if (hash !== newHash) {
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.PASSWORD_INCORRECT });
  }

  const token = generateToken(
    { id: user._id },
    Config.ACCESS_TOKEN_TIME,
  );

  user.password = undefined;
  return res.status(200).send({ user, token });
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// Save User ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.saveUser = async (req, res) => {
  try {
    // Check if fields are existing.
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: ERROR_MESSAGES.EMPTY_BODY });
    }

    const { username, password, isAdmin } = req.body;
    console.log({ username, password, isAdmin });

    // Validate username is unique.
    const userByUsername = await AdminUser.findOne({ username });
    if (userByUsername) {
      return res
        .status(400)
        .send({ message: ERROR_MESSAGES.USERNAME_IN_USE });
    }

    const salt = crypto.randomBytes(16).toString('base64');
    const hash = crypto
      .createHmac('sha512', salt)
      .update(password)
      .digest('base64');

    const user = new AdminUser();
    user.username = username;
    user.isAdmin = isAdmin;
    user.roles = [];
    user.password = salt + '$' + hash;
    user.createdAt = Date.now();
    user.loginAt = Date.now();
    user.lastLoggedInAt = '';

    await user.save();

    user.password = undefined;
    return res.status(200).send({
      user,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: ERROR_MESSAGES.NETWORK_ERROR });
  }
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// Get Users ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getAllUsers = async (req, res) => {
  const users = await AdminUser.find();
  return res.status(200).send({ users });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Update User Info ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateUser = async (req, res) => {
  const updatedUserInfo = req.body;

  if (!updatedUserInfo)
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.INCORRECT_PARAMS });

  const userId = updatedUserInfo.id;

  const result = await AdminUser.findByIdAndUpdate(
    userId,
    updatedUserInfo,
  );

  return res.status(200).send(result);
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Delete User Info ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.deleteUser = async (req, res) => {
  const { userId } = req.body;

  if (!userId)
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.INCORRECT_PARAMS });

  const result = await AdminUser.findByIdAndDelete(userId);

  return res.status(200).send(result);
};

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Update Users /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateUsers = async (req, res) => {
  const updatedUserInfos = req.body;

  // Validate request body
  if (!updatedUserInfos || !Array.isArray(updatedUserInfos)) {
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.INCORRECT_PARAMS });
  }

  try {
    // Use Promise.all to handle multiple updates concurrently
    const updatePromises = updatedUserInfos.map(async (userInfo) => {
      if (!userInfo.id) {
        throw new Error(`User ID is required for updates`);
      }

      const result = await AdminUser.findByIdAndUpdate(
        userInfo.id,
        userInfo,
        { new: true }, // Return the updated document
      );

      if (!result) {
        throw new Error(`User with ID ${userInfo.id} not found`);
      }

      return result;
    });

    const updatedUsers = await Promise.all(updatePromises);

    return res.status(200).send({
      users: updatedUsers,
      message: 'Users updated successfully',
    });
  } catch (error) {
    console.error('Error updating users:', error);
    return res.status(400).send({
      message: error.message || ERROR_MESSAGES.UPDATE_FAILED,
    });
  }
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Delete Language ////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.deleteLanguage = async (req, res) => {
  const { language } = req.body;

  try {
    await AdminUser.updateMany(
      {},
      {
        $pull: {
          roles: {
            language: language,
          },
        },
      },
    );

    return res.status(200).send({
      message: 'The language has been deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting the language roles:', error);
  }
};
