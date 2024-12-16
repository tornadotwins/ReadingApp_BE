import { Box, Slider, styled } from "@mui/material";

const StyledContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center'
});

const StyledAudioSliderContainer = styled(Box) ({
  width: '100%',
  overflow: 'hidden',
  padding: '0px 10px'
});

const StyledAudioBar = styled(Slider)({
  color: 'red',
  opacity: '1',
  height: '5px',

  '& .MuiSlider-thumb': {
    width: '13.25px',
    height: '14px',
    color: 'red',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    '&::before': {
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
    },
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 0px 0px 8px ${'rgb(0 0 0 / 16%)'}`,
    },
    '&.Mui-active': {
      width: 20,
      height: 20,
    },
  },
});

const StyledTimeContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledButtonContainer = styled(Box) ({
  display: 'flex',
  marginRight: '20px'
});

const StyledButton = styled(Box) ({
  cursor: 'pointer'
})

export {
  StyledContainer,
  StyledAudioSliderContainer,
  StyledAudioBar,
  StyledTimeContainer,
  StyledButtonContainer,
  StyledButton,
}
