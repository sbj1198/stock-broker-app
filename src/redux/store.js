import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as AuthReducer } from "./authReducer/reducer";
import { reducer as AppReducer } from "./appReducer/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({ AuthReducer, AppReducer });

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
