import { NavbarProps } from './types';
import Text from '../Text';
import { StyledTitleContainer, StyledTitleText, StyledTitleIcon } from './styled';
import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';

function Navbar({ title, icon }: NavbarProps) {
  const { theme } = useContext(SettingsContext);
  const { logoTextColor } = getColorsByTheme(theme);

  return (
    <StyledTitleContainer>
      {icon && <StyledTitleIcon src={icon} />}
      <StyledTitleText>
        <Text
          fontSize={36}
          fontFamily="Buenard"
          fontWeight={'700'}
          color={logoTextColor}
          lineHeight={47}
        >
          {title}
        </Text>
      </StyledTitleText>
    </StyledTitleContainer>
  );
}

export default Navbar;
