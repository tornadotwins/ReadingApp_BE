import { Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer
} from "./styles";
import { TitleBlockPropsType } from "./types";

function TitleBlock(props: TitleBlockPropsType) {
  return (
    <StyledContainer>
      <BlockHeader
        title='Title Block'
        blockIndex={props.blockIndex}
        disableDelete={props.disableDelete}
        disableMoveDown={props.disableMovedown}
        disableMoveUp={props.disableMoveUp}

        onDelete={props.onDelete}
        onMoveUp={props.onMoveUp}
        onMoveDown={props.onMoveDown}
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
            Title:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Title"
            value={props.inputVal}
            
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onInputChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>
    </StyledContainer>
  );
}

export default TitleBlock;