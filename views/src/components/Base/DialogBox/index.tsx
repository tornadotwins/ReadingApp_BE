import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { DialogBoxProps } from './types';
import { StyledDialogBox, StyledCloseIcon } from './styled';
import Text from '../Text';

function DialogBox(props: DialogBoxProps) {
  return (
    <StyledDialogBox>
      <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <StyledCloseIcon onClick={props.onClose}>
          <CloseIcon />
        </StyledCloseIcon>
        <DialogTitle id="title">{<Text>{props.title}</Text>}</DialogTitle>
        <DialogContent>
          <DialogContentText id="description">{props.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onDisagree}>
            <Text fontSize={12}>
              {props.disagree}
            </Text>
          </Button>
          <Button onClick={props.onAgree} autoFocus>
            <Text fontSize={12}>
              {props.agree}
            </Text>
          </Button>
        </DialogActions>
      </Dialog>
    </StyledDialogBox>
  );
}

export default DialogBox;
