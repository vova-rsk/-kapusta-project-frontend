import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      console.log('request for registration');
      const response = serviceApi.user.registerUser(userData);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (userAuthData, { rejectWithValue }) => {
    try {
      console.log('auth thunk: request for token');
    } catch (error) {
      console.log(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceApi.user.logout();
      serviceApi.token.unset();
    } catch (error) {
      const {
        data: { code, message },
      } = error.response;
      return rejectWithValue({ code, message });
    }
  },
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      console.log('auth thunk: request for current user data');
    } catch (error) {
      console.log(error.message);
    }
  },
);
