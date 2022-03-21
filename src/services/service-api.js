import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup = async userData => {
  return await axios.post('user/signup', userData);
};

const logout = async () => {
  return await axios.post('user/logout');
};

const serviceApi = {
  user: {
    signup,
    logout,
  },
  contacts: {},
  token,
};

export default serviceApi;
