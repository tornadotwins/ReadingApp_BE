import { Box, styled } from "@mui/material";

const StyledSubBookContainer = styled(Box) ({
  margin: '2px 0px',
  display: 'flex',
});

const StyledSubBookTitleContainer = styled(Box) ({
  width: '100px',
  minWidth: '100px',
  maxWidth: '200px',
  marginRight: '10px',

  '& .MuiBox-root': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
    padding: '9px 0px'
  }
});

const StyledSubBookContentContainer = styled(Box) ({
  display: 'flex',
  flexGrow: 1,
});

const StyledSubBookIntroChapterContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'center',
  marginRight: '3px',
  minWidth: '45px',

  '& >*': {
    flexGrow: 1
  }
});

const StyledSubBookChapterGroupContainer = styled(Box) ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '2px',
})

export {
  StyledSubBookContainer,
  StyledSubBookTitleContainer,
  StyledSubBookContentContainer,
  StyledSubBookIntroChapterContainer,
  StyledSubBookChapterGroupContainer,
}