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

const updateProfile = async (payload, jwtToken) => {
  return await axios.patch(ROUTEURL.profile, payload, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export { fetchProfile, updateProfile };
