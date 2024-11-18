import {Box, styled} from '@mui/material';

const StyledContainer = styled(Box) ({
  backgroundColor: '#F0F5FB',
  margin: '5px 40px',
  padding: '15px',
});

const StyledOverviewTitleContainer = styled(Box) ({
  display: 'flex',
});

const StyledOverviewTitleIcon = styled('img') ({
  width: '24px',
  height: '24px',
  marginRight: '10px',
});

export {
  StyledContainer,
  StyledOverviewTitleContainer,
  StyledOverviewTitleIcon,
}