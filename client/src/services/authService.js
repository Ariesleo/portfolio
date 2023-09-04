import axios from 'axios';
import ROUTEURL from '../constants/routeUrl';
import HTTPMEHOD from '../constants/method';

// post the query
const signIn = async (payload) => {
  return await axios({
    method: HTTPMEHOD.POST,
    url: ROUTEURL.auth.login,
    data: payload,
  });
};

export { signIn };
