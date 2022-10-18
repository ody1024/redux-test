import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, getPost } from '../data/post';
import { IPost } from '../slice/post';

export const addPostAPI = createAsyncThunk('post/addPost', async (data: IPost, { rejectWithValue }) => {
  try {
    const response = await addPost(data);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getPostAPI = createAsyncThunk('post/getPost', async (id: number, { rejectWithValue }) => {
  try {
    const response = await getPost(id);
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});
