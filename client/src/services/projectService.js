import axios from 'axios';
import HTTPMEHOD from '../constants/method';
import ROUTEURL from '../constants/routeUrl';

// fetch the project
const fetchProject = async () => {
  return await axios({
    method: HTTPMEHOD.GET,
    url: ROUTEURL.project,
  });
};

// post the project
const addNewProject = async (payload, jwtToken) => {
  console.log(payload, jwtToken);
  return await axios.post(ROUTEURL.project, payload, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

// update the project
const updateProject = async (payload, projectId, jwtToken) => {
  return await axios.patch(`${ROUTEURL.project}/${projectId}`, payload, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

// delete project
const deleteProject = async (projectId, jwtToken) => {
  return await axios.delete(`${ROUTEURL.project}/${projectId}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { addNewProject, fetchProject, updateProject, deleteProject };
