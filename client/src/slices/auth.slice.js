import { createSlice } from '@reduxjs/toolkit';

const USER_KEY = 'user';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem(USER_KEY)),
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));

      //calling the addUser action from the users slice
    },
    clearUser: (state) => {
      state.user = null;
      localStorage.removeItem(USER_KEY);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setUser, clearUser, setLoading } = authSlice.actions;
export const selectUser = (state) => state.auth.user;
export const selectLoading = (state) => state.auth.loading;
export default authSlice.reducer;
