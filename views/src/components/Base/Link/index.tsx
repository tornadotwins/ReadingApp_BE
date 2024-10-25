import StyledLink from './styled';
import { LinkProps } from './types';
import Text from '../Text';
import { useContext } from 'react';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';

function Link({ label, color = 'default', onClick }: LinkProps) {
  const { theme } = useContext(SettingsContext);
  const { altTextColor } = getColorsByTheme(theme);

  return (
    <StyledLink color={color} onClick={onClick}>
      <Text color={altTextColor}>{label}</Text>
    </StyledLink>
  );
}

export default Link;
