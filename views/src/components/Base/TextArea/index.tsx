import { TextareaAutosize } from '@mui/base/TextareaAutosize';

import Text from '../Text';

import { StyledInputContainer, ErrorText } from "./styles";
import { TextAreaType } from "./types";

function TextArea(props: TextAreaType) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (props.onKeyDown) {
      props.onKeyDown(event as React.KeyboardEvent<HTMLInputElement>);
    }
  };

  return (
    <>
      <StyledInputContainer>
        {props.label &&
          <Text fontFamily='"Baloo Da 2"' fontWeight="400" fontSize={16} lineHeight={24} textAlign="center">
            {props.label}
          </Text>
        }
        <TextareaAutosize
          required={props.required}
          type={props.type}
          value={props.value}
          minRows={props.minLength}
          inputref={props.reference}
          placeholder={props.placeholder}
          
          onKeyDown={handleKeyDown}
          onChange={props.onChange}
        />
      </StyledInputContainer>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </>
  )
}

export default TextArea;