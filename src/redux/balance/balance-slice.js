import { createSlice } from '@reduxjs/toolkit';
import * as balanceOperations from './balance-operations';

const initialState = {
  isLoading: false,
  isError: false,
  value: null,
  error: {
    code: null,
    message: null,
  },
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: {
    // ========== get reducers =========== //
    [balanceOperations.get.pending]: state => {
      state.isLoading = true;
    },
    [balanceOperations.get.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.error = null;
      state.isLoading = false;
      state.isError = false;
    },
    [balanceOperations.get.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default balanceSlice.reducer;
