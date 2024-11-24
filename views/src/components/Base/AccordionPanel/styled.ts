import { Box, styled } from "@mui/material";
const StyledAccordionPanel = styled(Box)<{ iconcolor: string, isoutarrow: string, outerarrowcolor: string }>(({ iconcolor, isoutarrow, outerarrowcolor }) => ({
  display: 'flex',
  margin: '0px !important',
  padding: '0px !important',

  '& .MuiPaper-root': {
    border: '0px !important',
    width: '100%'
  },

  '& .MuiButtonBase-root': {
    flexDirection: 'row-reverse',
  },

  '& .MuiAccordionSummary-gutters': {
    minHeight: 'unset !important',
    padding: '0px !important',
  },

  '& .MuiAccordion-root': {
    boxShadow: 'unset'
  },

  '& .MuiAccordionSummary-content': {
    margin: '0px !important',
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

const StyledLabelContainer= styled(Box) ({
  display:"flex",
  alignItems:"center",
  width:"100%",
  justifyContent: 'left',

  '& .MuiBox-root:first-of-type': {
    minWidth: '200px',
    marginRight: '20px'
  },

  '& .MuiBox-root:nth-of-type(2)': {
    justifyContent: 'left',
  },

  '& .MuiFormControl-root': {
    border: '1px solid #155D74',
  }
})

export { StyledAccordionPanel, StyledLabelContainer, }