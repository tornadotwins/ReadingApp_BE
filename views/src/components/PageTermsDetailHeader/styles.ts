import { Box, styled } from "@mui/material";

const StyledTermDetailHeaderContainer = styled(Box) ({
  borderBottom: '1px solid #155D74',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  padding: '10px 0px',

  '@media screen and (max-width: 600px)': {
    width: '100%',
    display: 'block',
  },
});

const StyledLanguageSelectContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  '& >:first-of-type': {
    minWidth: '200px',
    marginRight: '10px',

    '@media screen and (max-width: 1000px)': {
      minWidth: '100px'
    },

    '@media screen and (max-width: 780px)': {
      minWidth: '70px',
      fontSize: '14px !important',
    },
  },

  '@media screen and (max-width: 780px)': {
    '& .MuiFormControl-root': {
      width: '100px !important',

      '& .MuiInputBase-root': {
        width: '100%',

        '& .MuiSelect-select': {
          padding: '10px !important',

          '& .MuiBox-root': {
            fontSize: '14px !important'
          },
        },
      },
    },

    '@media screen and (max-width: 600px)': {
      marginBottom: '10px'
    },
  },
});

const StyledTermDetailHeaderButtonContainer = styled(Box) <{isdisable: string}> (({isdisable}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '300px',

  '& .MuiButtonBase-root': {
    width: '140px',
    boxSizing: 'border-box',
    padding: '8px 14px',
    backgroundColor: isdisable == 'true' ? '#A1A1A1': '#FFAA5D',
    borderRadius: '0px',
    border: '1px solid #474747',
    textTransform: 'none !important',
    cursor: isdisable == 'true' ? 'not-allowed' : 'pointer',

    '& .MuiBox-root': {
      fontWeight: '500 !important'
    }
  },

  '@media screen and (max-width: 780px)': {
    width: '200px',
    fontSize: '14px !important',

    '& .MuiBox-root': {
      fontSize: '14px !important'
    },

    '& .MuiButtonBase-root': {
      width: '120px'
    },
  },
}));

export {
  StyledTermDetailHeaderContainer,
  StyledLanguageSelectContainer,
  StyledTermDetailHeaderButtonContainer,
}