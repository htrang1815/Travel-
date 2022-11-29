import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPrice } from '../../../../store/filterSearch/filterSearch';

function valuetext(value) {
  return `${value}`;
}

const minDistance = 50;

export default function FilterPrice() {
  const [value1, setValue1] = React.useState([150, 250]);
  const dispatch = useDispatch();
  const { lenght, price, date } = useSelector((state) => state.filterSearch); 
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      dispatch(setPrice(value1))
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      dispatch(setPrice(value1))
    }
  };
  // console.log(value1)

  return (
    <Box sx={{ width: 549 }} className='filter-lenght'>
    <div className='flex items-center justify-between '>
        <span className="text-[14px] text-[#111]">Min: {value1[0]}</span>
        <span className="text-[14px] text-[#111]">Max: {value1[1]}</span>
    </div>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        max={1000}
        min={100}
        disableSwap  
      />
    </Box>
  );
  
}