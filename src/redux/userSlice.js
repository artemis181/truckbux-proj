import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userAdded(state, action){
            state.push(action.payload)
        }
    },
});

export const { userAdded } = userSlice.actions;
export default userSlice.reducer;