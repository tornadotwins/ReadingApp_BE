import { Box, styled } from "@mui/system";

const StyledJourneyBlockContainer = styled(Box) ({
  backgroundColor: '#F1F5FB',
  color: '#155D74',
  boxSizing: 'border-box',
  padding: '10px',
  margin: '10px 0px',
  border: '1px solid #3C7493',
  borderRadius: '5px',
  width: '100%'
});

const StyledContentRow = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 0px'
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
  },

  '@media screen and (max-width: 480px)': {
    minWidth: '70px',
    marginRight: '5px'
  }
});

const StyledInputContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #155D74',
  borderRadius: '4px',
  backgroundColor: '#FFF',
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
    minWidth: '50px'
  },

  '& p': {
    display: 'none'
  },

  '@media screen and (max-width: 600px)': {
    flexDirection: 'column'
  },

  '@media screen and (max-width: 460px)': {
    '& .MuiInputBase-root input': {
      // minWidth: '150px',
      textOverflow: 'ellipsis',
      overflow: 'hiddeon',
      whiteSpace: 'nowrap',
    }
  }
});

const StyledOpenButtonContainer = styled(Box) ({
  display: 'flex',
  justifySelf: 'end',
  alignItems: 'center',
  width: '160px !important',
  padding: '3px 8px',
  boxSizing: 'border-box',
  border: '1px solid #474747',
  borderRadius: '5px',
  backgroundColor: '#FFAA5D',
  cursor: 'pointer',

  'button': {
    width: '100%',
  },

  '&:hover': {
    backgroundColor: '#EE994C',
  },

  '& .MuiBox-root': {
    color: '#474747 !important',
    fontWeight: '600 !important',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#EE994C',
    },
  }
});

const StyledJourneyBlockHeaderContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '10px'
});

const StyledJourneyBlockControlContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
});

const StyledJourneyBlockControlButtonContainer = styled(Box) <{isdisabled: string}> (({isdisabled}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  padding: '5px',
  border: '1px solid #155D74',
  borderRadius: '4px',
  marginLeft: '5px',
  opacity: isdisabled == 'true' ? '.8' : '1',

  '&:hover': {
    cursor: isdisabled == 'true' ? 'not-allowed' : 'pointer',
    backgroundColor: isdisabled == 'true' ? '' : '#155D74',

    '& svg': {
      fill: isdisabled == 'true' ? '' : 'white'
    },

    '& .MuiBox-root': {
      color: isdisabled == 'true' ? '' : 'white'
    }
  },
}));

export {
  StyledJourneyBlockContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledOpenButtonContainer,
  StyledJourneyBlockHeaderContainer,
  StyledJourneyBlockControlContainer,
  StyledJourneyBlockControlButtonContainer
}