import { InputLabel } from '@mui/material';

import {
  StyledFormControl,
  StyledSelect,
  StyledExpandMore,
  StyledMenuItem,
  MenuProps,
} from './styled';
import { SelectBoxProps } from './types';
import Text from '../Text';

function SelectBox(props: SelectBoxProps) {
  return (
    <StyledFormControl variant="outlined">
      <InputLabel>{props.label}</InputLabel>
      <StyledSelect
        value={props.value}
        IconComponent={() => <StyledExpandMore style={{ color: props.textColor }} />}
        MenuProps={MenuProps}
        disabled={props.disabled}
        sx={{ backgroundColor: props.backgroundColor, color: props.textColor }}
        style={{ backgroundColor: props.backgroundColor, borderColor: props.textColor }}
        onChange={(e: any) => {
          props.onChange(e);
        }}
      >
        {props.options.map((option) => (
          <StyledMenuItem
            key={option.value}
            value={option.value}
            style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
            dividelinecolor={props.textColor || '#17637D'}
          >
            <Text color={props.textColor}>{option.label}</Text>
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
}

export default SelectBox;
