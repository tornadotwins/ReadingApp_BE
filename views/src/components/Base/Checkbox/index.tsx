import { useState, useEffect } from 'react';
import {
  StyledCheckBoxContainer,
  StyledCheckBoxLabel,
  StyledCheckBox,
  StyledCheckBoxImgContainer,
  StyledCheckBoxImg
} from './styled';
import { CheckboxProps } from './types';
import Text from '../Text';
import Images from '@/config/images';

function Checkbox(props: CheckboxProps) {
  // Remove local state and use props directly
  const [isChecked, setIsChecked] = useState(props.checked || false);

  // Add useEffect to sync with prop changes
  useEffect(() => {
    setIsChecked(props.checked || false);
  }, [props.checked]);

  // Handle checkbox click
  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };

  return (
    <StyledCheckBoxContainer>
      {props.label && (
        <StyledCheckBoxLabel>
          <Text
            fontFamily='"Baloo Da 2"'
            fontSize={16}
            lineHeight={24}
            textAlign='center'
          >
            {props.label}
          </Text>
        </StyledCheckBoxLabel>
      )}

      <StyledCheckBox
        onClick={handleCheckboxChange}
        ref={props.reference}
      >
        <StyledCheckBoxImgContainer>
          {isChecked && <StyledCheckBoxImg src={Images.icon_check} />}
        </StyledCheckBoxImgContainer>
      </StyledCheckBox>
    </StyledCheckBoxContainer>
  );
}

export default Checkbox;