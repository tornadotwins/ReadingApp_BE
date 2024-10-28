import { useState, useRef, useEffect } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Button from '../Button/Button';
import Input from '../Input';
import Text from '../Text';

import { LanguageDialogPropsType } from './types';
import {
  StyledDialog,
  StyledForm,
  StyledFormValidateMessage,
  StyledButtonContainer,
  StyledButtonGroup,
  StyledDialogTitle,
  StyledDialogContent,
} from './styles';

function LanguageDialog(props: LanguageDialogPropsType) {
  const [language, setLanguage] = useState('');
  const [isValidate, setIsValidate] = useState(true);

  useEffect(() => {
    if (props.languages.includes(language)) {
      setIsValidate(false);
    } else {
      setIsValidate(true)
    }
  }, [props.languages, props.isOpen, language]);

  const saveRef = useRef<HTMLButtonElement>(null);

  const focusSaveButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      saveRef.current?.click();
    }
  };

  const handleSave = () => {
    setLanguage('');
    props.onConfirm(language);
  };

  const handleCancel = () => {
    // Reset form state
    setLanguage('');

    // Call the onCancel prop
    props.onCancel();
  };

  return (
    <StyledDialog open={props.isOpen} onClose={handleCancel}>
      <StyledDialogTitle>Language</StyledDialogTitle>

      <StyledDialogContent>
        <StyledForm>
          <Input
            label='Language:'
            value={language}
            onKeyDown={focusSaveButton}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLanguage(e.target.value)}
          />
        </StyledForm>
        {
          (!isValidate) &&
          <StyledFormValidateMessage>
            <WarningAmberIcon />
            <Text fontFamily='"Baloo Da 2"' fontSize={16} fontWeight='400' lineHeight={24} textAlign='center' color='white'>
              Already exists
            </Text>
          </StyledFormValidateMessage>
        }

        <StyledButtonGroup>
          <StyledButtonContainer isvalidate='true'>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledButtonContainer isvalidate={(isValidate && language != '') ? 'true' : 'false'}>
            <Button
              label='Save'
              onClick={handleSave}
              reference={saveRef}
              disabled={!isValidate}
            />
          </StyledButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default LanguageDialog;
