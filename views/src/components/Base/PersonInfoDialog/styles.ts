import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  styled
} from '@mui/material';
import { boxSizing, minWidth } from '@mui/system';

const StyledPersonInfoContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',

  '& >.MuiBox-root: first-of-type': {
    backgroundColor: '#2D87A4',
  }
});

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

const StyledDialogContent = styled(DialogContent) ({
  backgroundColor: '#155D74',
  padding: '12px',
  width: '240px',

  '& >.MuiBox-root: nth-of-type(3)': {
    '& >.MuiBox-root: nth-of-type(2)': {
      '& >.MuiBox-root': {
        marginLeft: '12px'
      }
    }
  }
});

const StyledPersonInfoFormContainer = styled(Box) ({
  backgroundColor: '#155D74',
});

const StyledForm = styled(Box) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '& > :first-of-type': {
    minWidth: '80px',
    boxSizing: 'border-box',
  },

  '& > .MuiBox-root': {
    padding: '8px',
    paddingRight: '0px',
  },

  '& .MuiInputBase-input': {
    padding: '5px !important'
  }
});

const StyledCheckForm = styled(Box) ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  marginTop: '8px',
  paddingLeft: '8px',

  '& > :first-of-type': {
    minWidth: '80px',
    boxSizing: 'border-box',
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
  width: '63%',
  float: 'right',
  marginTop: '16px',

  '& > .MuiBox-root: last-child': {
    marginRight: '0px'
  }
});

const StyledButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  
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

export {
  StyledPersonInfoContainer,
  StyledDialog,
  StyledDialogTitle,
  StyledDialogContent,
  StyledPersonInfoFormContainer,
  StyledForm,
  StyledCheckForm,
  StyledButtonGroup,
  StyledButtonContainer,
}