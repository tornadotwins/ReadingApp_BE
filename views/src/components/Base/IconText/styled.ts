import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledIconTextContainer = styled(Box)({
  width: '75%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '16px',

  '@media (max-width: 359px)': {
    width: '65%',
  },

  '@media (min-width: 400px)': {
    width: '260px',
  },

  '@media (max-height: 639px)': {
    marginTop: '12px',
  },

  '@media screen and (orientation: landscape)': {
    '@media (max-width: 599px)': {
      width: '210px',
    },
  },
});

const StyledMainIconText = styled(Box)({
  width: 'calc(100% - 26px)',
  display: 'flex',
  alignItems: 'center',

  '@media (max-width: 359px)': {
    '& .MuiBox-root': {
      fontSize: '12px !important',
      lineHeight: '20px !important',
    }
  },
});

const StyledLeftIcon = styled('img')<{ hasRightIcon: boolean }>(({ hasRightIcon }) => ({
  width: hasRightIcon ? 'auto' : '23.9px',
  height: '100%',
  marginRight: '11.91px',
}));

const StyledRightIconContainer = styled(Box)({
  width: '26px',
  textAlign: 'center',
});

const StyledRightIcon = styled('img')({
  width: 'auto',
  height: 'auto',
});

export {
  StyledIconTextContainer,
  StyledMainIconText,
  StyledLeftIcon,
  StyledRightIconContainer,
  StyledRightIcon,
};
