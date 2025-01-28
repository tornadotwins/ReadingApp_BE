import { getLanguageFromLanguageCode } from "@/utils";
import { Button, Input, Text } from "../Base";
import JourneyBlockHeader from "./JourneyBlockHeader";
import { StyledContentRow, StyledInputContainer, StyledJourneyBlockContainer, StyledLabel, StyledOpenButtonContainer } from "./styles";
import { JourneyBlockPropsType } from "./types";

function JourneyBlock(props: JourneyBlockPropsType) {
  return (
    <StyledJourneyBlockContainer>
      <JourneyBlockHeader
        title={props.isArticle ? 'Article Block' : 'Directory Block'}
        blockIndex={props.blockIndex}

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
            {getLanguageFromLanguageCode(props.language) + ' Title:'}
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Title"
            value={props.title}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onTitleChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Series Title:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Series Title"
            value={props.seriesTitle}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onTitleChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>

      <StyledContentRow>
        <StyledLabel>
          <Text
            color='#155D74'
            fontFamily='Inter'
            fontSize={16}
            lineHeight={24}
            fontWeight='500'
          >
            Series Logo:
          </Text>
        </StyledLabel>

        <StyledInputContainer>
          <Input
            type="text"
            placeholder="Enter Title"
            value={props.title}

            onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.onTitleChange(e.target.value)}
          />
        </StyledInputContainer>
      </StyledContentRow>

      <StyledOpenButtonContainer>
        <Button
          label={props.isArticle ? 'Open Article' : 'Open Directory'}

          onClick={props.onOpen}
        />
      </StyledOpenButtonContainer>
    </StyledJourneyBlockContainer>
  )
}

export default JourneyBlock;
