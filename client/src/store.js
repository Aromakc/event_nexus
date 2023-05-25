import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users.slice';
import postsReducer from './slices/posts.slice';
import authReducer from './slices/auth.slice';
export const store = configureStore({
  reducer: {
    users: usersReducer,
    events: postsReducer,
    auth: authReducer,
  },
});
