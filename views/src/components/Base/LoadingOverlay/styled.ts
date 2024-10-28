import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Box)(() => ({
  position: 'fixed',
  width: '100vw',
  height: '100dvh',
  left: 0,
  top: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export { StyledContainer };
