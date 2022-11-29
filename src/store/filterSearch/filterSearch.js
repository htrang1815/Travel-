import { createSlice } from "@reduxjs/toolkit";
const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState: {
    lenght: [2, 10],
    price: [150, 250],
    date: "",
  },
  reducers: {
    setLenght: (state, action) => ({
      ...state,
      lenght: action.payload,
    }),
    setPrice: (state, action) => ({
      ...state,
      price: action.payload,
    }),
    setDateFilter: (state, action) => ({
      ...state,
      date: action.payload,
    }),
    getLenght() {},
    getPrice() {},
    getDateFilter() {},
  },
});
export const { setLenght, setPrice, setDateFilter , getLenght, getPrice, getDateFilter} = filterSearchSlice.actions;
export default filterSearchSlice.reducer;
