const AdminUser = require('../models/adminUser.model');
const ERROR_MESSAGES = require('../config/error.message');
const Config = require('../config');
const { generateToken, encrypt, decrypt } = require('../utils');

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
  console.log(username, password);

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

  const cryptedPassword = encrypt(password);

  console.log(user.password, cryptedPassword);

  if (user.password != cryptedPassword) {
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
  // Check if fields are existing.
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { username, password, isAdmin } = req.body;

  // Validate username is unique.
  const userByUsername = await AdminUser.findOne({ username });
  if (userByUsername) {
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.USERNAME_IN_USE });
  }

  const cryptedPassword = encrypt(password);

  const user = new AdminUser();
  user.username = username;
  user.isAdmin = isAdmin;

  const anyUser = await AdminUser.findOne();
  const roles = anyUser?.roles;
  let newUserRoles = [];
  roles &&
    roles.map((role) =>
      newUserRoles.push({ language: role.language, role: 'none' }),
    );

  user.roles = newUserRoles;

  user.password = cryptedPassword;
  user.createdAt = Date.now();
  user.loginAt = Date.now();
  user.lastLoggedInAt = '';

  await user.save();

  user.password = password;

  return res.status(200).send({
    user,
  });
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////// Get Users ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.getAllUsers = async (req, res) => {
  const users = await AdminUser.find();

  users.forEach((user) => {
    user.password = decrypt(user.password);
  });

  return res.status(200).send({ users });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Update User Info ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.updateUser = async (req, res) => {
  const newUser = req.body;

  if (!newUser)
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.INCORRECT_PARAMS });

  const encryptedPassword = encrypt(newUser.password);

  const userId = newUser.id;

  const existingUser = await AdminUser.findById(userId);

  if (!existingUser) {
    return res
      .status(404)
      .send({ message: ERROR_MESSAGES.USER_NOT_FOUND });
  }

  existingUser.roles = newUser.roles;
  existingUser.username = newUser.username;
  existingUser.password = encryptedPassword;
  existingUser.isAdmin = newUser.isAdmin;

  const updatedUser = await existingUser.save();
  updatedUser.password = newUser.password;

  return res.status(200).send({ user: updatedUser });
};

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Delete User Info ///////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!id)
    return res
      .status(400)
      .send({ message: ERROR_MESSAGES.INCORRECT_PARAMS });

  const user = await AdminUser.findByIdAndDelete(id);
  user.password = '';

  return res.status(200).send({ user });
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
    updatedUserInfos.map(async (userInfo) => {
      if (!userInfo._id) {
        return res.status(400).send({
          message:
            ERROR_MESSAGES.USER_NOT_FOUND + ': ' + userInfo._id,
        });
      }

      const existingUser = await AdminUser.findById(userInfo._id);
      existingUser.username = userInfo.username;
      existingUser.password = encrypt(userInfo.password);
      existingUser.roles = userInfo.roles;
      existingUser.isAdmin = userInfo.isAdmin;
      existingUser.updatedAt = Date.now();

      const updatedUser = await existingUser.save();

      if (!updatedUser) {
        return res.status(400).send({
          message: ERROR_MESSAGES.UPDATE_FAILED,
        });
      }
    });

    const allUsers = await AdminUser.find();

    return res.status(200).send({
      users: allUsers,
    });
  } catch (error) {
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
