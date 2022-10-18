import { createAsyncThunk } from '@reduxjs/toolkit';
import { IData, join, JoinData, logIn, LogInData } from '../data/user';

export const joinAPI = createAsyncThunk('user/join', async (data: JoinData, { rejectWithValue }) => {
  try {
    const response = await join(data);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const logInAPI = createAsyncThunk('user/login', async (data: LogInData, { rejectWithValue }) => {
  try {
    const response = await logIn(data);
    const { password, ...responseWithoutPassword } = response;
    return responseWithoutPassword;
  } catch (error) {
    return rejectWithValue(error);
  }
});
