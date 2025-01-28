import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Text } from "../Base";

import {
  StyledJourneyBlockHeaderContainer,
  StyledJourneyBlockControlContainer,
  StyledJourneyBlockControlButtonContainer,
} from './styles';
import { JourneyBlockHeaderPropsType } from './types';

function JourneyBlockHeader(props: JourneyBlockHeaderPropsType) {
  return (
    <StyledJourneyBlockHeaderContainer>
      <Text
        color='#155D74'
        fontFamily='Inter'
        fontSize={16}
        lineHeight={24}
        fontWeight='500'
      >
        {props.title}
      </Text>

      <StyledJourneyBlockControlContainer>
        <StyledJourneyBlockControlButtonContainer
          isdisabled={props.disableMoveUp ? 'true' : 'false'}
          onClick={() => props.disableMoveUp ? {} : props.onMoveUp(props.blockIndex)}
        >
          <ArrowUpwardIcon />
        </StyledJourneyBlockControlButtonContainer>

        <StyledJourneyBlockControlButtonContainer
          isdisabled={props.disableMoveDown ? 'true' : 'false'}
          onClick={() => props.disableMoveDown ? {} : props.onMoveDown(props.blockIndex)}
        >
          <ArrowDownwardIcon />
        </StyledJourneyBlockControlButtonContainer>

        <StyledJourneyBlockControlButtonContainer
          isdisabled={props.disableDelete ? 'true' : 'false'}
          onClick={() => props.disableDelete ? {} : props.onDelete()}
        >
          <Text>Delete</Text>
        </StyledJourneyBlockControlButtonContainer>
      </StyledJourneyBlockControlContainer>
    </StyledJourneyBlockHeaderContainer>
  )
}

export default JourneyBlockHeader;
