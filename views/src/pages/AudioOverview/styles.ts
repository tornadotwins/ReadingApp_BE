import { Box, styled } from "@mui/material";

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

const StyledBackContainer = styled(Box) ({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: '250px',
  transitionDuration: '.25s',

  '&:hover': {
    transform: 'scale(1.1)',
  },

  '& .MuiSvgIcon-root' : {
    width: '16px',
    marginRight: '10px',
    fill: '#155D74'
  },

  '@media screen and (max-width: 1050px)': {
    marginRight: '100px',
  },

  '@media screen and (max-width: 900px)': {
    marginRight: '30px',
  }
});

const StyledSelectGroupContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& >.MuiBox-root': {
    minWidth: '100px',
    marginRight: '20px'
  },

  '& > .MuiFormControl-root': {
    marginRight: '20px'
  },

  '@media screen and (max-width: 900px)': {
    '& >.MuiBox-root': {
      minWidth: '50px',
      marginRight: '10px',
    },
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


const StyledAudioOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledFileImporterContainer = styled(Box) ({
  height: 'calc(100% - 73px)',
  margin: '20px 40px',

  '& :nth-of-type(2)': {
    border: '1px solid #A1A1A1',
    borderRadius: '5px',

    '& input': {
      width: '100%',
      cursor: 'pointer'
    }
  }
});

const StyledButtonGroupContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '20px 40px',
  boxSizing: 'border-box',
});

const StyledButton = styled(Box) <{isdisable: string}> (({isdisable}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFAA5D',
  color: '#474747',
  border: '1px solid #474747',
  cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',
  opacity: isdisable == 'true' ? '.8' : '1',

  '& :hover': {
    backgroundColor: '#DD883B',
  },

  '& button': {
    textTransform: 'capitalize',
    borderRadius: '0px',
    width: '100%',
    
    '& .MuiBox-root': {
      backgroundColor: 'transparent'
    }
  },
}));

const StyledUploadButtonGroupContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '20%',
  alignItems: 'center'
});

const StyledAudioPlayerContainer = styled(Box) ({
  boxSizing: 'border-box',
  margin: '20px 40px',
});

const StyledAudioPlayer = styled(Box) ({
  marginTop: '15px',

  '& >.MuiPaper-root': {
    width: '100%',
    marginLeft: '0px'
  }
});

const StyledTimeLineProgressContainer = styled(Box) ({
  display: 'flex',
  backgroundColor: '#007bff',
  borderRadius: '10px',
  height: '10px',
  boxSizing: 'border-box',
  margin: '20px 40px',
  cursor: 'pointer'
});

const StyledAudioTableContainer = styled(Box) ({
  display: 'flex',
  boxSizing: 'border-box',
  margin: '20px 40px',
});

const StyledMarkTableContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 40px'
});

export {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledSelectContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledAudioOverviewContainer,
  StyledFileImporterContainer,
  StyledButtonGroupContainer,
  StyledButton,
  StyledUploadButtonGroupContainer,
  StyledAudioPlayerContainer,
  StyledAudioPlayer,
  StyledTimeLineProgressContainer,
  StyledAudioTableContainer,
  StyledMarkTableContainer,
}