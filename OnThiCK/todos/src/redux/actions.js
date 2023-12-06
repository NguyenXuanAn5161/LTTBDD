import axios from "axios";
import { getAll } from "./todoSlice";

const url = "https://65702f6009586eff6640db95.mockapi.io/TodosList";

export const getAllItems = () => async (dispatch) => {
  try {
    console.log("get all");
    const res = await axios.get(url);
    dispatch(getAll(res.data));
  } catch (error) {
    console.log("error get all: ", error);
  }
};

export const addItem = (item) => async (dispatch) => {
  try {
    const res = await axios.post(url, item);
    dispatch(add(res.data));
  } catch (error) {
    console.log("error add: ", error);
  }
};

export const removeItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    dispatch(remove(id));
  } catch (error) {
    console.log("error remove: ", error);
  }
};

export const editItem = (id, update) => async (dispatch) => {
  try {
    await axios.put(`${url}/${id}`, update);
    dispatch(edit({ id, update }));
  } catch (error) {
    console.log("error edit: ", error);
  }
};
