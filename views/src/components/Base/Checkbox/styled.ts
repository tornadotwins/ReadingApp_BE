import { styled } from '@mui/material/styles';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

// Style for checkbox
const StyledCheckbox = styled(MuiCheckbox)<{bordercolor: string}>(({bordercolor}) => ({
  // Default color for checkbox and checkmark
  color: bordercolor,

  // Style the checkmark size and ensure it's visible
  '& .MuiSvgIcon-root': {
    fontSize: '24px', // Size of the checkmark icon
    color: 'transparent', // Color of the checkmark
  },

  // Style the checkbox container
  '& .MuiCheckbox-root': {
    width: '24px', // Set width of the checkbox container
    height: '24px', // Set height of the checkbox container
    borderRadius: '0px',
    border: `1px solid ${bordercolor}`, // Border for checkbox container
  },

  // styles when checkbox is checked
  '&.Mui-checked': {
    color: bordercolor,
    '& .MuiSvgIcon-root': {
      color: bordercolor, // Ensure checkmark color is applied when checked
    },
  },

  '& .css-wfxt47-MuiButtonBase-root-MuiCheckbox-root .MuiSvgIcon-root': {
    color: 'transparent',
  },

  // Hover effect
  '&:hover': {
    backgroundColor: 'rgba(27, 118, 149, 0.1)',
  },
}));

// Style for checkmark
const StyledFormControlLabel = styled(FormControlLabel)<{bordercolor: string}>(({bordercolor}) => ({
  padding: '0',

  // Apply styles to the checkbox within the FormControlLabel
  '& .MuiCheckbox-root': {
    width: '24px', // Set width of the checkbox container
    height: '24px', // Set height of the checkbox container
    borderRadius: '0px',
    border: `1px solid ${bordercolor}`, // Border for checkbox container
  },

  // styles to the label
  '& .MuiFormControlLabel-label': {
    fontFamily: '"Baloo Da 2"',
    fontSize: '16px',
    marginLeft: '10px',
  },
}));

export { StyledCheckbox, StyledFormControlLabel };
