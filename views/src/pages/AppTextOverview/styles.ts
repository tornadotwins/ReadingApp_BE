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

export {
  StyledContainer,
}