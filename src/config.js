const PROJECT_URL = 'https://example.form.io';
const API_URL = 'https://api.form.io';

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
