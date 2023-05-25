import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetching from data/posts.json
const URL = 'http://localhost:3500/posts';

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

// Async Thunks
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(URL);
  return response.data;
});

export const addPost = createAsyncThunk('posts/addPost', async (postData) => {
  const response = await axios.post(URL, postData);
  return response.data;
});

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (postData) => {
    const { id } = postData;
    try {
      const response = await axios.put(`${URL}/${id}`, postData);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postData) => {
    const { id } = postData;
    try {
      const response = await axios.delete(`${URL}/${id}`);
      if (response?.status === 200) return postData;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err) {
      return err.message;
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
