import {Box, styled} from '@mui/material';

const StyledLoginBoxContainer = styled(Box) ({
  width: '276px',
  height: '250px',
});

const StyledLoginHeaderContainer = styled(Box) ({
  width: '100%',
  height: '13.2%',
  backgroundColor: '#2D87A4',

  display: 'flex',
  alignItems: 'center',

  '& .MuiBox-root': {
    color: 'white',
    marginLeft: '12px'
  }
});

const StyledLoginForm = styled(Box) ({
  width: '100%',
  height: '86.8%',
  backgroundColor: '#155D74',
  position: 'relative',
});

const StyledLoginInput = styled(Box) ({
  width: '100%',
});

const StyledLoginButtonContainer = styled(Box) ({
  position: 'absolute',
  bottom: '12px',
  right: '12px',

  '& :hover': {
    backgroundColor: '#F6CFAC !important',

    '& button': {
      backgroundColor: '#F6CFAC !important',
    },
    
    '& .MuiBox-root': {
      color: 'black !important'
    }
  },

  '& button': {
    backgroundColor: '#FFAA5D',
    borderRadius: '0px',

    '& .MuiBox-root': {
      textTransform: 'none',

      '& :hover': {
        backgroundColor: 'tarnsparent !important'
      }
    }
  }
});

export {
  StyledLoginBoxContainer,
  StyledLoginHeaderContainer,
  StyledLoginForm,
  StyledLoginInput,
  StyledLoginButtonContainer,
}