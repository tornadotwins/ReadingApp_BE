import { FormControlLabel, RadioGroup, styled } from '@mui/material';

const StyledRadioGroup = styled(RadioGroup)({
  justifyContent: 'space-between',
  display: 'flex',
});

const StyledFormControlLabel = styled(FormControlLabel)<{ style: any, disabled: boolean }>(({ style, disabled }) => ({
  color: style.color,
  fontFamily: 'Inter',
  fontSize: '16px',
  justifyContent: 'space-between',

  '& .MuiTypography-root': {
    fontSize: '16px',
    fontFamily: 'Inter',
  },

  '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)': {
    color: style.color,
  },

  '& .MuiButtonBase-root': {
    color: 'unset !important',
  },

  '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
    color: style.color,
  },

  '& .MuiSvgIcon-root': {
    opacity: disabled ? '0.5' : '1'
  }
}));

export { StyledRadioGroup, StyledFormControlLabel };
