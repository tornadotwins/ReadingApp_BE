import { Box, styled } from '@mui/material';

const StyledDialogBox = styled(Box)({
  position: 'relative',
  paddingTop: '25px',

  '& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiTypography-root': {
    backgroundColor: '#FFF',
  },

  '& .MuiDialogActions-root .MuiButtonBase-root': {
    color: 'red',
  },

  '& .MuiDialogActions-root .MuiButtonBase-root:active': {
    backgroundColor: 'red',
  },

  '& .MuiDialog-root .MuiDialog-container .MuiPaper-root .MuiDialogActions-root .MuiButtonBase-root div:hover': {
    backgroundColor: 'red',
  },
});

const StyledCloseIcon = styled(Box)({
  position: 'absolute',
  right: '15px',
  top: '15px',
  cursor: 'pointer'
});

export { StyledDialogBox, StyledCloseIcon };
