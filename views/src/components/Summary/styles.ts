import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box) ({
  border: '1px solid #1B7695',
  backgroundColor: '#F0F5FB',
  boxSizing: 'border-box',
  padding: '20px',
  margin: '20px 40px',

  '& .MuiAccordionDetails-root': {
    paddingLeft: '25px !important',
  },

  '& .MuiAccordionSummary-content > .MuiBox-root :nth-of-type(2)': {
    padding: '0px !important',
  }
});

const StyledSummaryItemContainer = styled(Box) ({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  width: '300px',

  '& >.MuiBox-root:first-of-type': {
    minWidth: '150px',
    justifyContent: 'left',
  },

  '& >.MuiBox-root > .MuiBox-root': {
    justifyContent: 'left'
  },

  '& >.MuiBox-root >:first-of-type' : {
    minWidth: '150px',
  },

  '& >.MuiBox-root >:nth-of-type(2)' : {
    marginLeft: '10px'
  }
});

export {
  StyledContainer,
  StyledSummaryItemContainer,
}