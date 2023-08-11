import { projectSchema, patchProjectSchema } from './validation.js';
import statusCodes from '../../constants/statusCodes.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { createError } from '../../lib/api/error/errorFactory.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';
import * as projectService from '../../services/projects/projectService.js';

// validate the project request body
const validateProject = async (req, res, next) => {
  try {
    await projectSchema().validate(req.body, {
      abortEarly: false,
    });
  } catch (e) {
    return next(createError(e));
  }
  next();
};

// validate the partial project request body
const validatePartialData = async (req, res, next) => {
  try {
    await patchProjectSchema().validate(req.body, {
      abortEarly: false,
    });
  } catch (e) {
    return next(createError(e));
  }
  next();
};

// POST project payload
const postProject = async (req, res, next) => {
  const payload = req.body;
  try {
    const newProject = await projectService.createProject(payload);
    res.status(statusCodes.CREATED).send({
      success: 'true',
      message: 'New project was added.',
      data: newProject,
    });
  } catch (err) {
    next(err);
  }
};

// GET all projects
const getProjects = async (req, res, next) => {
  try {
    const projectData = await projectService.getProjects();
    res.status(statusCodes.OK).send({
      success: 'true',
      message: 'Projects data fetched.',
      data: projectData,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE project by id
const deleteProjectById = async (req, res, next) => {
  const projectId = req.params.id;
  try {
    const projectData = await projectService.removeProjectById(projectId);
    if (!projectData) {
      throw new ApplicationError(CommonError.RESOURCE_NOT_FOUND);
    } else {
      res.status(statusCodes.OK).send({
        success: 'true',
        message: `Project with id: ${projectId} was deleted sucessfully`,
        data: projectData,
      });
    }
  } catch (err) {
    next(err);
  }
};

// PATCH project by id and payload received
const updateProject = async (req, res, next) => {
  const projectId = req.params.id;
  const payload = req.body;
  try {
    const projectData = await projectService.updateProjectById(
      projectId,
      payload
    );
    if (!projectData) {
      throw new ApplicationError(CommonError.RESOURCE_NOT_FOUND);
    } else {
      res.status(statusCodes.OK).send({
        success: 'true',
        message: `Project with id: ${projectId} was updated sucessfully`,
        data: projectData,
      });
    }
  } catch (err) {
    next(err);
  }
};

export {
  postProject,
  validateProject,
  getProjects,
  deleteProjectById,
  updateProject,
  validatePartialData,
};
