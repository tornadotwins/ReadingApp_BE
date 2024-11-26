import { Box, styled } from "@mui/material";

const StyledDetailContainer = styled(Box)({
  width: '100%',
});

const StyledDetailItemContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 0px',

  '& >:first-of-type': {
    minWidth: '200px',
  }
});

const StyledTermContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  '& >.MuiBox-root: first-of-type': {
    minWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }
})

const StyledDefaultTermContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StyledCurrentTermContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'end',
  width: '300px',
  padding: '0px',

  '& >.MuiBox-root': {
    width: '100%',
    padding: '0px !important',

    '& >.MuiFormControl-root': {
      width: '100%',
      border: '1px solid #155D74',
      
      '& input': {
        fontFamily: '"Baloo Da 2" !important'
      }
    }
  }
});

const StyledPreviewImg = styled('img') ({
  width: '20px',
  height: '20px',
  marginRight: '10px',

  '&:hover': {
    cursor: 'pointer',
  }
});


export {
  StyledDetailContainer,
  StyledDetailItemContainer,
  StyledTermContainer,
  StyledDefaultTermContainer,
  StyledCurrentTermContainer,
  StyledPreviewImg,
}