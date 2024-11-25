import {
  StyledSwitch,
  StyledSliderBarLabel,
  StyledSwitchContainer,
  StyledSwitchMainContainer,
} from './styled';
import { SwitchProps } from './types';
import Text from '../Text';

function Switch(props: SwitchProps) {
  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.checked); // Call the parent onChange handler if provided
    }
  };

  return (
    <StyledSwitchContainer>
      <StyledSliderBarLabel>
        <Text fontFamily="Inter" color='#155D74'>{props.label}</Text>
      </StyledSliderBarLabel>
      <StyledSwitchMainContainer>
        <StyledSwitch
          checked={props.value}
          onChange={handleSwitch}
          disabled={props.disable}
          style={{ backgroundColor: '#FFF', color: '#155D74' }}
        />
      </StyledSwitchMainContainer>
    </StyledSwitchContainer>
  );
}

export default Switch;
