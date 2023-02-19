import * as types from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  isSignedUp: false,
  role: "",
  id: undefined,
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignedUp: true,
        role: payload,
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        isError: true,
        isSignedUp: false,
        isLoading: false,
      };
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        id: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isSignedUp: false,
        isLoading: false,
        isAuth: false,
      };
    case types.ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        role: payload,
      };
    case types.ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        isAuth: false,
      };
    default:
      return state;
  }
};
