import {
  Box,
  styled
} from "@mui/material";

const StyledContainer = styled(Box) ({
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

const StyledChapterOverviewContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100% - 73px)',
  margin: 'auto',
  marginTop: '73px',
});

const StyledBookSelectorContainer = styled(Box) ({
  margin: "20px 40px",
});

const StyledTableContainer = styled(Box) ({
  margin: '20px 40px',
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box'
})

const StyledSelectContainer = styled(Box) ({
  margin: '20px 40px',
  display: 'flex',
  alignItems: 'center',
});

const StyledBackContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: '100px',

  '& .MuiSvgIcon-root' : {
    fill: '#155D74'
  }
});

const StyledSelectGroupContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& >.MuiBox-root': {
    minWidth: '50px',
    marginRight: '20px'
  },

  '& > .MuiFormControl-root': {
    marginRight: '20px'
  }
})

export {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledSelectContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
}
