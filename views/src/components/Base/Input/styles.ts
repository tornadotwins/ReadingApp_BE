import {Box, styled} from '@mui/material';

const StyledInputContainer = styled(Box) ({
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',

  '& .MuiBox-root': {
    color: 'white',
  },

  '& .MuiTextField-root': {
    width: '153px',
    backgroundColor: 'white',

    '& input': {
      color: '#474747',
    },

    '& .MuiInputBase-formControl': {
      border: '0',
      borderRadius: '0px'
    },

    '& .MuiOutlinedInput-input': {
      padding: '7px 10px',
      borderRadius: '0px'
    }
  }
});

const ErrorText = styled(Box)({
  color: '#FF0505',
  paddingRight: '12px',
  boxSizing: 'border-box',
  width: '100%',
  textAlign: 'right',
  fontSize: '12px',
  fontStyle: 'italic',
  margin: '-5px 12px 5px 0px'
});

export {
  StyledInputContainer,
  ErrorText,
}