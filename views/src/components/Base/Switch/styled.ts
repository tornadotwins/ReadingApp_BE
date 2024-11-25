import { Box } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const StyledSwitchContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledSliderBarLabel = styled(Box)({
  margin: '0',
});

const StyledSwitchMainContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const StyledSwitchLabelValue = styled(Box)({});

const StyledSwitch = styled(Switch)(({ style, disabled }) => ({
  '& .MuiSwitch-switchBase': {
    color: style?.backgroundColor, // Thumb color when unchecked

    '& + .MuiSwitch-track': {
      backgroundColor: style?.backgroundColor, // Background color when unchecked
      border: `2px solid ${style?.color}`,
      borderRadius: '10px'
    },

    '&.Mui-checked': {
      color: style?.color, // Thumb color when checked
      opacity: disabled ? '0.8' : '1',
      '& + .MuiSwitch-track': {
        backgroundColor: style?.color,
        opacity: disabled ? '0.5' : '1',
      },
    },
  },

  '& .MuiButtonBase-root': {
    backgroundColor: 'transparent !important',
  },

  '& .MuiSwitch-track': {
    backgroundColor: style?.backgroundColor,
    border: '2px solid #F00', // Outline color
    opacity: 1, // Ensuring full opacity for both states
  },

  '& .MuiSwitch-thumb': {
    backgroundColor: style?.backgroundColor,
    border: `2px solid ${style?.color}`,
  },
}));

export {
  StyledSwitchContainer,
  StyledSliderBarLabel,
  StyledSwitchMainContainer,
  StyledSwitchLabelValue,
  StyledSwitch
};
