import { createSlice } from "@reduxjs/toolkit";
const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState: {
    lenght: [2, 10],
    price: [150, 250],
    date: "",
    name: " ", 
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
    setName: (state, action) => ({
      ...state,
      name: action.payload,
    }),
    getLenght() {},
    getPrice() {},
    getDateFilter() {},
  },
});
export const { setLenght, setPrice, setDateFilter, setName , getLenght, getPrice, getDateFilter} = filterSearchSlice.actions;
export default filterSearchSlice.reducer;
