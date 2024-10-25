import {Box, styled} from '@mui/material';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledAdminPortalContainer = styled(CenteredFlexBox) ({
  width: '100%',
  height: '100%',

  '& >.MuiBox-root: first-of-type': {
    backgroundColor: '#1B7695',
  }
});

const StyledAdminPortalBodyContainer = styled(Box) ({
  width: '100%',
  height: 'calc(100vh - 73px)',
  marginTop: '73px',
  padding: '0px 48px',
});

const StyledTablePanelContainer = styled(Box) ({
  width: '100%',
  marginTop: '16px',
  display: 'flex',
  justifyContent: 'left',
});

const StyledAdminText = styled(Box) ({
  width: '100%',
  margin: '16px 0px'
})

const StyledButtonGroup = styled(Box) ({
  display: 'flex',
  alignItems: 'center',
});

const StyledButton = styled(Box) ({
  backgroundColor: '#FFAA5D',
  padding: '5px',
  marginRight: '15px',
  border: '1px solid #474747',

  '& button': {
    color: '#474747 !important',
    fontSize: '16px !important',
    fontFamily: '"Baloo Da 2" !important',
    fontWeight: '500 !important',
    lineHeight: '24px !important',
  }
});

const StyledDelButton = styled(Box) ({
  backgroundColor: '#FF0505',
  padding: '5px',
  border: '1px solid #474747',

  '& button': {
    color: 'white !important',
    fontSize: '16px !important',
    fontFamily: '"Baloo Da 2" !important',
    fontWeight: '500 !important',
    lineHeight: '24px !important',
  }
});

export {
  StyledAdminPortalContainer,
  StyledAdminPortalBodyContainer,
  StyledTablePanelContainer,
  StyledAdminText,
  StyledButtonGroup,
  StyledButton,
  StyledDelButton,
}