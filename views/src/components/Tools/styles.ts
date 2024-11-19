import {Box, styled} from '@mui/material';

const StyledToolsContainer = styled(Box) ({
  width: '100%',
  boxSizing: 'border-box',
  margin: '0px',
  padding: '8px 22px',
  backgroundColor: '#000',
  color: '#FFF',
  display: 'flex',
  alignItems: 'center',
});

const StyledToolContainer = styled(Box) ({
  margin: '0px',
});

const ToolContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '50px',
  cursor: 'pointer',
  transitionDuration: '.25s',

  '&:hover': {
    transform: 'scale(1.2)',
  }
});

const StyledToolIconContainer = styled(Box) ({
  width: '18px',
  marginRight: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledToolIcon = styled('img') ({
  width: '100%',
})

export {
  StyledToolsContainer,
  StyledToolContainer,
  ToolContainer,
  StyledToolIconContainer,
  StyledToolIcon,
}
