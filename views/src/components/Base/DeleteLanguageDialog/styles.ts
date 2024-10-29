import {Box, Dialog, DialogTitle, styled} from '@mui/material';

const StyledDialog = styled(Dialog) ({
  borderRadius: '0px',

  '& .MuiDialog-paper': {
    borderRadius: '0px'
  }
});

const StyledDialogTitle = styled (DialogTitle) ({
  backgroundColor: '#2D87A4',
  fontFamily: '"Baloo Da 2" !important',
  fontSize: '16px !important',
  lineHeight: '24px !important',
  padding: '5px 14px',
});

const StyledDialogContent = styled(Box) ({
  width: '284px',
  height: '245px',
  padding: '17px',
  backgroundColor: '#155D74',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',

  '& .MuiInputBase-root': {
    backgroundColor: 'white',
    border: '1px solid black',
    
    '& .MuiSelect-select': {
      color: 'black'
    }
  },

  '& .MuiMenuItem-root': {
    backgroundColor: 'white'
  }
});

const StyledContentMessageContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLanguageSelectContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .MuiFormControl-root': {
    width: '178px',
    alignItems: 'self-end',

    '& .MuiInputBase-root': {
      width: '100%'
    }
  }
});

const StyledLabel = styled(Box) ({
  
})

const StyledContentIcon = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledContentMessage = styled(Box)({
  width: '100%',
});

const StyledButtonGroup = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  float: 'right',

  '& > .MuiBox-root: last-child': {
    marginRight: '0px'
  }
});

const StyledButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  width: '72px',
  boxSizing: 'border-box',
  
  '& :hover': {
    backgroundColor: '#F6CFAC'
  },

  '& button': {
    backgroundColor: '#FFAA5D',
    borderRadius: '0',


    '& .MuiBox-root': {
      textTransform: 'none',
      fontFamily: '"Baloo Da 2" !important',
      fontSize: '16px !important'
    }
  }
});

const StyledDeleteButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  width: '134px',
  
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
      color: '#FFFFFF !important',
    }
  }
});

export {
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledContentMessageContainer,
  StyledContentIcon,
  StyledLabel,
  StyledContentMessage,
  StyledLanguageSelectContainer,
  StyledButtonGroup,
  StyledButtonContainer,
  StyledDeleteButtonContainer,
}