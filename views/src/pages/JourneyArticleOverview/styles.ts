import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box)({
  position: 'relative',
  minHeight: 'calc(100vh - 37px)',
  width: '100%',
  
  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

const StyledIntroOverviewContainer = styled(Box)({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledSelectContainer = styled(Box) ({
  margin: '20px 40px',
  display: 'flex',
  alignItems: 'center',

  '@media screen and (max-width: 800px)': {
    display: 'block',
  },
});

const StyledSelectGroupContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& > .MuiFormControl-root': {
    marginRight: '20px'
  },

  '@media screen and (max-width: 650px)': {
    display: 'block',

    '& > .MuiFormControl-root': {
      alignItems: 'start',

      '& .MuiInputBase-root': {
        width: '100%'
      }
    },
  }
});

const StyledStatusManagerContainer = styled(Box) ({
  margin: '20px 40px',
  display: 'flex',
  alignItems: 'center',

  '& > .MuiBox-root': {
    width: '120px',
    marginRight: '50px'
  },

  '@media screen and (max-width: 800px)': {
    display: 'block',
  },
});

const StyledButtonContainer = styled(Box) <{isdisable: string}> (({isdisable}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px !important',
  marginRight: '0px !important',
  padding: '5px 10px',
  boxSizing: 'border-box',
  border: '1px solid #474747',
  backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#FFAA5D',
  cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',

  'button': {
    width: '100%',
  },

  '&:hover': {
    backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#EE994C',
  },

  '& .MuiBox-root': {
    color: '#474747 !important',
    fontWeight: '600 !important',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#EE994C',
    },
  }
}));

const StyledIntroControlButtonGroup = styled(Box)({
  width: '100%',
  padding: '20px 40px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
  }
});

const StyledButtonGroupContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    width: '100%'
  }
})

const StyledIntroControlButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '20px !important',
  padding: '5px 10px',
  boxSizing: 'border-box',
  border: '1px solid #474747',
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
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#EE994C',
    },
  },

  '@media screen and (max-width: 800px)': {
    width: '100%',
    marginRight: '0px !important',
    marginBottom: '10px'
  }
});

const StyledDynamicBlockGroup = styled(Box)({
  width: '600px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  margin: '20px 40px 0px 40px',
});

const StyledBackButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transform: '.25s all ease',
  marginBottom: '10px',
  alignSelf: 'start',

  '& svg': {
    fill: '#155D74',
    marginRight: '10px'
  },

  '& .MuiBox-root': {
    userSelect: 'none',
  },

  '&:hover': {
    '& .MuiBox-root': {
      color: '#266E85',
    },

    '& svg': {
      fill: '#266E85',
    },
  }
});

const StyledPreviewBlockContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  width: '400px',
  margin: '20px 40px 0px 40px',
});

const StyledPreviewTitleContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginBottom: '20px',

  '& .MuiBox-root': {
    userSelect: 'none',
  },
});

const StyledPagePreviewContainer = styled(Box) ({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid #000',
});

const StyledBlockGroupContainer = styled(Box) ({
  display: 'flex',
  margin: '20px 40px',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  gap: '20px',

  '@media screen and (max-width: 700px)': {
    flexDirection: 'column',
  }
});

const StyledJourneyContentContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'start',
});

export {
  StyledContainer,
  StyledIntroOverviewContainer,
  StyledBookSelectorContainer,
  StyledSelectContainer,
  StyledSelectGroupContainer,
  StyledStatusManagerContainer,
  StyledButtonContainer,
  StyledIntroControlButtonGroup,
  StyledButtonGroupContainer,
  StyledIntroControlButtonContainer,
  StyledDynamicBlockGroup,
  StyledBackButtonContainer,
  StyledPreviewBlockContainer,
  StyledPreviewTitleContainer,
  StyledPagePreviewContainer,
  StyledBlockGroupContainer,
  StyledJourneyContentContainer,
}