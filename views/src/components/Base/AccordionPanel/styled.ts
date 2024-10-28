import { Box, styled } from "@mui/material";
const StyledAccordionPanel = styled(Box)<{ iconcolor: string, isoutarrow: string, outerarrowcolor: string }>(({ iconcolor, isoutarrow, outerarrowcolor }) => ({
  display: 'flex',

  '& .MuiButtonBase-root': {
    flexDirection: 'row-reverse',
  },

  '& .MuiAccordionSummary-gutters': {
    minHeight: 'unset !important',
  },

  '& .MuiAccordion-root': {
    boxShadow: 'unset'
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    position: isoutarrow == 'true' ? 'absolute' : 'relative',
    left: isoutarrow == 'true' ? '-20px' : 'unset',

    '& .MuiSvgIcon-root': {
      color: outerarrowcolor || iconcolor,
    }
  },

  '& .MuiAccordion-rounded': {
    borderRadius: '0px'
  }
}));

export { StyledAccordionPanel }