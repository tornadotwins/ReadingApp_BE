import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import Text from '../Text';
import Button from '../Button/Button';
import { DeleteDialogPropsType } from './types';
import {
  StyledDialog,
  StyledContentMessageContainer,
  StyledContentIcon,
  StyledContentMessage,
  StyledButtonContainer,
  StyledDeleteButtonContainer,
  StyledButtonGroup,
  StyledDialogTitle,
  StyledDialogContent,
} from './styles';

function DeleteDialog(props: DeleteDialogPropsType) {

  const handleSave = () => {
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

        <StyledButtonGroup>
          <StyledButtonContainer>
            <Button label='Cancel' onClick={handleCancel} />
          </StyledButtonContainer>

          <StyledDeleteButtonContainer>
            <Button label='Delete' onClick={() => handleSave} />
          </StyledDeleteButtonContainer>
        </StyledButtonGroup>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default DeleteDialog;