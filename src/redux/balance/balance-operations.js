import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceApi from '../../services/service-api';

export const get = createAsyncThunk(
  'balance/get',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.balance.get();
      console.log(data.result);
      return data.result;
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);

export const post = createAsyncThunk(
  'balance/get',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await serviceApi.balance.postEntryFee({ value });
      console.log(data.result);
      return data.result;
    } catch ({ response }) {
      const { code, message } = response.data;
      return rejectWithValue({ code, message });
    }
  },
);
