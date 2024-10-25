import { Box, styled } from '@mui/material';

const StyledContainer = styled(Box)({
  padding: '7px 30px',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  position: 'relative',

  "@keyframes customerEnter": {
    from: {
      opacity: 0,
      transform: "translateY(100%)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  },

  "@keyframes customLeave": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    }
  },
});

const StyledIcon = styled('img')({
  width: '42px',
  height: '42px',
  marginRight: '10px',
});

export { StyledContainer, StyledIcon };
