import axios from 'axios';
import ROUTEURL from '../constants/routeUrl';
import HTTPMEHOD from '../constants/method';

// post the query
const postQuery = async (payload) => {
  return await axios({
    method: HTTPMEHOD.POST,
    url: ROUTEURL.contact,
    data: payload,
  });
};

export { postQuery };
