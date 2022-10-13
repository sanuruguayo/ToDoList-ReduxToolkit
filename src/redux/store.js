import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../redux/todo.slice';

export const store = configureStore({
  reducer: {
    todo: toDoReducer,
  },
});
