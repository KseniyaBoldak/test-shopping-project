import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { prouctReducer } from "./productReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  product: prouctReducer
});