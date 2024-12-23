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
  alignItems: 'start',
  marginTop: '10px',
});

const StyledLabel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '15px',
  minWidth: '100px',

  '& .MuiBox-root': {
    clear: 'both',
    display: 'inline-block',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },

  '& > .MuiBox-root: first-of-type': {
    marginRight: '5px'
  }
});

const StyledInputContainer = styled(Box)<{hastextarea?: string, isdisabled?: string}>(({hastextarea, isdisabled}) => ({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  border: hastextarea == 'true' ? 'none' : '1px solid #155D74',
  borderRadius: '4px',
  backgroundColor: hastextarea == 'true' ? 'transparent' : '#FFF',
  fontFamily: 'Inter',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '500',
  color: '#000',
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
    width: '100% !important',
    borderRadius: '4px',

    '& .MuiInputBase-input': {
      fontFamily: 'Inter',

      '&[type="text"]': {
        all: isdisabled == 'true' && 'unset',
        paddingLeft: '10px',
        paddingRight: '10px',
      }
    },

    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.6)" // (default alpha is 0.38)
    }
  },

  '& input[type="file"]': {
    cursor: 'pointer',
  }
}));

const StyledSubTitleContainer = styled(Box)({
  margin: '20px 0px 10px 0px'
});

const StyledImagePreview = styled(Box)({
  marginTop: '16px',
  '& img': {
    maxWidth: '100%', // Ensure the image scales appropriately
    maxHeight: '200px', // Limit the height of the preview
    objectFit: 'contain', // Maintain aspect ratio
    border: '1px solid #ccc',
    borderRadius: '4px',
  }
});

const StyledCollapsibleButtonGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
});

const StyledCollapsibleAddButtonContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StyledCollapsibleButtonContainer = styled(Box) <{isdisabled?: string}> (({isdisabled}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  border: '1px solid #155D74',
  borderRadius: '4px',
  marginRight: '5px',
  backgroundColor: isdisabled == 'true' ? '#A1A1A1' : '#FFAA5D',
  cursor: isdisabled == 'true' ? 'not-allowed !important' : 'pointer',

  '& .MuiBox-root': {
    textTransform: 'capitalize'
  },

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: isdisabled == 'true' ? '#A1A1A1' : '#EE994C',

    '& .MuiBox-root': {
      color: isdisabled == 'true' ? '#474747' : '#FFF !important',
      backgroundColor: isdisabled == 'true' ? '#A1A1A1' : '#EE994C',
    }
  },
}));

const StyledCollapsibleBlockGroup = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  marginTop: '10px',
});

const StyledPreviewCollapsibleBlockContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box'
})

export {
  StyledContainer,
  StyledBlockHeaderContainer,
  StyledBlockControlContainer,
  StyledBlockControlButtonContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledSubTitleContainer,
  StyledImagePreview,
  StyledCollapsibleButtonGroup,
  StyledCollapsibleAddButtonContainer,
  StyledCollapsibleButtonContainer,
  StyledCollapsibleBlockGroup,
  StyledPreviewCollapsibleBlockContainer,
}
