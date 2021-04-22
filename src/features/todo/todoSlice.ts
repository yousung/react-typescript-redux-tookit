import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../app/store';

export interface TodoState {
  id: string;
  context: string;
  checked: boolean;
}

export interface TodoList {
  todos: TodoState[];
}

const initialState: TodoList = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: uuidv4(),
        context: action.payload,
        checked: false,
      });
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoIndex = state.todos.findIndex(
        (todo) => todo.id === action.payload,
      );
      if (todoIndex !== -1) {
        // eslint-disable-next-line no-param-reassign
        state.todos[todoIndex].checked = !state.todos[todoIndex].checked;
      }
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { toggleTodo, addTodo, removeTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
