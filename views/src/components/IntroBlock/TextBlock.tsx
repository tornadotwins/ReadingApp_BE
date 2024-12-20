import { Text, TextArea } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer
} from "./styles";
import { TextBlockPropsType } from "./types";

function TitleBlock(props: TextBlockPropsType) {
  return (
    <StyledContainer>
      <BlockHeader
        title='Text Block'
        onDelete={props.onDelete}
      />

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            {props.language}
          </Text>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Text:
          </Text>
        </StyledLabel>

        <StyledInputContainer hastextarea="true">
          <TextArea
            placeholder="Enter Text"
            value={'hello'}
            minLength={3}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onInputChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>
    </StyledContainer>
  );
}

export default TitleBlock;