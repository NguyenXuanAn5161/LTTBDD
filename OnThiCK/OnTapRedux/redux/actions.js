// redux/actions.js
import { addTodo, removeTodo, editTodo, setTodos } from "./todoSlice";
import axios from "axios";

const apiUrl = "https://6544bafe5a0b4b04436cd987.mockapi.io/todoapp";

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch(setTodos(response.data));
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

export const addTodoAsync = (todo) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, todo);
    dispatch(addTodo(response.data));
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export const removeTodoAsync = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch(removeTodo(id));

    ``;
  } catch (error) {
    console.error("Error removing todo:", error);
  }
};

export const editTodoAsync = (id, updatedTodo) => async (dispatch) => {
  try {
    await axios.put(`${apiUrl}/${id}`, updatedTodo);
    dispatch(editTodo({ id, updatedTodo }));
  } catch (error) {
    console.error("Error editing todo:", error);
  }
};
