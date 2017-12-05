const PROJECT_URL = 'http://localhost:3000/rjxycmnsgkfqere';
const API_URL = 'http://localhost:3000';

export default {
  project: PROJECT_URL,
  apiUrl: API_URL,
  forms: {
    login: PROJECT_URL + '/user/login',
    register: PROJECT_URL + '/user/register'
  },
  resources: {
    user: PROJECT_URL + '/user'
  }
};
