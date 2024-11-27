import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  styled
} from '@mui/material';

const StyledDialog = styled(Dialog) ({
  borderRadius: '0px',

  '& .MuiDialog-paper': {
    borderRadius: '0px'
  },

  '& .MuiDialogContent-root > .MuiBox-root:first-of-type': {
    width: '100%'
  },

  '& .MuiDialogContent-root > .MuiBox-root:nth-of-type(2)': {
    alignSelf: 'end',
    marginTop: '10px',

    '& svg': {
      marginRight: '10px'
    }
  }
});

const StyledDialogTitle = styled (DialogTitle) ({
  backgroundColor: '#2D87A4',
  fontFamily: '"Baloo Da 2" !important',
  fontSize: '16px !important',
  lineHeight: '24px !important',
  padding: '5px 14px',
});

const StyledDialogContent = styled(DialogContent) ({
  backgroundColor: '#155D74',
  padding: '17px',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const StyledImageContainer = styled(Box)({
  width: '100%',
});

const StyledImage = styled('img') ({
  width: '100%',
})

const StyledButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  cursor: 'pointer',
  
  '& :hover': {
    backgroundColor: '#F6CFAC'
  },

  '& button': {
    width: '20%',
    backgroundColor: '#FFAA5D',
    borderRadius: '0',

    '& .MuiBox-root': {
      textTransform: 'none',
      fontFamily: '"Baloo Da 2" !important',
      fontSize: '16px !important',
      color: '#474747 !important',
    }
  }
});

export {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledImageContainer,
  StyledImage,
  StyledButtonContainer
}