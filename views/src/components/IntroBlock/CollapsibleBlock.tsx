import { Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledSubTitleContainer
} from "./styles";
import { CollapsibleBlockPropsType } from "./types";

function CollapsibleBlock(props: CollapsibleBlockPropsType) {
  return (
    <StyledContainer>
      <BlockHeader
        title='Collapsible Block'
        blockIndex={props.blockIndex}
        
        onDelete={props.onDelete}
        onMoveUp={props.onMoveUp}
        onMoveDown={props.onMoveDown}
      />

      <StyledSubTitleContainer>
        <Text
          color='#155D74'
          fontFamily='Inter'
          fontSize={16}
          lineHeight={24}
          fontWeight='bold'
        >
          title:
        </Text>
      </StyledSubTitleContainer>

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
          <Input value="hello" onChange={() => { }} disable />

        </StyledInputContainer>
      </StyledContentRow>

      <StyledSubTitleContainer>
        <Text
          color='#155D74'
          fontFamily='Inter'
          fontSize={16}
          lineHeight={24}
          fontWeight='bold'
        >
          Content Items:
        </Text>
      </StyledSubTitleContainer>

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Alt Text:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Alt Text"
            value={'props.hi'}
            onChange={() => { }}
          />
        </StyledInputContainer>
      </StyledContentRow>
    </StyledContainer>
  );
}

export default CollapsibleBlock;
