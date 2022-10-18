import { createSlice } from '@reduxjs/toolkit';
import { joinAPI, logInAPI } from '../action/user';

interface IUser {
  id?: number;
  name?: string;
  email?: string;
}

export interface UserState {
  me: IUser | null;
  joinLoading: boolean;
  joinDone: boolean;
  joinError: string | null;
  logInLoading: boolean;
  logInDone: boolean;
  logInError: string | null;
}

const initialState: UserState = {
  me: null,
  joinLoading: false,
  joinDone: false,
  joinError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: (state) => {
      state.me = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(joinAPI.pending, (state) => {
        state.joinLoading = true;
        state.joinDone = false;
        state.joinError = null;
      })
      .addCase(joinAPI.fulfilled, (state) => {
        state.joinLoading = false;
        state.joinDone = true;
      })
      .addCase(joinAPI.rejected, (state, action) => {
        state.joinLoading = false;
        state.joinError = action.payload as string;
      })
      .addCase(logInAPI.pending, (state) => {
        state.logInLoading = true;
        state.logInDone = false;
        state.logInError = null;
      })
      .addCase(logInAPI.fulfilled, (state, action) => {
        state.logInLoading = false;
        state.logInDone = true;
        state.me = action.payload;
      })
      .addCase(logInAPI.rejected, (state, action) => {
        state.logInLoading = false;
        state.logInError = action.payload as string;
      });
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
