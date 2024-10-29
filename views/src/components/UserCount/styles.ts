import {Box, styled} from '@mui/material';

const StyledUserCountContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '46px',
});

const StyledUserCount = styled(Box) ({
  marginLeft: '9px',
  width: '58px',
  height: '58px',
  borderRadius: '50px',
  backgroundColor: '#155D74',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& .MuiBox-root': {
    transform: 'translate(0, -15%)',
    marginTop: '15px'
  }
});

export {
  StyledUserCountContainer,
  StyledUserCount,
}