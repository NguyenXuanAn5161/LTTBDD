import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const Store = configureStore({
  reducer: {
    todoApp: todoReducer,
    // other reducers
  },
});

export default Store;
