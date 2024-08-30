import express from 'express';
import AuthController from '../controllers/auth.controller';
import { checkToken } from '../utils';

const router = express.Router();

router.post('/signup', AuthController.signup);
router.post('/verify_email', AuthController.verifyEmail);
router.post('/login', AuthController.login);
router.post('/forgot_password', AuthController.forgotPassword);
router.post('/reset_password', AuthController.resetPassword);
router.post('/verify_recaptcha_token', AuthController.verifyRecaptchaToken);

router.post('/update_settings', checkToken, AuthController.updateSettings);

export default router;
