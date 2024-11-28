import { Box, styled } from "@mui/material";

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

const StyledBodyContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
  paddingBottom: '20px',
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledLanguageSelectorContainer = styled(Box) ({
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


export {
  StyledContainer,
  StyledBodyContainer,
  StyledBookSelectorContainer,
  StyledLanguageSelectorContainer,
}