import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./fetchData";

const initialState = {
  foodData: [],
  cart: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getData = createAsyncThunk("counter/fetchData", async () => {
  const response = await fetchData();
  console.log(response.data);
  // The value we return becomes the `fulfilled` action payload
  return response.data;
});

export const FoodSlice = createSlice({
  name: "food",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.foodData = action.payload;
      console.log("data");
      console.log(state.foodData);
    });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectFoodData = (state) => state.food.foodData;

export default FoodSlice.reducer;
