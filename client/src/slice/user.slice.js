import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    verified: false,
    id: '',
    name: '',
    email: '',
};

//creating a redux slice for the user which stores the user's data in the redux store

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //action to add the user's data to the redux store
        addUser: (state, action) => {
            state.push(action.payload)
        },
        //action to remove the user's data from the redux store
        removeUser: (state, action) => {
            state.pop()
        }
    }
})

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;