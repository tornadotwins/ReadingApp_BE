import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTitleContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
});

const StyledTitleText = styled('h2')({
  color: '#FFF',
  fontFamily: 'Buenard',
  fontWeight: '700',
  fontSize: '36px',
  lineHeight: '47px',
  margin: '0px',
});

const StyledTitleIcon = styled('img')({
  width: '16px',
  height: '16px',
  marginRight: '16px',
});

export { StyledTitleContainer, StyledTitleText, StyledTitleIcon };
