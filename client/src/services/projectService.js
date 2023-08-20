import axios from 'axios';
import HTTPMEHOD from '../constants/method';
import ROUTEURL from '../constants/routeUrl';

// post the project
const addNewProject = async (payload) => {
  return await axios({
    method: HTTPMEHOD.POST,
    url: ROUTEURL.project,
    data: payload,
  });
};

// fetch the project
const fetchProject = async () => {
  return await axios({
    method: HTTPMEHOD.GET,
    url: ROUTEURL.project,
  });
};

// update the project
const updateProject = async (payload, projectId) => {
  return await axios({
    method: HTTPMEHOD.PATCH,
    url: `${ROUTEURL.project}/${projectId}`,
    data: payload,
  });
};

// delete project
const deleteProject = async (projectId) => {
  return await axios({
    method: HTTPMEHOD.DELETE,
    url: `${ROUTEURL.project}/${projectId}`,
  });
};

export { addNewProject, fetchProject, updateProject, deleteProject };
