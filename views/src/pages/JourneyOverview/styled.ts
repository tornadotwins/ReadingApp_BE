import { Box, styled } from "@mui/system";

const StyledContainer = styled(Box) ({
  position: 'relative',
  minHeight: '100vh',
  width: '100%',
  
  '& >.MuiBox-root:first-of-type': {
    backgroundColor: '#1B7695',

    '& >.MuiBox-root': {
      color: '#F6FCFC',
    }
  }
});

const StyledJourneyOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: '20px 40px',
});

const StyledPreferenceSelectorContainer = styled(Box) ({
  width: '600px',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 40px 0px 40px',

  '& .MuiFormControl-root' : {
    width: 'unset',
    marginLeft: '15px',
  },

  '& .MuiBox-root': {
    fontFamily: '"Baloo Da 2" !important',
  },

  '@media screen and (max-width: 670px)': {
    width: 'unset'
  },
});

const StyledDirectoryControlButtonGroupContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 40px 0px 40px',

  '& > .MuiBox-root: first-of-type': {
    marginRight: '20px',
  },

  '@media screen and (max-width: 800px)': {
    flexDirection: 'column',
    width: '100%'
  }
});

const StyledButtonContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px !important',
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
    fontWeight: '600 !important',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#EE994C',
    },
  }
});

const StyledJourneyContentContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'start',
});

const StyledDynamicJourneyContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  width: '600px',
  margin: '20px 40px 0px 40px',
});

const StyledBackButtonContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transform: '.25s all ease',

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

const StyledDynamicJourneyBlockGroupContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
  marginTop: '10px'
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

export {
  StyledContainer,
  StyledJourneyOverviewContainer,
  StyledBookSelectorContainer,
  StyledPreferenceSelectorContainer,
  StyledDirectoryControlButtonGroupContainer,
  StyledButtonContainer,
  StyledJourneyContentContainer,
  StyledDynamicJourneyContainer,
  StyledBackButtonContainer,
  StyledDynamicJourneyBlockGroupContainer,
  StyledPreviewBlockContainer,
  StyledPreviewTitleContainer,
  StyledPagePreviewContainer,
}