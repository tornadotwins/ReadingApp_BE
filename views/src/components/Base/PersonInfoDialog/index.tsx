import { useState, useEffect, useRef } from 'react';

import Text from '../Text';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Button from '../Button/Button';

import { PersonInfoDialogType } from './types';
import {
  StyledDialog,
  StyledForm,
  StyledCheckForm,
  StyledButtonContainer,
  StyledButtonGroup,
  StyledDialogTitle,
  StyledDialogContent,
} from './styles';

function PersonInfoDialog(props: PersonInfoDialogType) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  console.log(props.user)

  useEffect(() => {
    if (props.user) {
      setUsername(props.user?.username || '');
      setPassword(props.user?.password || '');
      setIsAdmin(props.user?.isAdmin || false);
    } else {
      // Reset form when creating a new user
      setUsername('');
      setPassword('');
      setIsAdmin(false);
    }
  }, [props.user, props.isOpen]);

  const passwordRef = useRef<HTMLInputElement>(null);
  const isAdminRef = useRef<HTMLInputElement>(null);
  const saveRef = useRef<HTMLButtonElement>(null);

  const focusPassword = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      passwordRef.current?.focus();
    }
  };

  const focusIsAdmin = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      isAdminRef.current?.focus();
    }
  };

  const focusSaveBtn = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      saveRef.current?.click();
    }
  };

  const handleSave = () => {
    // Add validation
    if (!username.trim()) {
      return; // Add appropriate error message
    }

    if (!props.user && !password.trim()) {
      return; // Add appropriate error message for new users
    }

    props.onSave(username, password, isAdmin);
  };

  const handleCancel = () => {
    // Reset form state
    setUsername('');
    setPassword('');
    setIsAdmin(false);

    // Call the onCancel prop
    props.onCancel();
  };

  return (
    <StyledDialog open={props.isOpen} onClose={handleCancel}>
      <StyledDialogTitle>Person</StyledDialogTitle>

      <StyledDialogContent>
        <StyledForm>
          <Text
            fontFamily='"Baloo Da 2"'
            fontSize={16}
            fontWeight='400'
            lineHeight={24}
            textAlign='center'
          >
            Username:
          </Text>
          <Input
            value={username}
            onKeyDown={focusPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
        </StyledForm>

        <StyledForm>
          <Text
            fontFamily='"Baloo Da 2"'
            fontSize={16}
            fontWeight='400'
            lineHeight={24}
            textAlign='center'
          >
            Password:
          </Text>
          <Input
            value={password}
            type='password'
            reference={passwordRef}
            onKeyDown={focusIsAdmin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </StyledForm>

        <StyledCheckForm>
          <Text
            fontFamily='"Baloo Da 2"'
            fontSize={16}
            fontWeight='400'
            lineHeight={24}
            textAlign='center'
          >
            Is Admin:
          </Text>
          <Checkbox
            checked={isAdmin}
            label=''
            reference={isAdminRef}
            onKeyDown={focusSaveBtn}
            onChange={() => setIsAdmin(!isAdmin)}
          />
        </StyledCheckForm>

        <StyledButtonGroup>
          <StyledButtonContainer>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledButtonContainer>
            <Button label='Save' onClick={handleSave} reference={saveRef} />
          </StyledButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default PersonInfoDialog;
