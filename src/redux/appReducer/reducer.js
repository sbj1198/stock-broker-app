import * as types from "./actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  stocks: [],
  quantity: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.ADD_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stocks: [...state.stocks, payload],
      };
    case types.ADD_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        stocks: [],
      };
    case types.GET_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stocks: payload,
      };
    case types.GET_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        stocks: [],
      };
    case types.DELETE_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.DELETE_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.DELETE_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        stocks: [...state.stocks, payload],
      };
    case types.UPDATE_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.BUY_STOCK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.BUY_STOCK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        quantity: [...state.quantity, payload],
      };
    case types.BUY_STOCK_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        quantity: [],
      };
    default:
      return state;
  }
};
