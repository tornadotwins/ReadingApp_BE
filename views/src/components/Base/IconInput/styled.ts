import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

const InputContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
});

const InputLabelContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const InputIcon = styled('img')({
  width: '20px',
  marginRight: '10.78px',
});

const StyledInput = styled(TextField)<{ style: any, bordercolor: string }>(({ style, bordercolor }) => ({
  border: `1px solid ${bordercolor}`,
  width: '133px',
  height: '100%',
  boxSizing: 'border-box',

  '& .MuiInputBase-root': {
    height: '100%',
    boxSizing: 'border-box',
    padding: 0,
    color: style?.color,
  },

  '&.Mui-checked': {
    color: '#FFF',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none', // Remove the border of the TextField
    },
  },

  '& .MuiInputBase-input': {
    borderRadius: '0px !important'
  }
}));

const ErrorText = styled(Box)({
  color: 'red',
  margin: '0',
  width: '100%',
  textAlign: 'right',
  fontSize: '12px',
  fontStyle: 'italic',
  marginTop: '2px',
});

export { InputContainer, InputLabelContainer, InputIcon, StyledInput, ErrorText };
