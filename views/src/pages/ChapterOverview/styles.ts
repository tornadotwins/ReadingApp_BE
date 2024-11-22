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
  marginRight: '250px',

  '& .MuiSvgIcon-root' : {
    width: '16px',
    marginRight: '10px',
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
});

const StyledSummaryContainer = styled(Box) ({
  border: '1px solid #1B7695',
  backgroundColor: '#F0F5FB',
  boxSizing: 'border-box',
  padding: '20px',
  margin: '20px 40px',
});

const StyledSummaryItemContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '300px',

  '& >.MuiBox-root>:nth-of-type(2)' : {
    marginRight: '25px',
  }
});

const StyledToggleContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  margin: '20px 40px',
});

const StyledToggleItemContainer = styled(Box)<{active: string}>(({active}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '120px',
  padding: '5px',
  boxSizing: 'border-box',
  border: '1px solid #474747',
  backgroundColor: active == 'true' ? '#1B7695' : '#F0F5FB',
  color: active == 'true' ? '#FFF' : '#474747',
  cursor: 'pointer',

  '& .MuiSvgIcon-root': {
    fill: active == 'true' ? '#FFF' : '#474747',
    marginRight: '10px',
  }
}));

const StyledTableInfoContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  boxSizing: 'border-box',
  margin: '20px 40px',
});

const StyledExportButtonContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '25px',
  padding: '0px 10px',
  boxSizing: 'border-box',
  backgroundColor: '#FFAA5D',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '#EE994C'
  },

  '& .MuiBox-root': {
    color: '#474747 !important',
    textTransform: 'none',

    '&:hover': {
    backgroundColor: '#EE994C'
  },
  }
});

export {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledSelectContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledSummaryContainer,
  StyledSummaryItemContainer,
  StyledToggleContainer,
  StyledToggleItemContainer,
  StyledTableInfoContainer,
  StyledExportButtonContainer,
}
