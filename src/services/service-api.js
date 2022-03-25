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

const authorizationType = {
  set(type) {
    axios.defaults.headers.common.authorizationType = type;
  },
  unset() {
    delete axios.defaults.headers.common.authorizationType;
  },
};

const signup = async userData => await axios.post('user/signup', userData);
const login = async userData => await axios.post('user/login', userData);
const logout = async () => await axios.post('user/logout');
const refresh = async () => await axios.get('user/current');
const googleLogin = async token =>
  await axios.post('user/google-auth', { token });

const serviceApi = {
  user: {
    signup,
    login,
    logout,
    refresh,
    googleLogin,
  },
  transactions: {},
  token,
  authorizationType,
};

export default serviceApi;
