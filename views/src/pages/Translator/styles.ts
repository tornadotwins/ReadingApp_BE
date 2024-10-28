import { Box, styled } from "@mui/material";

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledTranslatorContainer = styled(CenteredFlexBox)({
  width: '100%',
  height: '100vh',

  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

export {
  StyledTranslatorContainer,
}