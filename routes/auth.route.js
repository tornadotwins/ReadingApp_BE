import express from 'express';
import { signup, verifyEmail, login, forgotPassword } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signup); 
router.post('/verify_email', verifyEmail);
router.post('/login', login);
router.post('/forgot_password', forgotPassword);

export default router;
