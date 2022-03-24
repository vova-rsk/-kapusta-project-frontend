import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';
import { AUTH_TYPE } from '../../utils/constants';

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
      const { data } =
        userAuthData.authType === AUTH_TYPE.BY_GOOGLE
          ? await serviceApi.user.googleLogin(userAuthData.token)
          : await serviceApi.user.login({
              email: userAuthData.email,
              password: userAuthData.password,
            });

      data.result.authorizationType = userAuthData.authType;
      serviceApi.token.set(data.result.token);
      serviceApi.authorizationType.set(userAuthData.authType);

      return data.result;
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (authType, { rejectWithValue }) => {
    try {
      await serviceApi.user.logout();
      serviceApi.token.unset();
      serviceApi.authorizationType.unset();
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
