import {Box, styled} from '@mui/material';

const StyledImporterContainer = styled(Box) ({
  width: '100%',
  height: '100%',
});

const StyledLanguageDropdownContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
});

const StyledLabel = styled(Box) ({
  margin: '50px 0px 10px 0px',
});

const StyledLanguageDropdown = styled(Box) ({
  width: '30%',
  maxWidth: '200px',

  '& .MuiInputBase-root': {
    width: '100%',
    border: '1px solid black'
  }
});

const StyledConfirmTextContainer = styled(Box) ({
  width: '100%',
  margin: '10px 0px',
});

const StyledFilePickerContainer = styled(Box) ({
  width: '100%',

  ' & .MuiFormControl-root': {
    border: '1px solid black'
  }
});

const StyledFilePicker = styled(Box) ({
  width: '100%',
});

const StyledImportButtonContainer = styled(Box) ({
  width: '30%',
  minWidth: '120px',
  maxWidth: '300px',
  marginTop: '30px',
  padding: '10px 30px 10px 0px',
  boxSizing: 'border-box',

  '& .MuiButtonBase-root': {
    backgroundColor: '#155D74',
    width: '100%',

    '& .MuiBox-root': {
      color: 'white !important'
    }
  }
});

const StyledTableContainer = styled(Box) ({
  width: '100%',
})

export {
  StyledImporterContainer,
  StyledLanguageDropdownContainer,
  StyledLabel,
  StyledLanguageDropdown,
  StyledConfirmTextContainer,
  StyledFilePickerContainer,
  StyledFilePicker,
  StyledImportButtonContainer,
  StyledTableContainer,
}