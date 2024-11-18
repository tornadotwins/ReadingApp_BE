import {Box, styled} from '@mui/material';

const StyledBookSelectorContainer = styled(Box) ({
  display: 'flex',
});

const StyledBookSelector = styled(Box)<{ isselected?: string }>(({ isselected }) => ({
  width: '135px',
  padding: "8px 25px",
  border: '1px solid #000',
  textAlign: 'center',
  cursor: 'pointer',
  boxSizing: 'border-box',
  backgroundColor: isselected == 'true' ? '#1B7695' : '#F0F5FB',
  color: isselected == 'true' ? '#fff' : '#000',
}));


export {
  StyledBookSelectorContainer,
  StyledBookSelector,
}