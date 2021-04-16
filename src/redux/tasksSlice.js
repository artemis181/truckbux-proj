import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [];
/*
Task{
    id: nanoid(),
    title: string,
    details: string,
    imp: boolean,
    comp: boolean,
}
*/

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded(state, action){
            state.unshift(action.payload);
        },
        makeTaskImportant(state, action){
            state.find(task => task.id == action.payload.id).imp = action.payload.imp;
        },
        makeTaskComplete(state, action){
            state.find(task => task.id == action.payload.id).comp = action.payload.comp;
        },
        deleteTask(state, action){
            state.splice(state.findIndex(task => task.id == action.payload.id), 1);
        }
    },
});

export const { taskAdded, makeTaskImportant, makeTaskComplete, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;