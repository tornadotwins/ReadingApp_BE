import { useContext } from 'react';
import { StyledContainer } from './styled';
import { PageContainerProps } from './types';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';

function PageContainer({ children }: PageContainerProps) {
  const { theme } = useContext(SettingsContext);
  const { backgroundColor, textColor } = getColorsByTheme(theme);

  return (
    <StyledContainer style={{backgroundColor, color: textColor}}>
      {children}
    </StyledContainer>
  );
}

export default PageContainer;
