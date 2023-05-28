import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching organizers
export const fetchOrganizers = createAsyncThunk(
  'organizers/fetchOrganizers',
  async () => {
    try {
      const response = await axios.get('http://localhost:3500/organizers');
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch organizers');
    }
  }
);

// Organizers slice
const organizersSlice = createSlice({
  name: 'organizers',
  initialState: {
    organizers: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizers.fulfilled, (state, action) => {
        state.loading = false;
        state.organizers = action.payload;
      })
      .addCase(fetchOrganizers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export default organizersSlice.reducer;
export const selectOrganizers = (state) => state.organizers.organizers;
export const selectOrganizerById = (state, organizerId) =>
  state.organizers.organizers.find((organizer) => organizer.id === organizerId);
// export const selectOrganizerByName = (state, organizerName) => {
//   const organizer = state.organizers.organizers.find(
//     (organizer) => organizer.name === organizerName
//   );
//   return organizer;
// };
export const selectOrganizerByName = (state, organizerName) => {
  return state.organizers.organizers.find(
    (organizer) => organizer.name === organizerName
  );
};
