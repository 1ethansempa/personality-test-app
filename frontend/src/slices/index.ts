import { combineReducers } from "@reduxjs/toolkit";
import questionReducer from "./question";

const rootReducer = combineReducers({
  question: questionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
