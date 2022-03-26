import { createSlice } from '@reduxjs/toolkit';
import * as categoriesOperations from './categories-operations';

const initialState = {
  isLoading: false,
  isError: false,
  list: [],
  error: {
    code: null,
    message: null,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    // ========== get reducers =========== //
    [categoriesOperations.getAll.pending]: state => {
      state.isLoading = true;
    },
    [categoriesOperations.getAll.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.error = null;
      state.isLoading = false;
      state.isError = false;
    },
    [categoriesOperations.getAll.rejected]: (state, action) => {
      state.isError = true;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default categoriesSlice.reducer;
