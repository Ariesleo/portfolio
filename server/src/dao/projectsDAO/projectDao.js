import { ProjectModel } from '../../models/projectsSchema.js';
import { CommonError } from '../../lib/api/error/commonError.js';
import { ApplicationError } from '../../lib/api/error/applicationError.js';

// add new project
const createProject = async (data) => {
  try {
    const res = await ProjectModel.create(data);
    return res;
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

// get all projects
const findAllProjects = async () => {
  try {
    return await ProjectModel.find({});
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

// delete project as per the id
const deleteProject = async (projectId) => {
  try {
    return await ProjectModel.findByIdAndDelete(projectId).select('-image');
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

// update data
const updateProject = async (projectId, payload) => {
  try {
    /* By adding the { new: true } option, you instruct Mongoose to return the updated document instead of the original document. */
    /* exclude the image field from the response */
    return await ProjectModel.findByIdAndUpdate(projectId, payload, {
      new: true,
    }).select('-image');
  } catch (err) {
    throw new ApplicationError(CommonError.INTERNAL_SERVER_ERROR);
  }
};

export { createProject, findAllProjects, deleteProject, updateProject };
