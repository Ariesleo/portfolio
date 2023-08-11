import * as projectDAO from '../../dao/projectsDAO/projectDao.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const createProject = async (data) => {
  try {
    const addProject = await projectDAO.createProject(data);
    return addProject;
  } catch (err) {
    throw new ApplicationError(err);
  }
};

const getProjects = async () => {
  try {
    return await projectDAO.findAllProjects();
  } catch (err) {
    throw new ApplicationError(err);
  }
};

const removeProjectById = async (projectId) => {
  try {
    return await projectDAO.deleteProject(projectId);
  } catch (err) {
    throw new ApplicationError(err);
  }
};

export { createProject, getProjects, removeProjectById };
