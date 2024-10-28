import { useState } from 'react';
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
  // State to keep track of whether the checkbox is checked
  const [isChecked, setIsChecked] = useState(props.checked || false);

  // Handle checkbox click
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checked state
    if (props.onChange) {
      props.onChange(!isChecked);
    }
  };

  return (
    <StyledCheckBoxContainer>
      {props.label && (
        <StyledCheckBoxLabel>
          <Text fontFamily='"Baloo Da 2"' fontSize={16} lineHeight={24} textAlign='center'>
            {props.label}
          </Text>
        </StyledCheckBoxLabel>
      )}

      <StyledCheckBox onClick={handleCheckboxChange}>
        <StyledCheckBoxImgContainer>
          {isChecked && <StyledCheckBoxImg src={Images.icon_check} />}
        </StyledCheckBoxImgContainer>
      </StyledCheckBox>
    </StyledCheckBoxContainer>
  );
}

export default Checkbox;
