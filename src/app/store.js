import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import foodReducer from "../features/foods/FoodSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    food: foodReducer,
  },
});
