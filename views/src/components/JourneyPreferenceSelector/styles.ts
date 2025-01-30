import { Box, styled } from "@mui/system";

const StyledContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const StyledLanguageSelectorContainer = styled(Box) ({
  width: '150px',

  display: 'flex',
  alignItems: 'center',

  '& .MuiFormControl-root' : {
    width: 'unset',
    marginLeft: '0px !important',
  },

  '& .MuiBox-root': {
    fontFamily: '"Baloo Da 2" !important',
  },

  '@media screen and (max-width: 670px)': {
    width: 'unset'
  },
});

const StyledSwitchContainer = styled(Box) ({
  width: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

const StyledButtonContainer = styled(Box) <{isdisable: string}> (({isdisable}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '160px !important',
  marginRight: '0px !important',
  padding: '5px 10px',
  boxSizing: 'border-box',
  border: '1px solid #474747',
  backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#FFAA5D',
  cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',

  'button': {
    width: '100%',
  },

  '&:hover': {
    backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#EE994C',
  },

  '& .MuiBox-root': {
    color: '#474747 !important',
    fontWeight: '600 !important',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: isdisable == 'true' ? '#A1A1A1' : '#EE994C',
    },
  }
}));

export {
  StyledContainer,
  StyledLanguageSelectorContainer,
  StyledSwitchContainer,
  StyledButtonContainer,
}
