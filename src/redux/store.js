import { configureStore } from "@reduxjs/toolkit";
import  counterReducer from "./slices/filter.slice";

export const store = configureStore({
  reducer: {counter: counterReducer},
});

console.log(store)