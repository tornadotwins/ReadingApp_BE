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
  width: '90%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '20px',

  '& :nth-of-type(2)': {
    border: '1px solid #A1A1A1',
    borderRadius: '5px',

    '& input': {
      width: '100%',
      cursor: 'pointer'
    }
  }
});

export {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledSelectContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledAudioOverviewContainer,
  StyledFileImporterContainer,
}