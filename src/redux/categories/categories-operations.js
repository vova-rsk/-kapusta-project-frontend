import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const getAll = createAsyncThunk(
  'categories/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.categories.getAll();
      console.log(data.result);
      return data.result;
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);
