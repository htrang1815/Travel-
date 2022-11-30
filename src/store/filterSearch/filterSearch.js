import { createSlice } from "@reduxjs/toolkit";
const filterSearchSlice = createSlice({
  name: "filterSearch",
  initialState: {
    lenght: [2, 10],
    price: [150, 250],
    date: "",
    name: "", 
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
<<<<<<< HEAD
export const { setLenght, setPrice, setDateFilter, setName , getLenght, getPrice, getDateFilter} = filterSearchSlice.actions;
=======
export const {
  setLenght,
  setPrice,
  setDateFilter,
  getLenght,
  getPrice,
  getDateFilter,
} = filterSearchSlice.actions;
>>>>>>> 602d550fb26e1bd754209b6823437a649ff523b1
export default filterSearchSlice.reducer;
