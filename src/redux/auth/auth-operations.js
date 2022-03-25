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
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const persistedToken = state.auth.token;
      const persistedAuthType = state.auth.authorizationType;

      if (!persistedToken || !persistedAuthType) {
        return rejectWithValue({
          status: null,
          statusText: 'No token or auth status found',
        });
      }

      serviceApi.token.set(persistedToken);
      serviceApi.authorizationType.set(persistedAuthType);

      const { data } = await serviceApi.user.refresh();

      return data.result;
    } catch ({ response }) {
      const { status, statusText } = response.data;
      alert(status);
      return rejectWithValue({ status, statusText });
    }
  },
);
