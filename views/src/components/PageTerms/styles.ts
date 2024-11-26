import {Box, styled} from '@mui/material';

const StyledContainer = styled(Box) ({
  border: '1px solid #1B7695',
  backgroundColor: '#F0F5FB',
  boxSizing: 'border-box',
  padding: '20px',
  margin: '20px 40px',

  '& .MuiAccordionSummary-content > .MuiBox-root': {
    justifyContent: 'space-between !important'
  },

  '& .MuiAccordionDetails-root': {
    paddingLeft: '25px !important',
    paddingBottom: '0px !important',
  },

  '& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)': {
    padding: '0px !important',
  }
});

export {
  StyledContainer,
}