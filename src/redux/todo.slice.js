import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'todo',
  initialState: { items: [] },
  reducers: {
    addToDo(state, action) {
      const lastItem = state.items[state.items.length - 1];
      state.items.push({
        id: lastItem ? lastItem.id + 1 : 1,
        text: action.payload,
        completed: false,
      });
    },
    checkToDo(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: action.payload.completed }
          : item
      );
    },
    deleteToDo(state, action) {
      const todoId = action.payload;
      state.items = state.items.filter((item) => item.id !== todoId);
    },
    setTodos(state, action) {
      state.items = action.payload;
    },
  },
});

export const { addToDo, checkToDo, deleteToDo, setTodos } = toDoSlice.actions;
export default toDoSlice.reducer;
