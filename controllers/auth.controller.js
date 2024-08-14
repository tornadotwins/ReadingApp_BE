import crypto from 'crypto';
import fs from 'fs';
import User from '../models/user.model';
import ERROR_MESSAGES from '../config/error.message';
import Config from '../config';
import { generateToken, decodeToken } from '../utils/utils';

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
  user.emailVerified = false;
  user.createdAt = Date.now();
  user.loginAt = Date.now();
  await user.save();

  // Generate Token.
  const token = generateToken({id: user._id}, Config.VERIFY_EMAIL_TIME);
  const redirectUrl = Config.BASE_URL + '/verify_email?token=' + token;

  // Send verification email.
  let html = fs.readFileSync("./email_templates/verify_email_template.html", "utf8");
  html = html.replace("{{redirect_url}}", redirectUrl);
  console.log('html: ', html);
  console.log('token: ', token);

  user.password = undefined;
  return res.status(200).send({
    user,
  });
}

/////////////////////////////////////////////////////////////////////////
////////////////////////// Verify Email /////////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.verifyEmail = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({message: ERROR_MESSAGES.EMPTY_BODY});
  }

  const { token } = req.body;
  const decodeData = decodeToken(token);
  if (decodeData && decodeData.id) {
    const user = await User.findById(decodeData.id);
    if (user) {
      user.emailVerified = true;
      await user.save();
      return res.status(200).send({
        message: 'Success!',
      });
    } else {
      return res.status(400).send({
        message: ACCOUNT_CANT_FIND,
      });
    }
  } else {
    return res.status(400).send({
      message: ACCOUNT_CANT_FIND,
    });  
  }
}

/////////////////////////////////////////////////////////////////////////
////////////////////////////// Login ////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.login = async (req, res) => {

}