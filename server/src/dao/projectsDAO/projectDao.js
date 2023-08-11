import { ProjectModel } from '../../models/projectsSchema.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

const createProject = async (data) => {
  try {
    const res = await ProjectModel.create(data);
    return res;
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

export { createProject };
