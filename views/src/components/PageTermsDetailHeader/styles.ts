import { Box, styled } from "@mui/material";

const StyledTermDetailHeaderContainer = styled(Box) ({
  borderBottom: '1px solid #155D74',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '10px 0px',
});

const StyledLanguageSelectContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  '& >:first-of-type': {
    minWidth: '200px',
  }
});

const StyledTermDetailHeaderButtonContainer = styled(Box) <{isdisable: string}> (({isdisable}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '300px',

  '& .MuiButtonBase-root': {
    width: '140px',
    boxSizing: 'border-box',
    padding: '8px 14px',
    backgroundColor: isdisable == 'true' ? '#A1A1A1': '#FFAA5D',
    borderRadius: '0px',
    border: '1px solid #474747',
    textTransform: 'none !important',
    cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',

    '& .MuiBox-root': {
      fontWeight: '500 !important'
    }
  }
}));

export {
  StyledTermDetailHeaderContainer,
  StyledLanguageSelectContainer,
  StyledTermDetailHeaderButtonContainer,
}