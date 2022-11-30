import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  getDateFilter,
  setDateFilter,
} from "../../../../store/filterSearch/filterSearch";

export default function BasicSelect() {
  const dispatch = useDispatch();
  const { lenght, price, date } = useSelector((state) => state.filterSearch);
  const [departure, setDate] = React.useState("");
  const departureDate = [
    "November 2022",
    "December 2022",
    "January 2023",
    "February 2023",
    "March 2023",
    "April 2023",
    "May 2023",
    "June 2023",
  ];
  // useEffect(() => {
  //   dispatch(getDateFilter())
  // }, [dispatch]);

  const handleChange = (event) => {
    // setDate((departure) => {departure = event.target.value;
    // return departure});
    dispatch(setDateFilter(event.target.value));
  };

  // console.log(date)
  return (
    <Box sx={{ minWidth: 120, marginTop: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={month}
          label="Date"
          onChange={handleChange}
        >
          {departureDate.map((month) => (
            <MenuItem value={month}>{month}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
