import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const date = [
    'November 2022',
    'December 2022',
    'January 2023',
    'February 2023',
    'March 2023',
    'April 2023',
    'May 2023',
    'June 2023',
  ];
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , marginTop: 2}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={month}
          label="Date"
          onChange={handleChange}
        >
        {
          date.map((month) => (
            <MenuItem value={month}>{month}</MenuItem>
          ))
        }
        </Select>
      </FormControl>
    </Box>
  );
}
