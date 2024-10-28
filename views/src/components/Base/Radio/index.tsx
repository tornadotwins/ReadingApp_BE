import { useContext, useState } from 'react';
import { Radio } from '@mui/material';

import { StyledRadioGroup, StyledFormControlLabel } from './styled';
import { RadioProps } from './types';
import Text from '../Text';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';

function Radios({ options, value, onChange }: RadioProps) {
  const [defaultValue] = useState(value);
  const { theme } = useContext(SettingsContext);
  const { mainBGColor, altTextColor } = getColorsByTheme(theme);

  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <StyledRadioGroup
      aria-label="options"
      name="radio-buttons-group"
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <StyledFormControlLabel
          value={option.value}
          control={<Radio />}
          label={<Text color={altTextColor}>{option.label}</Text>}
          disabled={option.disable ? true : false}
          key={index}
          style={{ backgroundColor: mainBGColor, color: altTextColor }}
        />
      ))}
    </StyledRadioGroup>
  );
}

export default Radios;
