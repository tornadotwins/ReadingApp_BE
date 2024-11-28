import { useRef } from 'react';

import Button from '../Button/Button';

import { DialogPropsType } from './types';
import {
  StyledDialog,
  StyledButtonContainer,
  StyledDialogTitle,
  StyledDialogContent,
  StyledImageContainer,
  StyledImage,
} from './styles';

function ImageDialog(props: DialogPropsType) {
  const saveRef = useRef<HTMLButtonElement>(null);

  return (
    <StyledDialog open={props.isOpen} onClose={props.onCancel}>
      <StyledDialogTitle>Image</StyledDialogTitle>

      <StyledDialogContent>
        <StyledImageContainer>
          <StyledImage src={props.image} />
        </StyledImageContainer>
        <StyledButtonContainer>
          <Button
            label={'OK'}
            onClick={props.onCancel}
            reference={saveRef}
          />
        </StyledButtonContainer>
      </StyledDialogContent>
    </StyledDialog>
  );
}

export default ImageDialog;
