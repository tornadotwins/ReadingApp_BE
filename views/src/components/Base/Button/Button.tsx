import Text from '../Text';
import { StyledButton } from './styled';
import { ButtonProps } from './types';

function Button({
  label,
  disabled = false,
  style,
  reference,
  onClick,
}: ButtonProps) {

  return (
    <StyledButton
      style={style}
      disabled={disabled}
      ref={reference}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
    >
      <Text fontFamily='"Baloo Da 2"' fontWeight='500' fontSize={16} lineHeight={24} color='#474747'>
        {label}
      </Text>
    </StyledButton>
  );
}

export default Button;
