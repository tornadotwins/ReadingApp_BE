import { StyledCheckbox, StyledFormControlLabel } from './styled';
import { CheckboxProps } from './types';
import Text from '../Text';

function Checkbox({ label, checked, onChange }: CheckboxProps) {

  return (
    <StyledFormControlLabel
      control={<StyledCheckbox checked={checked} bordercolor='#155D74' onChange={onChange} />}
      label={<Text color='#155D74' >{label}</Text>}
      style={{ color: '#155D74' }}
      bordercolor='#155D74'
    />
  );
}

export default Checkbox;
