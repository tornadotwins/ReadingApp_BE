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
import { RoleType } from '@/pages/types';

function DeleteLanguageDialog(props: DeleteDialogPropsType) {
  const [options, setOptions] = useState<{ label: string, value: string }[]>([]);
  const [deleteLanguage, setDeleteLanguage] = useState<string>('');

  useEffect(() => {
    // Use a functional update to ensure options accumulate correctly
    setOptions(() =>
      props.roles.map((role: RoleType) => ({
        label: role.language,
        value: role.language,
      }))
    );

    // Reset deleteLanguage when open dialog
    if (props.isOpen && props.roles.length > 0) {
      setDeleteLanguage(props.roles[0].language)
    }
  }, [props.roles, props.isOpen]);

  const handleDelete = () => {
    deleteLanguage && props.onDelete(deleteLanguage);
  };

  const handleCancel = () => {
    setOptions([]);
    setDeleteLanguage('');
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
