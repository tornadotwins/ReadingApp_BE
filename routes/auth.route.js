import express from 'express';
import { signup, verifyEmail, login, forgotPassword, verifyRecaptchaToken } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signup); 
router.post('/verify_email', verifyEmail);
router.post('/login', login);
router.post('/forgot_password', forgotPassword);
router.post('/verify_recaptcha_token', verifyRecaptchaToken);

export default router;
