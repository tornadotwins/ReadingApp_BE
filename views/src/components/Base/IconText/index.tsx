import { useContext } from 'react';

import {
  StyledIconTextContainer,
  StyledLeftIcon,
  StyledMainIconText,
  StyledRightIcon,
  StyledRightIconContainer,
} from './styled';
import Text from '../Text';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';
import { IconTextProps } from './types';

function IconText(props: IconTextProps) {
  const { theme } = useContext(SettingsContext);
  const { logoTextColor } = getColorsByTheme(theme);

  return (
    <StyledIconTextContainer>
      {props.rightIcon ? (
        <StyledMainIconText>
          <StyledLeftIcon src={props.leftIcon} hasRightIcon={props.rightIcon? true : false} />
          <Text color={logoTextColor}>{props.text}</Text>
        </StyledMainIconText>
      ) : (
        <StyledMainIconText>
          <StyledRightIconContainer marginRight={'16px'}>
            <StyledRightIcon src={props.leftIcon} />
          </StyledRightIconContainer>
          <Text color={logoTextColor}>{props.text}</Text>
        </StyledMainIconText>
      )}

      {props.rightIcon && (
        <StyledRightIconContainer>
          <StyledRightIcon src={props.rightIcon} />
        </StyledRightIconContainer>
      )}
    </StyledIconTextContainer>
  );
}

export default IconText;
