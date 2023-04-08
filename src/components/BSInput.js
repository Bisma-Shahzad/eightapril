import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { usePickerValue } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue';

export default function BSInput(props) {
    const { label, variant, required, disabled, type, size, fullWidth, onChange, width } = props
    // const [inputdata, setinputdata] = useState("");
    // const pickerValue = usePickerValue(inputdata, (date) => setSelectedDate(date));
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: {width} },
      }}
      noValidate
      autoComplete="off"
      
    >
      <TextField label={label} variant={variant} required={required} disabled={disabled}
      type={type} size={size} fullWidth={fullWidth} onChange={onChange} />
    </Box>
  );
}

// for pass component

// <BSInput fullWidth="true" />