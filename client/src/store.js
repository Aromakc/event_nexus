import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';
import postsReducer from './slices/posts.slice';
import authReducer from './slices/auth.slice';
export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postsReducer,
    auth: authReducer,
  },
});