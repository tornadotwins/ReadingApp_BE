import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import MuiCheckbox from '@mui/material/Checkbox';

const InputContainer = styled(Box)({
  display: 'flex',
  width: '79.44%',
  justifyContent: 'space-between',
  alignItems: 'center',

  '& .MuiButtonBase-root': {
    borderRadius: '0',
  },

  '@media (max-height: 639px)': {
    height: '30px',
  },

  '@media (min-width: 500px)': {
    width: '260px',
  },

  '@media (min-height: 740px)': {
    marginBottom: '28px',
  },

  '@media (max-height: 739px)': {
    marginBottom: '12px',
  },
});

const InputLabelContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const InputIcon = styled('img')({
  width: '20px',
  marginRight: '10.78px',
});

const InputLabel = styled(Box)({
  fontFamily: 'Baloo Da 2',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '24px',
  paragraph: '16px',
  color: '#000',
  margin: '0',

  '@media (max-width: 359px)': {
    fontSize: '14px',
    lineHeight: '20px',
  },

  '@media screen and (orientation: landscape)': {
    '@media (max-width: 599px)': {
      fontSize: '14px',
    },
  },
});

const StyledCheckbox = styled(MuiCheckbox)(({ size }) => ({
  border: '1px solid #17637D',
  width: size === 'small' ? '40px' : size === 'medium' ? '50px' : '60px',
  height: '39px',
  marginRight: '93px',

  '& .MuiSvgIcon-root': {
    fontSize: '24px',
    color: '#FEFEFE',
    width: '40px',
    height: '40px',
  },

  '& .MuiCheckbox-root': {
    width: '24px',
    height: '24px',
    borderRadius: '0px',
    border: '1px solid #17637D',
  },

  '&.Mui-checked': {
    color: '#FFF',
    '& .MuiSvgIcon-root': {
      color: '#1B7695',
    },
  },

  '&:hover': {
    backgroundColor: 'rgba(27, 118, 149, 0.1)',
  },

  '@media (max-width: 359px)': {
    fontSize: '14px',
    lineHeight: '20px',
    width: '28px',
    height: '28px',
    marginRight: '105px',

    '& .MuiInputBase-input': {
      padding: '2px 8px',
      fontSize: '14px',
    },

    '& .MuiSvgIcon-root': {
      width: '28px',
      height: '28px',
    },
  },

  '@media (max-height: 639px)': {
    width: '28px',
    height: '28px',
    marginRight: '105px',

    '& .MuiInputBase-input': {
      padding: '2px 8px',
      fontSize: '14px',
    },

    '& .MuiSvgIcon-root': {
      width: '28px',
      height: '28px',
    },
  },

  '@media screen and (orientation: landscape)': {
    '@media (max-width: 599px)': {
      marginRight: '62px',
    },
  },
}));

export { InputContainer, InputLabelContainer, InputIcon, InputLabel, StyledCheckbox };
