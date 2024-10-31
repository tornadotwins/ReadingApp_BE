import {Box, styled} from '@mui/material';

const StyledFilePickerContainer = styled(Box) ({
  width: '100%',
  display: 'flex',

  '& .MuiFormControl-root': {
    width: '20%',
    marginRight: '20px',
    padding: '0px',
    display: 'flex',
    justifyContent: 'center'
  },

  '& .MuiInputBase-input': {
    padding: '10px',
  }
});

export {
  StyledFilePickerContainer,
}