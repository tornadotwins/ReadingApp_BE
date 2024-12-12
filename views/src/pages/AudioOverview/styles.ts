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

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledAudioOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

export {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledAudioOverviewContainer,
}