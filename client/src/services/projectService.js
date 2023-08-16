import axios from 'axios';
import HTTPMEHOD from '../constants/method';
import ROUTEURL from '../constants/routeUrl';

// post the project
const addNewProject = async (payload) => {
  try {
    return await axios({
      method: HTTPMEHOD.POST,
      url: ROUTEURL.project,
      data: payload,
    });
  } catch (err) {
    console.log(err);
  }
};

// fetch the project
const fetchProject = async () => {
  try {
    return await axios({
      method: HTTPMEHOD.GET,
      url: ROUTEURL.project,
    });
  } catch (err) {
    console.log(err);
  }
};

// update the project
const updateProject = async (payload, projectId) => {
  try {
    return await axios({
      method: HTTPMEHOD.PATCH,
      url: `${ROUTEURL.project}/${projectId}`,
      data: payload,
    });
  } catch (err) {
    console.log(err);
  }
};

// delete project
const deleteProject = async (projectId) => {
  try {
    return await axios({
      method: HTTPMEHOD.DELETE,
      url: `${ROUTEURL.project}/${projectId}`,
    });
  } catch (err) {
    console.log(err);
  }
};

export { addNewProject, fetchProject, updateProject, deleteProject };
