// redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [], // Ban đầu state là một mảng rỗng
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedTodo };
      }
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, removeTodo, editTodo, setTodos } = todoSlice.actions;
export default todoSlice.reducer;
