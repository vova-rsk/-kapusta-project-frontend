import axios from 'axios';

const URL = {
  USER: {
    SIGNUP: 'user/signup',
    LOGIN: 'user/login',
    LOGOUT: 'user/logout',
    REFRESH: 'user/current',
    GOOGLE_AUTH: 'user/google-auth',
  },
  CATEGORIES: '/api/categories',
  BALANCE: '/api/balance',
  TRANSACTIONS: '/api/transactions',
};

axios.defaults.baseURL =
  process.env.REACT_APP_BACKEND_HOST || process.env.BACKEND_HOST;

const serviceApi = {
  token: {
    set: token => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset: () => {
      axios.defaults.headers.common.Authorization = '';
    },
  },
  authorizationType: {
    set: type => {
      axios.defaults.headers.common.authorizationType = type;
    },
    unset: () => {
      delete axios.defaults.headers.common.authorizationType;
    },
  },
  // ========= user service api =========
  user: {
    signup: async userData => {
      return await axios.post(URL.USER.SIGNUP, userData);
    },
    login: async userData => {
      return await axios.post(URL.USER.LOGIN, userData);
    },
    logout: async () => {
      return await axios.post(URL.USER.LOGOUT);
    },
    refresh: async () => {
      return await axios.get(URL.USER.REFRESH);
    },
    googleLogin: async token => {
      return await axios.post(URL.USER.GOOGLE_AUTH, { token });
    },
  },
  // ========= categories service api =========
  categories: {
    getAll: () => {
      return axios.get(URL.CATEGORIES);
    },
    postOne: categoryData => {
      return axios.post(URL.CATEGORIES, categoryData);
    },
  },
  // ========= balance service api =========
  balance: {
    get: () => {
      return axios.get(URL.BALANCE);
    },
    postEntryFee: value => {
      return axios.post(URL.BALANCE, { value });
    },
  },
  // ========= transactions service api =========
  transactions: {
    getSome: reqData => {
      return axios.get(URL.TRANSACTIONS);
    },
    postOne: reqData => {
      return axios.post(URL.TRANSACTIONS, reqData);
    },
    deleteOne: transactionId => {
      return axios.delete(`${URL.TRANSACTIONS}/${transactionId}`);
    },
  },
  // ========= reports service api =========
  reports: {},
};

export default serviceApi;
