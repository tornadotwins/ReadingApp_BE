import { useState, useRef, useEffect } from 'react';

import Button from '../Button/Button';
import Input from '../Input';
import Text from '../Text';

import { DeleteConfirmDialogPropsType } from './types';
import {
  StyledDialog,
  StyledForm,
  StyledConfirmMessageContainer,
  StyledButtonContainer,
  StyledButtonGroup,
  StyledDialogTitle,
  StyledDialogContent,
  StyledDeleteButtonContainer,
} from './styles';

function DeleteConfirmDialog(props: DeleteConfirmDialogPropsType) {
  const [confirmText, setConfirmText] = useState('');
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    if (confirmText == "DELETE") {
      setIsDisable(false);
    } else {
      setIsDisable(true)
    }
  }, [confirmText]);

  const confirmRef = useRef<HTMLButtonElement>(null);

  const focusConfirmButton = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      confirmRef.current?.click();
    }
  };

  const handleDeleteConfirm = () => {
    props.onConfirm();
  };

  const handleCancel = () => {
    // Reset form state
    setConfirmText('');

    // Call the onCancel prop
    props.onCancel();
  };

  return (
    <StyledDialog open={props.isOpen} onClose={handleCancel}>
      <StyledDialogTitle>Confirmation needed</StyledDialogTitle>

      <StyledDialogContent>
        <StyledConfirmMessageContainer>
          <Text fontFamily='"Baloo Da 2"' fontSize={16} lineHeight={24} textAlign='center'>
            {'Type "DELETE" to confirm: '}
          </Text>
        </StyledConfirmMessageContainer>

        <StyledForm>
          <Input
            value={confirmText}
            onKeyDown={focusConfirmButton}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmText(e.target.value)}
          />
        </StyledForm>

        <StyledButtonGroup>
          <StyledButtonContainer>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledDeleteButtonContainer isdisable={isDisable ? 'true' : 'false'}>
            <Button
              label='Delete forever'
              onClick={handleDeleteConfirm}
              reference={confirmRef}
              disabled={isDisable}
            />
          </StyledDeleteButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default DeleteConfirmDialog;
