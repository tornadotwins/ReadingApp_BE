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
  width: '276px',
  height: '177px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const StyledConfirmMessageContainer = styled(Box) ({
  width: '100%',
});

const StyledPersonInfoFormContainer = styled(Box) ({
  backgroundColor: '#155D74',
});

const StyledForm = styled(Box) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > .MuiBox-root': {
    padding: '8px',
    paddingRight: '0px',
  },

  '& .MuiInputBase-input': {
    padding: '5px !important'
  }
});

const StyledFormValidateMessage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
})

const StyledCheckForm = styled(Box) ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  marginTop: '8px',
  paddingLeft: '8px',

  '& .MuiFormControlLabel-root': {
    marginLeft: '20px',
  },

  '& input': {
    border: '1px solid blue'
  },

  '& .MuiCheckbox-root': {
    borderColor: 'white',
    backgroundColor: 'white',
    width: '32px',
    height: '32px',
    boxSizing: 'border-box',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '45px',
    color: 'white',

  }
});

const StyledButtonGroup = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '67%',
  float: 'right',
  marginTop: '16px',
  alignSelf: 'end',

  '& > .MuiBox-root: last-child': {
    marginRight: '0px'
  }
});

const StyledButtonContainer = styled(Box)<{isvalidate: string}>(({isvalidate}) => ({
  display: 'flex',
  alignItems: 'center',
  width: '72px',
  cursor: isvalidate == 'false' ? 'not-allowed' : 'pointer',
  
  '& :hover': {
    backgroundColor: '#F6CFAC'
  },

  '& button': {
    width: '100%',
    backgroundColor: isvalidate == 'true' ? '#FFAA5D' : '#F6CFAC',
    borderRadius: '0',

    '& .MuiBox-root': {
      textTransform: 'none',
      fontFamily: '"Baloo Da 2" !important',
      fontSize: '16px !important',
      color: isvalidate == 'false' ? '#989494 !important' : '#474747 !important',
    }
  }
}));

const StyledDeleteButtonContainer = styled(Box)<{isdisable: string}>(({isdisable}) => ({
  display: 'flex',
  alignItems: 'center',
  width: '134px',
  cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',
  
  '& :hover': {
    backgroundColor: '#EE0404'
  },

  '& button': {
    width: '100%',
    backgroundColor: '#FF0505',
    borderRadius: '0',

    '& .MuiBox-root': {
      textTransform: 'none',
      fontFamily: '"Baloo Da 2" !important',
      fontSize: '16px !important',
      color: isdisable == 'true' ? '#B6B0B0 !important' : '#FFFFFF !important',
    }
  }
}));

export {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledConfirmMessageContainer,
  StyledPersonInfoFormContainer,
  StyledForm,
  StyledFormValidateMessage,
  StyledCheckForm,
  StyledButtonGroup,
  StyledButtonContainer,
  StyledDeleteButtonContainer,
}