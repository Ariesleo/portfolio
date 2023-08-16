import axios from 'axios';
import ROUTEURL from '../constants/routeUrl';
import HTTPMEHOD from '../constants/method';

// fetch the profile data
const fetchProfile = async () => {
  return await axios({
    method: HTTPMEHOD.GET,
    url: ROUTEURL.profile,
  });
};

const updateProfile = async (payload) => {
  return await axios({
    method: HTTPMEHOD.PATCH,
    url: ROUTEURL.profile,
    data: payload,
  });
};

export { fetchProfile, updateProfile };
