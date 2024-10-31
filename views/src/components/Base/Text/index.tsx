import { StyledTextContainer } from './styles';
import { TextProps } from "./types";

function Text({
  children,
  fontWeight = '400',
  fontSize = 16,
  fontStyle = 'normal',
  fontFamily,
  lineHeight = 24,
  textAlign,
  color,
  hasUnderline,
}: TextProps) {

  return (
    <StyledTextContainer
      style={{
        fontWeight,
        fontSize,
        fontStyle,
        fontFamily,
        lineHeight: lineHeight + 'px',
        textAlign,
        color,
        textDecoration: hasUnderline ? 'underline' : 'none'
      }}
    >
      {children}
    </StyledTextContainer>
  )
}

export default Text;
