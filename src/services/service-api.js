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

const signup = async userData => await axios.post('user/signup', userData);

const login = async userData => await axios.post('user/login', userData);

const logout = async () => await axios.post('user/logout');

const serviceApi = {
  user: {
    signup,
    login,
    logout,
  },
  contacts: {},
  token,
};

export default serviceApi;
