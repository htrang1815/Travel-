import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

function getStyles(date, departute, theme) {
  return {
    fontWeight:
    departute.indexOf(date) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [departute, setDepartute] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDepartute(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 549, mt: 1 }}>
        <Select
          multiple
          displayEmpty
          value={departute}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {date.map((date) => (
            <MenuItem
              key={date}
              value={date}
              style={getStyles(date, departute, theme)}
            >
              {date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
        