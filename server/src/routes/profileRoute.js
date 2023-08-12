import express from 'express';
import * as profileController from '../controllers/profile/profileController.js';

const router = express.Router();

// contact route
router
  .route('/')
  .patch(profileController.validateProfile, profileController.patchProfile)
  .get(profileController.getProfile);

export default router;
