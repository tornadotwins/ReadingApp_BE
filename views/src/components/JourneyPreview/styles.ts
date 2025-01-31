import { Box, styled } from "@mui/material";

const StyledContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  position: 'relative',
  height: '80dvh'
});

const StyledHeaderContainer = styled(Box)({
  display: 'flex',
  position: 'relative',
  width: '100%',
});

const StyledBackgroundImg = styled('img')({
  width: '100%',
  marginTop: '57px',
});

const StyledMarkContainer = styled(Box)({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  position: 'absolute',
  left: '30px',
  top: '30px',
  width: 'calc(100% - 60px)',
});

const StyledMarkImgMainContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

const StyledMarkImgContainer = styled(Box)({
  width: '40px',
  cursor: 'pointer',
  position: 'relative',

  '& div': {
    position: 'absolute',
    top: '28px',
    width: '100%',
    textAlign: 'center',
    maxWidth: '65px',

    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    userSelect: 'none'
  }
});

const StyledMarkImg = styled('img')({
  width: '100%',
  height: '100%',
});

const StyledMarkTitle = styled(Box)({
  margin: 0,
  position: 'relative',
  top: '-20px',
  
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  userSelect: 'none'
});

const StyledHamburgerMenuContainer = styled(Box) <{hamburgercolor: string}> (({hamburgercolor}) => ({
  position: 'absolute',
  top: '12px',
  right: '15px',
  width: '46px',

  '& .hamburger-react': {
    width: '46px !important',
    color: hamburgercolor,
  },

  '& .hamburger-react ~ .MuiBox-root ': {
    border: `1px solid ${hamburgercolor}`,
  },

  '@media (max-height: 639px)': {
    top: '8px',
    right: '10px',
  },

  '@media screen and (orientation: landscape)': {
    right: '15px',
  },
}));

const StyledSearchBtn = styled('img')({
  position: 'relative',
  top: '10px',
  cursor: 'pointer',
  '&:active': {
    opacity: '0.8',
  },
});

const StyledCloseBtnContainer = styled(Box)({
  position: 'absolute',
  top: '30px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
});

const StyledCloseBtn = styled('img')({
  width: '100%',

  '&:active': {
    opacity: '0.8',
  },
});

const StyledSettingBtn = styled('img')({
  position: 'absolute',
  top: '18px',
  right: '30px',
  cursor: 'pointer',

  '&:active': {
    opacity: '0.8',
  },
});

////////////////////// Body //////////////////////
const StyledBodyContainer = styled(Box)({
  height: 'calc(80dvh - 185px)',
  width: 'calc(100% - 60px)',
  position: 'absolute',
  top: '145px',
  padding: '0px 30px',
  backgroundColor: 'rgb(21, 93, 116)',

  '@media screen and (orientation: landscape)': {
    height: 'calc(80dvh - 145px)',
  },
});

const StyledMainContainer = styled(Box)({
  backgroundColor: '#FFF',
  height: 'calc(80dvh - 185px) !important',
  position: 'relative',
  zIndex: '1',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  overflowY: 'scroll',

  '@media screen and (orientation: landscape)': {
    height: 'calc(80dvh - 145px)',
  }
});

const StyledBackContainer = styled(Box) <{showbtn: string}> (({showbtn}) => ({
  width: '100%',
  display: showbtn === 'true' ? 'none' : 'flex',
  alignItems: 'center',
  marginBottom: '10px',

  'svg': {
    fill: '#1B7695',
  }
}));

// Journey Section
const StyledJourneySectionContainer = styled(Box) ({
  padding: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
});

// Journey Card
const StyledJourneyCardContainer = styled(Box) ({
  backgroundColor: '#F0F5FB',
  padding: '9px 11px',
  marginBottom: '10px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer'
});

const StyledJourneyCardInfoContainer = styled(Box) ({
  width: 'calc(100% - 65px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginRight: '20px',
});

const StyledJourneyCardHeaderContainer = styled(Box) ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

const StyledJourneyCardHeaderImgContainer = styled(Box) ({
  width: '15px',
  height: '15px',
  marginRight: '10px'
});

const StyledJourneyCardHeaderImg = styled('img') ({
  width: '100%',
  height: '100%',
});

const StyledJourneyCardTitleContainer = styled(Box)({
  width: '100%',

  '& .MuiBox-root': {
    width: '100%',
    display: '-webkit-box',
    justifyContent: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  },
});

const StyledJourneyCardDownloadContainer = styled(Box) <{isdownloaded: string}> (({isdownloaded}) => ({
  width: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: isdownloaded == 'true' ? 'space-between' : 'flex-end',
  cursor: 'pointer'
}));

const StyledJourneyDownloadImg = styled('img') ({
  width: '16px',
  height: '16px',
});

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledBackgroundImg,
  StyledMarkContainer,
  StyledMarkImgMainContainer,
  StyledMarkImgContainer,
  StyledMarkImg,
  StyledMarkTitle,
  StyledHamburgerMenuContainer,
  StyledSearchBtn,
  StyledCloseBtnContainer,
  StyledCloseBtn,
  StyledSettingBtn,

  StyledBodyContainer,
  StyledMainContainer,
  StyledBackContainer,

  StyledJourneySectionContainer,
  StyledJourneyCardContainer,
  StyledJourneyCardInfoContainer,
  StyledJourneyCardHeaderContainer,
  StyledJourneyCardHeaderImgContainer,
  StyledJourneyCardHeaderImg,
  StyledJourneyCardTitleContainer,
  StyledJourneyCardDownloadContainer,
  StyledJourneyDownloadImg,
}