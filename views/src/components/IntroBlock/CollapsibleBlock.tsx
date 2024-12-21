import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Button, Input, Text } from "../Base";
import BlockHeader from "./BlockHeader";
import {
  StyledContainer,
  StyledContentRow,
  StyledLabel,
  StyledInputContainer,
  StyledSubTitleContainer,
  StyledCollapsibleButtonContainer,
  StyledCollapsibleButtonGroup,
  StyledCollapsibleAddButtonContainer,
  StyledCollapsibleControlButtonContainer,
  StyledBlockControlContainer,
  StyledBlockControlButtonContainer,
} from "./styles";
import { CollapsibleBlockPropsType } from "./types";

function CollapsibleBlock(props: CollapsibleBlockPropsType) {
  const _renderHeader = () => {
    return (
      <BlockHeader
        title='Collapsible Block'
        blockIndex={props.blockIndex}

        onDelete={props.onDelete}
        onMoveUp={props.onMoveUp}
        onMoveDown={props.onMoveDown}
      />
    )
  }

  const _renderSubTitle = (title: string) => {
    return (
      <StyledSubTitleContainer>
        <Text
          color='#155D74'
          fontFamily='Inter'
          fontSize={16}
          lineHeight={24}
          fontWeight='bold'
        >
          {title}
        </Text>
      </StyledSubTitleContainer>
    )
  }

  const _renderButtonGroup = () => {
    return (
      <StyledCollapsibleButtonGroup>
        <StyledCollapsibleAddButtonContainer>
          <StyledCollapsibleButtonContainer>
            <Button
              label="Add Text"
              onClick={() => { }}
            />
          </StyledCollapsibleButtonContainer>

          <StyledCollapsibleButtonContainer>
            <Button
              label="Add Image"
              onClick={() => { }}
            />
          </StyledCollapsibleButtonContainer>
        </StyledCollapsibleAddButtonContainer>

        <StyledCollapsibleControlButtonContainer>
          <StyledBlockControlContainer>
            <StyledBlockControlButtonContainer onClick={() => props.onMoveUp(props.blockIndex)}>
              <ArrowUpwardIcon />
            </StyledBlockControlButtonContainer>

            <StyledBlockControlButtonContainer onClick={() => props.onMoveDown(props.blockIndex)}>
              <ArrowDownwardIcon />
            </StyledBlockControlButtonContainer>

            <StyledBlockControlButtonContainer onClick={props.onDelete}>
              <Text>Delete</Text>
            </StyledBlockControlButtonContainer>
          </StyledBlockControlContainer>
        </StyledCollapsibleControlButtonContainer>
      </StyledCollapsibleButtonGroup>
    )
  }

  return (
    <StyledContainer>
      {_renderHeader()}

      {_renderSubTitle('Title: ')}

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
            value="hello"

            onChange={() => { }}
          />
        </StyledInputContainer>
      </StyledContentRow>

      {_renderSubTitle('Content Items: ')}

      {_renderButtonGroup()}

      
    </StyledContainer>
  );
}

export default CollapsibleBlock;
