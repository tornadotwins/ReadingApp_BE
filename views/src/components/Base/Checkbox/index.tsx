import { StyledCheckbox, StyledFormControlLabel } from './styled';
import { CheckboxProps } from './types';
import Text from '../Text';

function Checkbox(props: CheckboxProps) {

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (props.onKeyDown) {
      props.onKeyDown(event as React.KeyboardEvent<HTMLLabelElement>);
    }
  };

  return (
    <StyledFormControlLabel
      control={<StyledCheckbox checked={props.checked} bordercolor='#155D74' onChange={props.onChange} />}
      label={<Text color='#155D74' >{props.label}</Text>}
      style={{ color: '#155D74' }}
      bordercolor='#155D74'
      onKeyDown={handleKeyDown}
    />
  );
}

export default Checkbox;
