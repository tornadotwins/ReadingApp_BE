import crypto from 'crypto';
import User from '../models/user.model';
import ERROR_MESSAGES from '../config/error.message';
import Config from '../config';
import { generateToken } from '../utils/utils';

/////////////////////////////////////////////////////////////////////////
//////////////////////////// Sign Up ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.signup = async (req, res) => {

  // Check if fields are existing.
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({message: ERROR_MESSAGES.EMPTY_BODY});
  }

  const { username, email, password } = req.body;
  
  // Validate username is unique.
  const userByUsername = await User.findOne({ username });
  if (userByUsername) {
    return res.status(400).send({message: ERROR_MESSAGES.USERNAME_IN_USE});
  }

  // Validate email is unique.
  const userByEmail = await User.findOne({ email });
  if (userByEmail) {
    return res.status(400).send({message: ERROR_MESSAGES.EMAIL_IN_USE});
  }

  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto.createHmac('sha512',salt).update(password).digest("base64");

  const user = new User();
  user.username = username;
  user.email = email;
  user.password = salt + "$" + hash;
  user.blocked = false;
  user.createdAt = Date.now();
  user.loginAt = Date.now();
  await user.save();

  // Generate Token.
  const token = generateToken({id: user._id}, Config.TOKEN_EXPIRE_DURATION);

  user.password = undefined;
  return res.status(200).send({
    user,
    token,
  });
}
