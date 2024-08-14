import express from 'express';
import { signup, verifyEmail } from '../controllers/auth.controller';

const router = express.Router();

router.post('/signup', signup); 
router.post('/verify_email', verifyEmail);

export default router;
