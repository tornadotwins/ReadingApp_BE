import { InputContainer, InputIcon, InputLabelContainer, StyledCheckbox } from './styled';
import { InputComponentProps } from './types';
import Text from '../Text';

function IconCheckbox({ imgSrc, label, value, size, onChange }: InputComponentProps) {
  return (
    <InputContainer>
      <InputLabelContainer>
        <InputIcon src={imgSrc} />
        <Text>{label}</Text>
      </InputLabelContainer>

      <StyledCheckbox
        value={value}
        size={size == 'small' ? 'small' : 'medium'}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default IconCheckbox;
