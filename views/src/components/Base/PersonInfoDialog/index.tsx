import { useState } from 'react';

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

  const handleSave = () => {
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
            onChange={() => setIsAdmin(!isAdmin)}
          />
        </StyledCheckForm>

        <StyledButtonGroup>
          <StyledButtonContainer>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledButtonContainer>
            <Button label='Save' onClick={handleSave} />
          </StyledButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default PersonInfoDialog;