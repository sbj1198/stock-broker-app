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
      //   console.log(res);
      dispatch({ type: types.GET_STOCK_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: types.GET_STOCK_FAILURE }));
};

export const editStock = (payload, id) => (dispatch) => {
  dispatch({ type: types.UPDATE_STOCK_REQUEST });
  return axios
    .patch(`https://stockbroker.onrender.com/companies/${id}`, payload)
    .then((res) => {
      dispatch({ type: types.UPDATE_STOCK_SUCCESS, payload: res.data });
      dispatch(getStock());
    })
    .catch((e) => dispatch({ type: types.UPDATE_STOCK_FAILURE }));
};

export const deleteStock = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_STOCK_REQUEST });
  return axios
    .delete(`https://stockbroker.onrender.com/companies/${id}`)
    .then((res) => {
      dispatch({ type: types.DELETE_STOCK_SUCCESS });

      /*
      After deleting, the UI wasn't getting updated so to update the UI below line has been added 
      Don't know whether it's the correct way to do so!
      */
      dispatch(getStock());
    })
    .catch((e) => dispatch({ type: types.DELETE_STOCK_FAILURE }));
};

export const buyStock = (payload, id) => (dispatch) => {
  // console.log(payload);
  dispatch({ type: types.BUY_STOCK_REQUEST });
  return axios
    .patch(`https://stockbroker.onrender.com/users/${id}`, {
      quantity: [payload],
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: types.BUY_STOCK_SUCCESS, payload: res.data });
    })
    .catch((e) => dispatch({ type: types.BUY_STOCK_FAILURE }));
};
