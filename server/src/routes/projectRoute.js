import express from 'express';
import * as projectController from '../controllers/projects/projectController.js';

const router = express.Router();

// contact route
router
  .route('/')
  .post(projectController.validateProject, projectController.postProject)
  .get(projectController.getProjects);

// delete
router
  .route('/:id')
  .delete(projectController.deleteProjectById)
  .patch(
    projectController.validatePartialData,
    projectController.updateProject
  );

export default router;
