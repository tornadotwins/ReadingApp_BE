import crypto from 'crypto';
import fs from 'fs';
import axios from 'axios';

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
    return res.status(400).json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { username, email, password } = req.body;

  // Validate username is unique.
  const userByUsername = await User.findOne({ username });
  if (userByUsername) {
    return res.status(400).send({ message: ERROR_MESSAGES.USERNAME_IN_USE });
  }

  // Validate email is unique.
  const userByEmail = await User.findOne({ email });
  if (userByEmail) {
    return res.status(400).send({ message: ERROR_MESSAGES.EMAIL_IN_USE });
  }

  const salt = crypto.randomBytes(16).toString('base64');
  const hash = crypto.createHmac('sha512', salt).update(password).digest("base64");

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
  const token = generateToken({ id: user._id }, Config.VERIFY_EMAIL_TIME);
  const redirectUrl = Config.BASE_URL + '/auth/login?token=' + token + '&type=signup';

  // Send verification email.
  let html = fs.readFileSync("./email_templates/verify_email_template.html", "utf8");
  html = html.replace("{{redirect_url}}", redirectUrl);
  console.log('redirectUrl: ', redirectUrl);

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
    return res.status(400).json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { token } = req.body;
  let decodeData;
  try {
    decodeData = decodeToken(token);
  } catch (error) {
    return res.status(400).send({
      message: ERROR_MESSAGES.TOKEN_NOT_VALID,
    });
  };
  
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
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { username, password } = req.body;

  // Check user is existing with username.
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send({ message: ERROR_MESSAGES.USERNAME_NOT_EXIST });
  }

  // Check user's email is verified.
  if (!user.emailVerified) {
    return res.status(400).send({ message: ERROR_MESSAGES.EMAIL_NOT_VERIFIED });
  }

  // Check user is blocked.
  if (user.blocked) {
    return res.status(400).send({ message: ERROR_MESSAGES.ACCOUNT_BLOCKED });
  }

  const salt = user.password.split('$')[0];
  const hash = user.password.split('$')[1];
  const newHash = crypto.createHmac('sha512', salt).update(password).digest("base64");
  if (hash !== newHash) {
    return res.status(400).send({ message: ERROR_MESSAGES.PASSWORD_INCORRECT });
  }

  const token = generateToken({ id: user._id }, Config.ACCESS_TOKEN_TIME);
  user.password = undefined;
  return res.status(200).send({ user, token });
}

/////////////////////////////////////////////////////////////////////////
///////////////////////// Forgot Password ///////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.forgotPassword = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { email } = req.body;

  // Check user is existing with email.
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send({ message: ERROR_MESSAGES.USERNAME_NOT_EXIST });
  }

  // Generate Token.
  const token = generateToken({ id: user._id }, Config.VERIFY_EMAIL_TIME);
  const redirectUrl = Config.BASE_URL + '/auth/reset?token=' + token;

  // Send verification email.
  let html = fs.readFileSync("./email_templates/reset_password_template.html", "utf8");
  html = html.replace("{{redirect_url}}", redirectUrl);
  console.log('redirectUrl: ', redirectUrl);

  return res.status(200).send({ message: 'Success!' });
}

/////////////////////////////////////////////////////////////////////////
///////////////////////// Reset Password ////////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.resetPassword = async (req, res) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: ERROR_MESSAGES.EMPTY_BODY });
  }

  const { password, token } = req.body;
  const decodeData = decodeToken(token);
  if (decodeData && decodeData.id) {
    const user = await User.findById(decodeData.id);
    if (user) {
      const salt = crypto.randomBytes(16).toString('base64');
      const hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
      user.password = salt + "$" + hash;
      await user.save();
      return res.status(200).send({ message: 'Success!' });
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
//////////////////// Verify Recaptcha Token /////////////////////////////
/////////////////////////////////////////////////////////////////////////
exports.verifyRecaptchaToken = async (req, res) => {
  const { token, action } = req.body;
  const data = {
    event: {
      token,
      expectedAction: action,
      siteKey: process.env.RECAPTCHA_SITE_KEY,
    }
  };

  const url = `https://recaptchaenterprise.googleapis.com/v1/projects/litenote-5a22c/assessments?key=${process.env.GOOGLE_API_KEY}`;
   axios.post(url, data)
  .then(function (response) {
    return res.status(200).send(response.data);
  })
  .catch(function (error) {
    console.log('error: ', error);
    return res.status(404).send({ error });
  });
}
