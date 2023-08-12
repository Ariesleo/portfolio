import express from 'express';
import * as profileController from '../controllers/profile/profileController.js';

const router = express.Router();

// contact route
router
  .route('/')
  .patch(profileController.validateProfile, profileController.postProfile);

// delete
// router
//   .route('/:id')
//   .delete(projectController.deleteProjectById)
//   .patch(
//     projectController.validatePartialData,
//     projectController.updateProject
//   );

export default router;
