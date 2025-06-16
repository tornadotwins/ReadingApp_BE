import { Tooltip } from '@mui/material';
import Text from '../Text';
import { StyledButton } from './styled';
import { ButtonProps } from './types';

function Button(props: ButtonProps) {
  return (
    <Tooltip title={props.tooltip} placement='top' arrow disableInteractive>
      <span>
        <StyledButton
          style={props.style}
          disabled={props.disabled}
          startIcon={props.icon}
          ref={props.reference}

          onClick={() => {
            if (!props.disabled) {
              props.onClick();
            }
          }}
        >
          <Text fontFamily='"Baloo Da 2"' fontWeight='500' fontSize={16} lineHeight={24} color='#474747'>
            {props.label}
          </Text>
        </StyledButton>
      </span>
    </Tooltip>
  );
}

export default Button;
