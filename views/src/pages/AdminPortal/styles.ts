import {Box, styled} from '@mui/material';

const FlexBox = styled(Box)({
  display: 'flex',
});

const StyledAdminPortalContainer = styled(FlexBox) ({
  width: '100vw',
  height: '100vh',
  alignItems: 'center',

  '& >.MuiBox-root: first-of-type': {
    backgroundColor: '#1B7695',
  }
});

const StyledAdminPortalBodyContainer = styled(Box) ({
  height: 'calc(100vh - 73px)',
  marginTop: '73px',
  padding: '0px 48px',
});

const StyledTablePanelHeader = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledSaveButton = styled(Box)<{disable: string}>(({disable}) => ({
  width: '134px',
  cursor: disable == 'true' ? 'not-allowed': 'pointer',
  height: '40px',
  marginTop: '46px',
  backgroundColor: disable == 'true' ? '#CAC9C9' :'#FFAA5D',
  border: '1px solid #474747',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionDuration: '.5s',
  color: disable == 'true' ? '#474747' : '#FFF !important',

  '& button': {
    // color: '#474747',
    color: disable == 'true' ? '#474747' : 'white !important',
    transitionDuration: '.5s',
    fontSize: '14px',
    cursor: disable == 'true' ? 'not-allowed': 'pointer',

    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
    }
  },

  '&:hover': {
    backgroundColor: disable == 'true' ? '' : '#EE994C',
    
    '& button': {
      color: disable == 'true' ? '' : 'white'
    }
  }
}));

const StyledTablePanelContainer = styled(Box) ({
  // width: '100%',
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'left',
});

const StyledAdminText = styled(Box) ({
  width: '100%',
  margin: '35px 0px 16px 0px'
})

const StyledButtonGroup = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
});

const StyledButton = styled(Box) ({
  width: '134px',
  boxSizing: 'border-box',
  backgroundColor: '#FFAA5D',
  padding: '5px',
  marginRight: '15px',
  border: '1px solid #474747',
  textAlign: 'center',
  cursor: 'pointer',
  transitionDuration: '.5s',

  '& button': {
    color: '#474747',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '24px',
    textTransform: 'none',
    transitionDuration: '.5s',

    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
    }
  },
  
  '&:hover': {
    backgroundColor: '#EE994C',
    
    '& button': {
      color: 'white'
    }
  }
});

const StyledDelButton = styled(Box) ({
  backgroundColor: '#FF0505',
  padding: '5px',
  border: '1px solid #474747',
  transitionDuration: '.5s',
  textAlign: 'center',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#EE0404',
    color: '#474747'
  },

  '& button': {
    color: 'white !important',
    fontSize: '14px',
    fontFamily: '"Baloo Da 2" !important',
    textTransform: 'none',
    fontWeight: '500 !important',
    lineHeight: '24px !important',

    '&:hover': {
      backgroundColor: 'transparent',
      color: '#EEEEEE !important',
    }
  }
});

export {
  StyledAdminPortalContainer,
  StyledAdminPortalBodyContainer,
  StyledTablePanelHeader,
  StyledSaveButton,
  StyledTablePanelContainer,
  StyledAdminText,
  StyledButtonGroup,
  StyledButton,
  StyledDelButton,
}