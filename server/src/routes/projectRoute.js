import express from 'express';
import * as projectController from '../controllers/projects/projectController.js';

const router = express.Router();

// contact route
router
  .route('/')
  .post(projectController.validateProject, projectController.postProject)
  .get(projectController.getProjects);

export default router;
