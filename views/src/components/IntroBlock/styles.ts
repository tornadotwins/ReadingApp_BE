import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)({
  backgroundColor: '#F0F5FB',
  border: '1px solid #1B7695',
  borderRadius: '4px',
  padding: '10px',
  boxSizing: 'border-box',
  fontFamily: 'Inter',
  width: '100%',
  marginBottom: '10px'
});

const StyledBlockHeaderContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px'
});

const StyledBlockControlContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
});

const StyledBlockControlButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: '5px',
  border: '1px solid #155D74',
  borderRadius: '4px',
  marginLeft: '5px',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#155D74',

    '& svg': {
      fill: 'white'
    },

    '& .MuiBox-root': {
      color: 'white'
    }
  },
});

const StyledContentRow = styled(Box)({
  display: 'flex',
  alignItems: 'start'
});

const StyledLabel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '15px',

  '& > .MuiBox-root: first-of-type': {
    marginRight: '5px'
  }
});

const StyledInputContainer = styled(Box)<{hastextarea?: string}>(({hastextarea}) => ({
  width: '100%',
  boxSizing: 'border-box',
  border: hastextarea == 'true' ? 'none' : '1px solid #155D74',
  borderRadius: '4px',
  backgroundColor: hastextarea == 'true' ? 'transparent' : '#FFF',
  fontFamily: 'Inter',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '500',
  color: '#155D74',
  outline: 'none',

  '& .MuiBox-root': {
    padding: '0',
    width: '100%',

    '& textarea': {
      width: '100%',
      fontFamily: 'Inter',
      fontSize: '16px',
      padding: '7px 10px',
      border: '1px solid #155D74',
      borderRadius: '4px'
    },
  },

  '& .MuiFormControl-root': {
    width: '100%',
    borderRadius: '4px',

    '& .MuiInputBase-input': {
      fontFamily: 'Inter',
    }
  }
}))

export {
  StyledContainer,
  StyledBlockHeaderContainer,
  StyledBlockControlContainer,
  StyledBlockControlButtonContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer
}