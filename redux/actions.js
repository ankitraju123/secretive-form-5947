import axios from "axios";
import {
  CART_DELETE_DATA,
  CART_GET_DATA,
  CART_POST_DATA,
  ERROR,
  GET_DATA,
  LOADING,
} from "./actionTypes";

export const Getproddata = () => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = await axios.get("https://nykaa-mock-api-6or1.onrender.com/product");
    let data = res.data;
    dispatch({
      type: GET_DATA,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const addToCart = (data) => async (dispatch) => {
  //   console.log(typeof data);
  try {
    await axios.post("https://nykaa-mock-api-6or1.onrender.com/cart", data);
    dispatch({ type: CART_POST_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export const getCartData = () => async (dispatch) => {
  let res = await axios.get("https://nykaa-mock-api-6or1.onrender.com/cart");

  dispatch({ type: CART_GET_DATA, payload: res.data });
};

export const deleteCartData = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let res = axios.delete(`https://nykaa-mock-api-6or1.onrender.com/cart/${data.id}`);
    dispatch({ type: CART_DELETE_DATA, payload: data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};
