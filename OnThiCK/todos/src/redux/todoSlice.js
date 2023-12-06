import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    edit: (state, action) => {
      const { id, update } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...update };
      }
    },
    getAll: (state, action) => {
      return action.payload;
    },
  },
});

export const { add, remove, edit, getAll } = todoSlice.actions;

export default todoSlice.reducer;
