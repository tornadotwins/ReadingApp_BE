import { useState, useEffect } from 'react';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Text from '../Text';
import Button from '../Button/Button';
import { DeleteDialogPropsType } from './types';
import {
  StyledDialog,
  StyledContentMessageContainer,
  StyledContentIcon,
  StyledContentMessage,
  StyledLanguageSelectContainer,
  StyledLabel,
  StyledButtonContainer,
  StyledDeleteButtonContainer,
  StyledButtonGroup,
  StyledDialogTitle,
  StyledDialogContent,
} from './styles';
import SelectBox from '../Select';

function DeleteLanguageDialog(props: DeleteDialogPropsType) {
  const [options, setOptions] = useState<{ label: string, value: string }[]>([]);
  const [deleteLanguage, setDeleteLanguage] = useState<string>('');

  useEffect(() => {
    props.languages.map((language: string) => {
      setOptions([...options, { label: language, value: language }])
    })
  }, [props.languages]);

  const handleDelete = () => {
    props.onDelete();
  };

  const handleCancel = () => {
    // Call the onCancel prop
    props.onCancel();
  };

  return (
    <StyledDialog open={props.isOpen} onClose={handleCancel}>
      <StyledDialogTitle>{props.title}</StyledDialogTitle>

      <StyledDialogContent>
        <StyledContentMessageContainer>
          <StyledContentIcon>
            <WarningAmberIcon />
          </StyledContentIcon>

          <StyledContentMessage>
            <Text fontFamily='"Baloo Da 2"' fontWeight='400' fontSize={16} lineHeight={24} textAlign='center'>
              {props.content}
            </Text>
          </StyledContentMessage>
        </StyledContentMessageContainer>

        <StyledLanguageSelectContainer>
          <StyledLabel>
            <Text fontSize={16} lineHeight={24} fontFamily='"Baloo Da 2"' fontWeight='400'>Delete: </Text>
          </StyledLabel>

          <SelectBox
            label=''
            options={options}
            value={deleteLanguage}
            onChange={(e) => setDeleteLanguage(e.target.value as string)}
          />
        </StyledLanguageSelectContainer>

        <StyledButtonGroup>
          <StyledButtonContainer>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledDeleteButtonContainer>
            <Button label='Delete' onClick={handleDelete} />
          </StyledDeleteButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default DeleteLanguageDialog;
