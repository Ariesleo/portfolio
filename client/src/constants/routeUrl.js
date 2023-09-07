const baseUrl = process.env.REACT_APP_API_URL;

const ROUTEURL = {
  profile: `${baseUrl}/api/v1/profile`,
  project: `${baseUrl}/api/v1/projects`,
  contact: `${baseUrl}/api/v1/contacts`,
  auth: {
    login: `${baseUrl}/api/v1/auth/signin`,
  },
};

export default ROUTEURL;
