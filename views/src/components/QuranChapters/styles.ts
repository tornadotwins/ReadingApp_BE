import {Box, styled} from '@mui/material';

const StyledQuranContainer = styled(Box) ({
  position: 'relative',
});

const StyledIntroContainer = styled(Box) ({
  position: 'absolute',
  left: '0px',
  top: '0px'
});

const StyledChapterContainer = styled(Box) ({
  width: '100%',
})

export {
  StyledQuranContainer,
  StyledIntroContainer,
  StyledChapterContainer,
}