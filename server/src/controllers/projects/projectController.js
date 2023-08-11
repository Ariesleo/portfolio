import { projectSchema } from './validation.js';
import statusCodes from '../../constants/statusCodes.js';
import * as projectService from '../../services/projects/projectService.js';

// validate the project request body
const validateProject = async (req, res, next) => {
  try {
    await projectSchema().validate(req.body, { abortEarly: false });
  } catch (e) {
    return next(createError(e));
  }
  next();
};

// POST project payload
const post = async (req, res, next) => {
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

export { post, validateProject };
