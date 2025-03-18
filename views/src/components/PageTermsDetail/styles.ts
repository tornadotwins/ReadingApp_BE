import { Box, styled } from "@mui/material";

const StyledDetailContainer = styled(Box)({
  width: '100%',
});

const StyledDetailItemContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '5px 0px',

  '& >:first-of-type': {
    minWidth: '200px',
  },

  '@media screen and (max-width: 600px)': {
    width: '100%',
    display: 'block',
    marginTop: '10px'
  },
});

const StyledTermContainer = styled(Box) ({
  display: 'flex',
  alignItems: 'center',

  '& > .MuiBox-root: first-of-type': {
    minWidth: '200px',
    width: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: '10px',

    '@media screen and (max-width: 1000px)': {
      minWidth: '100px',
      width: '100px'
    },

    '@media screen and (max-width: 780px)': {
      minWidth: '70px',
      width: '70px',
      fontSize: '14px !important'
    },

    '@media screen and (max-width: 600px)': {
      minWidth: '100px',
      width: '100px',
    },
  }
});

const StyledDefaultTermContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',

  '& .MuiBox-root': {
    minWidth: '200px',
    width: '200px',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',

    '@media screen and (max-width: 1000px)': {
      minWidth: '150px',
      width: '150px'
    },

    '@media screen and (max-width: 780px)': {
      minWidth: '140px',
      width: '140px',
      fontSize: '14px !important'
    },

    '@media screen and (max-width: 600px)': {
      minWidth: '120px',
      width: '120px',
    },
  }
});

const StyledCurrentTermContainer = styled(Box) ({
  display: 'flex',
  justifyContent: 'end',
  width: '300px',
  padding: '0px',

  '& >.MuiBox-root': {
    width: '100%',
    padding: '0px !important',

    '& >.MuiFormControl-root': {
      width: '100%',
      border: '1px solid #155D74',
      
      '& input': {
        fontFamily: '"Baloo Da 2" !important',
        color: '#155D74'
      }
    },
  },

  '@media screen and (max-width: 780px)': {
    width: '200px',

    '& input': {
      fontSize: '14px !important'
    }
  },

  '@media screen and (max-width: 600px)': {
    width: '100%',
  },
});

const StyledPreviewImg = styled('img') <{noimage: string}> (({noimage}) => ({
  width: '20px',
  height: '20px',
  marginRight: '10px',
  cursor: noimage == 'true' ? 'not-allowed' : 'pointer',
  opacity: noimage == 'true' ? '0.5' : '1',

  '@media screen and (max-width: 780px)': {
    width: '15px',
    height: '15px'
  },
}));


export {
  StyledDetailContainer,
  StyledDetailItemContainer,
  StyledTermContainer,
  StyledDefaultTermContainer,
  StyledCurrentTermContainer,
  StyledPreviewImg,
}