// CustomSelect.tsx
import React, { useState } from 'react';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface CustomSelectProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, selectedValue, onChange }) => {
  return (
    <FormControl variant="outlined" className='text-white'>
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={selectedValue} onChange={(e) => onChange(e.target.value as string)}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
