import { useContext } from 'react';
import { StyledContainer, StyledIcon } from './styled';
import { CustomToastProps } from './types';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';
import Text from '../Text';

function CustomToast({ text, offset, visible }: CustomToastProps) {
  const { theme } = useContext(SettingsContext);
  const { buttonColor, buttonTextColor } = getColorsByTheme(theme);

  let icon;

  return (
    <StyledContainer
      style={{
        backgroundColor: buttonColor,
        animation: visible ? 'customerEnter 0.3s ease-out' : 'customerLeave 0.3s ease-in forwards',
        bottom: offset ? offset + 'px' : '20px'
      }}
    >
      {icon && <StyledIcon src={icon} />}
      <Text fontFamily='Inter' fontSize={16} color={buttonTextColor} >{text}</Text>
    </StyledContainer>
  );
}

export default CustomToast;
