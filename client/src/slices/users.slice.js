import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:3500/users';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  const response = await axios.post(URL, userData);
  return response.data;
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (userData) => {
    const { id } = userData;
    try {
      const response = await axios.put(`${URL}/${id}`, userData);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userData) => {
    const { id } = userData;
    try {
      const response = await axios.delete(`${URL}/${id}`);
      if (response?.status === 200) return userData;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Users
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // adding phone field, club registered as empty
        action.payload.forEach((user) => {
          user.phone = '';
          user.club = '';
        });
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add User
      .addCase(addUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Update User
      .addCase(updateUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id } = action.payload;
        const existingUser = state.users.find((user) => user.id === id);
        if (existingUser) {
          existingUser.name = action.payload.name;
          existingUser.email = action.payload.email;
          existingUser.phone = action.payload.phone;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Delete User
      .addCase(deleteUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { id } = action.payload;
        const existingUser = state.users.find((user) => user.id === id);
        if (existingUser) {
          state.users = state.users.filter((user) => user.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const selectUserById = (state, userId) =>
  state.users.users.find((user) => user.id === userId);

export default usersSlice.reducer;
