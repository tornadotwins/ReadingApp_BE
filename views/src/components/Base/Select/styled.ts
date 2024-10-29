import { styled } from '@mui/material/styles';
import MuiSelect from '@mui/material/Select';
import MuiMenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';

const StyledFormControl = styled(FormControl)({
  alignItems: 'center',
  width: '100%',
});

// Style for Select box
const StyledSelect = styled(MuiSelect)<{ style: any }>(({ style }) => ({
  display: 'flex',
  color: 'black',
  width: '150px',
  height: '40px',
  fontFamily: '"Baloo 2"',
  borderRadius: '0px',
  border: `1px solid ${style.borderColor}`,
  paddingRight: '0px',
  '&:hover': {
    backgroundColor: style.backgroundColor,
  },

  '& .MuiSvgIcon-root': {
    pointerEvents: 'none',
    position: 'absolute',
    right: '0px',
  },

  '& .MuiSelect-icon': {
    color: 'black',
    top: '50%',
    right: '8px',
    transform: 'translateY(-50%)', // Center the icon vertically
  },

  '& .MuiSelect-select': {
    padding: '8px 8px 8xp 16px',
  },
}));

const StyledExpandMore = styled(ExpandMore)<{ style: any }>(({ style }) => ({
  marginRight: '5px',
  color: style.color,
  
  '& .MuiSvgIcon-root': {
    cursor: 'pointer',
  }
}));

// Style for option in Selectbox
const StyledMenuItem = styled(MuiMenuItem)<{dividelinecolor: string}>(({ selected, dividelinecolor }) => ({
  padding: '8px 16px',
  borderRadius: '0px',
  color: selected ? '#000' : '#333', // Change text color when selected
  borderBottom: `1px solid ${dividelinecolor}`,
  backgroundColor: '#FEFEFE',
  '&:hover': {
    backgroundColor: '#E0E0E0',
  },
}));

// Custom styles for the Paper component
const MenuProps = {
  PaperProps: {
    sx: {
      bgcolor: '#C0C0C0',
      borderRadius: '4px',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
  },
  MenuListProps: {
    sx: {
      padding: 0, // Remove padding from the List component
    },
  },
};

export { StyledFormControl, StyledSelect, StyledExpandMore, StyledMenuItem, MenuProps };
