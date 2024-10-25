import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

// Style for Link (<a> tag in HTML)
const StyledLink = styled(Box, { shouldForwardProp: (prop) => prop !== 'color' })<{
  color?: string;
}>({
  display: 'inline-block',
  textDecoration: 'underline',
  textUnderlineOffset: '2.5px',
  
  cursor: 'pointer',
  userSelect: 'none',

  '&:hover': {
    opacity: 0.8,
  },
});

export default StyledLink;
