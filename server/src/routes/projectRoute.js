import express from 'express';
import * as projectController from '../controllers/projects/projectController.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
// contact route
router
  .route('/')
  .post(
    verifyToken,
    projectController.validateProject,
    projectController.postProject
  )
  .get(projectController.getProjects);

// delete
router
  .route('/:id')
  .delete(verifyToken, projectController.deleteProjectById)
  .patch(
    verifyToken,
    projectController.validatePartialData,
    projectController.updateProject
  );

export default router;
