import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import userReducer from './userSlice';

export default configureStore({
    reducer: {
        tasks: tasksReducer,
        user: userReducer,
    }
})