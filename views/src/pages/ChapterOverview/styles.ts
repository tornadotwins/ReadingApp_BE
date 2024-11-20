import {
  Box,
  styled
} from "@mui/material";

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
  width: '100%',
  margin: '20px 40px',
  display: 'flex',
  alignItems: 'center',
});

const StyledBackContainer = styled(Box) ({
  width: '20%',
  display: 'flex',
  alignItems: 'center',

  '& .MuiSvgIcon-root' : {
    fill: '#155D74'
  }
})

export {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledSelectContainer,
  StyledBackContainer,
}
