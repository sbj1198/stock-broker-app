import * as types from "./actionTypes";
const initialState = {
  isLoading: false,
  isError: false,
  stocks: [],
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
    default:
      return state;
  }
};
