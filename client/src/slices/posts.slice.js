import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apolloClient';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Async Thunks
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const GET_POSTS = gql`
    query {
      // Add the query to retrieve posts
    }
  `;

  const response = await client.query({ query: GET_POSTS });
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
  const ADD_POST = gql`
    mutation AddPost($postData: PostInput!) {
      addPost(input: $postData) {
        // Define the fields you want to retrieve from the mutation response
      }
    }
  `;

  const response = await client.mutate({
    mutation: ADD_POST,
    variables: { postData },
  });
  return response.data.addPost;
});

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (postData) => {
    const { id } = postData;

    const UPDATE_POST = gql`
      mutation UpdatePost($id: ID!, $postData: PostInput!) {
        updatePost(id: $id, input: $postData) {
          // Define the fields you want to retrieve from the mutation response
        }
      }
    `;

    try {
      const response = await client.mutate({
        mutation: UPDATE_POST,
        variables: { id, postData },
      });
      return response.data.updatePost;
    } catch (error) {
      return error.message;
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postData) => {
    const { id } = postData;

    const DELETE_POST = gql`
      mutation DeletePost($id: ID!) {
        deletePost(id: $id) {
          // Define the fields you want to retrieve from the mutation response
        }
      }
    `;

    try {
      const response = await client.mutate({
        mutation: DELETE_POST,
        variables: { id },
      });
      if (response?.data?.deletePost) return postData;
      return `Error deleting post with ID: ${id}`;
    } catch (error) {
      return error.message;
    }
  }
);

// Slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Posts
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add Post
      .addCase(addPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.push(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Update Post
      .addCase(updatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const {
          id,
          title,
          description,
          banner,
          beginAt,
          endAt,
          time,
          organizer,
          owner,
          online,
          venue,
        } = action.payload;
        const existingPost = state.posts.find((post) => post.id === id);
        if (existingPost) {
          existingPost.title = title;
          existingPost.description = description;
          existingPost.banner = banner;
          existingPost.beginAt = beginAt;
          existingPost.endAt = endAt;
          existingPost.time = time;
          existingPost.organizer = organizer;
          existingPost.owner = owner;
          existingPost.online = online;
          existingPost.venue = venue;
        }
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Delete Post
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { payload: postId } = action;
        state.posts = state.posts.filter((post) => post.id !== postId);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;

// Selectors
export const selectAllPosts = (state) => state.events.posts;
export const selectPostById = (state, postId) =>
  state.events.posts.find((post) => post.id === postId);
export const selectPostsByUser = (state, userId) =>
  state.events.posts.filter((post) => post.owner === userId);
export const selectPostsByOrganizer = (state, organizer) =>
  state.events.posts.filter((post) => post.organizer === organizer);
export const selectPostsByBeginAt = (state, beginAt) =>
  state.events.posts.filter((post) => post.beginAt === beginAt);

export const getPostsStatus = (state) => state.events.status;
export const getPostsError = (state) => state.events.error;
// Actions
