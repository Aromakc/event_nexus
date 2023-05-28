import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slices/posts.slice';
import authReducer from './slices/auth.slice';
import usersReducer from './slices/users.slice';
import organizersReducer from './slices/organizers.slice';
const store = configureStore({
  reducer: {
    users: usersReducer,
    events: postsReducer,
    auth: authReducer,
    organizers: organizersReducer,
  },
});

export default store;
