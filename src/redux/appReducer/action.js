import * as types from "./actionTypes";
import axios from "axios";

export const addStock = (payload) => (dispatch) => {
  dispatch({ type: types.ADD_STOCK_REQUEST });
  return axios
    .post("https://stockbroker.onrender.com/companies", payload)
    .then((res) => {
      dispatch({
        type: types.ADD_STOCK_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => dispatch({ type: types.ADD_STOCK_FAILURE }));
};

export const getStock = () => (dispatch) => {
  dispatch({ type: types.GET_STOCK_REQUEST });
  return axios
    .get("https://stockbroker.onrender.com/companies")
    .then((res) => {
      console.log(res);
      dispatch({ type: types.GET_STOCK_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: types.GET_STOCK_FAILURE }));
};
