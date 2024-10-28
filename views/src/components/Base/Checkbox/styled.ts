import { styled, Box } from '@mui/material';

const StyledCheckBoxContainer = styled(Box) ({

});

const StyledCheckBoxLabel = styled(Box) ({
  marginRight: '20px'
});

const StyledCheckBox = styled(Box) ({
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '20px',

  backgroundColor: 'white',
  border: 'none',
});

const StyledCheckBoxImgContainer = styled(Box) ({
  width: '70%',
  height: '70%',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledCheckBoxImg = styled('img') ({
  width: '100%',
  height: '100%',
})

export {
  StyledCheckBoxContainer,
  StyledCheckBoxLabel,
  StyledCheckBox,
  StyledCheckBoxImgContainer,
  StyledCheckBoxImg,
 };
