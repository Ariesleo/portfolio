import express from 'express';
import * as authController from '../controllers/auth/authController.js';

const router = express.Router();

router.route('/signin').post(authController.login);

export default router;
