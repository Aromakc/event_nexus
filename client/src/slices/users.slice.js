import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apolloClient';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const GET_USERS = gql`
    query {
      // Add the query
    }
  `;

  const response = await client.query({ query: GET_USERS });
  return response.data;
});

export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  const ADD_USER = gql`
    mutation AddUser($userData: UserInput!) {
      addUser(input: $userData) {
        // Define the fields you want to retrieve from the mutation response
      }
    }
  `;

  const response = await client.mutate({
    mutation: ADD_USER,
    variables: { userData },
  });
  return response.data.addUser;
});

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (userData) => {
    const { id } = userData;

    const UPDATE_USER = gql`
      mutation UpdateUser($id: ID!, $userData: UserInput!) {
        updateUser(id: $id, input: $userData) {
          // Define the fields you want to retrieve from the mutation response
        }
      }
    `;

    try {
      const response = await client.mutate({
        mutation: UPDATE_USER,
        variables: { id, userData },
      });
      return response.data.updateUser;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (userData) => {
    const { id } = userData;

    const DELETE_USER = gql`
      mutation DeleteUser($id: ID!) {
        deleteUser(id: $id) {
          // Define the fields you want to retrieve from the mutation response
        }
      }
    `;

    try {
      const response = await client.mutate({
        mutation: DELETE_USER,
        variables: { id },
      });
      if (response?.data?.deleteUser) return userData;
      return `Error deleting user with ID: ${id}`;
    } catch (error) {
      return error.message;
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
