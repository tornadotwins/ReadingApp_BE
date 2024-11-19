import {Box, styled} from '@mui/material';

const StyledContainer = styled(Box) ({
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  
  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

const StyledBookOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledLanguageContainer = styled(Box) ({
  width: '300px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 40px',
  paddingLeft: '200px',

  '& .MuiFormControl-root' : {
    width: 'unset',
    marginLeft: '15px',
  },

  '& .MuiBox-root': {
    fontFamily: '"Baloo Da 2" !important',
  }
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

export {
  StyledContainer,
  StyledBookOverviewContainer,
  StyledLanguageContainer,
  StyledBookSelectorContainer,
}