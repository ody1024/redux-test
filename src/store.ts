import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/user';
import postReducer from './slice/post';

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
