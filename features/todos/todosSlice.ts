import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../store/store';

const initialState: TodosState = {
    todos: [
        {text: "Cook a cake", done: false},
        {text: "Make hugs", done: false},
        {text: "Build a house", done: true},
        {text: "Read a book", done: false},
    ],
    other: "",
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }, 
        removeTodo: (state, action) => {

        },
        toggleTodo: (state, action) => {

        }
    }
});


export const {addTodo, removeTodo, toggleTodo} = todosSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectOthers = (state: RootState) => state.todos.other;

export default todosSlice.reducer;