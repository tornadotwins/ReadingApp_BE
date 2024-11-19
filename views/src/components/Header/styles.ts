import {
  Box,
  styled
} from '@mui/material';

const StyledHeaderContainer = styled(Box) ({
  width: '100%',
  height: '73px',
  margin: '0',
  padding: '0',

  position: 'fixed',
  zIndex: '100',
  top: '0',
  
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledHeaderTitle = styled(Box) ({
  alignContent: 'center',
  display: 'flex',

  '& .MuiBox-root': {
    cursor: 'pointer',
    transitionDuration: '.25s',

    '&:hover': {
      transform: 'scale(1.2)',
    }
  },

  '& :nth-of-type(2)': {
    marginLeft: '50px'
  }
});

const StyledNavbar = styled(Box) ({
  position: 'absolute',
  right: '25px',
  justifyContent: 'space-between',
  alignItems: 'center',

  display: 'flex',

  '& button': {
    textTransform: 'none',
    backgroundColor: 'transparent',

    '& :hover': {
      backgroundColor: 'transparent'
    },
    
    '& .MuiBox-root': {
      color: 'white !important',
      fontSize: '16px !important',
      fontWeight: '700 !important',
      lineHeight: '24px !important',

      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '5px',
        left: '10px',
        right: '10px',
        height: '2px',
        backgroundColor: 'white',
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease-in-out',
        transformOrigin: 'left'
      },

  '&:hover::after': {
    transform: 'scaleX(1)', // Full width on hover
  },
    }
  }
});

const StyledUserName = styled(Box) ({
  marginRight: '15px'
})

export {
  StyledHeaderContainer,
  StyledHeaderTitle,
  StyledNavbar,
  StyledUserName,
}