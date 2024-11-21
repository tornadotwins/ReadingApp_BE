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

const StyledSelectContainer = styled(Box) ({
  width: '650px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 40px 0px 40px',

  '& .MuiFormControl-root' : {
    width: 'unset',
    marginLeft: '15px',
  },

  '& .MuiBox-root': {
    fontFamily: '"Baloo Da 2" !important',
  },

  '@media screen and (max-width: 670px)': {
    width: 'unset'
  },
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledUploadButtonContainer = styled(Box) ({
  margin: '5px 40px',
  padding: '15px',
  maxWidth: '650px',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  

  '& .MuiButtonBase-root': {
    boxSizing: 'border-box',
    textTransform: 'none',
    backgroundColor: '#FFAA5D',
    padding: '8px 15px',
    borderRadius: '0px',
    border: '1px solid #474747',

    '&:hover': {
      backgroundColor: '#EECC5D'
    },
  }
})

export {
  StyledContainer,
  StyledBookOverviewContainer,
  StyledSelectContainer,
  StyledBookSelectorContainer,
  StyledUploadButtonContainer,
}