import { TextField } from "@mui/material";

import Text from '../Text';

import { StyledInputContainer, ErrorText } from "./styles";
import { InputType } from "./types";

function Input(props: InputType) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.onKeyDown) {
      props.onKeyDown(event as React.KeyboardEvent<HTMLInputElement>);
    }
  };

  return (
    <>
      <StyledInputContainer>
        {props.label && <Text fontFamily='"Baloo Da 2"' fontWeight="400" fontSize={16} lineHeight={24} textAlign="center">{props.label}</Text>}
        <TextField
          required={props.required}
          type={props.type}
          value={props.value}
          inputRef={props.reference}
          placeholder={props.placeholder}
          onKeyDown={handleKeyDown}
          onChange={props.onChange}
        />
      </StyledInputContainer>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </>
  )
}

export default Input;