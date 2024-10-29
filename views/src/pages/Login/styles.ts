import { Box, styled } from '@mui/material';

const Image = styled('img')({
  width: '10%',
  height: '10%',
  margin: 4,
});

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledLoginContainer = styled(CenteredFlexBox)({
  width: '100%',
  height: '100vh',

  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

const StyledLoginBody = styled(Box) ({
  height: 'calc(100vh - 73px)',
  marginTop: '73px',
  display: 'flex',
  alignItems: 'center',
});

export {
  Image,
  StyledLoginContainer,
  StyledLoginBody,
};
