import { useContext } from 'react';
import { InputContainer, InputIcon, InputLabelContainer, StyledInput, ErrorText } from './styled';
import Text from '../Text';
import { InputComponentProps } from './types';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';

function IconInput(props: InputComponentProps) {
  const { theme } = useContext(SettingsContext);
  const { textColor, altTextColor } = getColorsByTheme(theme);

  return (
    <>
      <InputContainer>
        <InputLabelContainer>
          <InputIcon src={props.imgSrc} />
          <Text color={altTextColor}>{props.label}</Text>
        </InputLabelContainer>

        <StyledInput
          value={props.value}
          size={props.size == 'small' ? 'small' : 'medium'}
          type={props.type}
          style={{ color: textColor }}
          bordercolor={altTextColor}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </InputContainer>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </>
  );
}

export default IconInput;
