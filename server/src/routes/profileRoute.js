import express from 'express';
import * as profileController from '../controllers/profile/profileController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

// contact route
router
  .route('/')
  .patch(
    verifyToken,
    profileController.validateProfile,
    profileController.patchProfile
  )
  .get(profileController.getProfile);

export default router;
