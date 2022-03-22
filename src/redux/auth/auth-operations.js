import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const signup = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.signup(userData);
      alert(
        'Регистрация прошла успешно! Функционал подтверждения регистрции в разработке... ',
      );
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (userAuthData, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.user.login(userAuthData);
      serviceApi.token.set(data.result.token);
      return data.result;
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await serviceApi.user.logout();
      serviceApi.token.unset();
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);

export const refresh = createAsyncThunk(
  'user/refresh',
  async (_, { rejectWithValue }) => {
    try {
      console.log('auth thunk: request for current user data');
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);
