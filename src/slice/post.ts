import { createSlice } from '@reduxjs/toolkit';
import { addPostAPI, getPostAPI } from '../action/post';

export interface IPost {
  id: number;
  content: string;
}

export interface PostState {
  post: IPost[];
  addPostLoading: boolean;
  addPostDone: boolean;
  addPostError: string | null;
  getPostLoading: boolean;
  getPostDone: boolean;
  getPostError: string | null;
}

const initialState: PostState = {
  post: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    cleanPost: (state) => {
      state.addPostLoading = false;
      state.addPostDone = false;
      state.addPostError = null;
      state.post = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(addPostAPI.pending, (state) => {
        state.addPostLoading = true;
        state.addPostDone = false;
        state.addPostError = null;
      })
      .addCase(addPostAPI.fulfilled, (state, action) => {
        state.addPostLoading = false;
        state.addPostDone = true;
      })
      .addCase(addPostAPI.rejected, (state, action) => {
        state.addPostLoading = false;
        state.addPostError = action.payload as string;
      })
      .addCase(getPostAPI.pending, (state) => {
        state.getPostLoading = true;
        state.getPostDone = false;
        state.getPostError = null;
      })
      .addCase(getPostAPI.fulfilled, (state, action) => {
        state.getPostLoading = false;
        state.getPostDone = true;
        state.post = action.payload;
      })
      .addCase(getPostAPI.rejected, (state, action) => {
        state.getPostLoading = false;
        state.getPostError = action.payload as string;
      });
  },
});

export const { cleanPost } = postSlice.actions;

export default postSlice.reducer;
