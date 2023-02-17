import * as types from "./actionTypes";
import axios from "axios";

export const register = (payload) => (dispatch) => {
  dispatch({
    type: types.SIGNUP_REQUEST,
  });
  return axios
    .post("https://stockbroker.onrender.com/users", payload)
    .then((res) => {
      return dispatch({
        type: types.SIGNUP_SUCCESS,
        payload: "user",
      });
    })
    .catch((e) =>
      dispatch({
        type: types.SIGNUP_FAILURE,
      })
    );
};

export const login = (payload) => (dispatch) => {
  if (
    payload.email === "admin@stockbroker.com" &&
    payload.password === "admin123"
  ) {
    dispatch({
      type: types.ADMIN_LOGIN_REQUEST,
    });
  } else {
    dispatch({
      type: types.LOGIN_REQUEST,
    });
  }
  return axios
    .get("https://stockbroker.onrender.com/users")
    .then((res) => {
      // console.log(res);
      if (
        payload.email === "admin@stockbroker.com" &&
        payload.password === "admin123"
      ) {
        dispatch({
          type: types.ADMIN_LOGIN_SUCCESS,
          payload: "admin",
        });
      } else if (
        payload.email === "admin@stockbroker.com" &&
        payload.password !== "admin123"
      ) {
        dispatch({ type: types.ADMIN_LOGIN_FAILURE });
      } else {
        // console.log("inside else");
        let loginStatus = res?.data?.find(
          (e) => e.email === payload.email && e.password === payload.password
        );
        if (loginStatus) {
          dispatch({
            type: types.LOGIN_SUCCESS,
          });
        } else {
          dispatch({
            type: types.LOGIN_FAILURE,
          });
        }
      }
    })
    .catch((e) => {
      dispatch({
        type: types.LOGIN_FAILURE,
      });
    });
};
