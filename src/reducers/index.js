import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@redux-devtools/extension";
import reposReducer from "./reposReducer";
import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  repos: reposReducer,
})

export const store = configureStore(
  {reducer:rootReducer},
  composeWithDevTools(applyMiddleware(thunk))
);
