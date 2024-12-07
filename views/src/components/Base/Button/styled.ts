import { styled } from '@mui/material';
import MuiButton from '@mui/material/Button';

// Style for button
const StyledButton = styled(MuiButton) ({
  '&:hover': {
    backgroundColor: 'transparent'
  }
});

export { StyledButton };
