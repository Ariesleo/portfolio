import * as projectDAO from '../../dao/projectsDAO/projectDao.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const createProject = async (dataQuery) => {
  try {
    const addProject = await projectDAO.createProject(dataQuery);
    return addProject;
  } catch (err) {
    throw new ApplicationError(err);
  }
};

export { createProject };
