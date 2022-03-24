import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  isAuthorized: false,
  authorizationType: null,
  isLoading: false,
  isError: false,
  token: null,
  user: {
    name: null,
    email: null,
    avatarUrl: null,
  },
  error: {
    code: null,
    message: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // ========== signup reducers =========== //
    [authOperations.signup.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.signup.fulfilled]: (state, action) => {
      // state.token = action.payload.token;
      // state.user = action.payload.user;
      state.error = null;
      // state.isAuthorized = true;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.signup.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
    // ========== login reducers =========== //
    [authOperations.login.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthorized = true;
      state.authorizationType = action.payload.authorizationType;
      state.error = null;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.login.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
    // ========== logout reducers =========== //
    [authOperations.logout.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.logout.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.error = null;
      state.isAuthorized = false;
      state.authorizationType = null;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.logout.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
    // ========== refresh reducers =========== //
    [authOperations.refresh.pending]: state => {
      state.isLoading = true;
    },
    [authOperations.refresh.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.error = null;
      state.isAuthorized = true;
      state.isLoading = false;
      state.isError = false;
    },
    [authOperations.refresh.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
