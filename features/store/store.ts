import {configureStore } from '@reduxjs/toolkit';
import todosReducer from '../todos/todosSlice';
import backgroundImagesReducer from '../backgroundImages/backgroundImagesSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
        backgroundImages: backgroundImagesReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;