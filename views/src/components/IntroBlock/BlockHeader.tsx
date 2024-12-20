import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Text } from "../Base";
import {
  StyledBlockHeaderContainer,
  StyledBlockControlContainer,
  StyledBlockControlButtonContainer,

} from "./styles";
import { BlockHeaderPropsType } from "./types";

function BlockHeader(props: BlockHeaderPropsType) {
  return (
    <StyledBlockHeaderContainer>
      <Text
        color='#155D74'
        fontFamily='Inter'
        fontSize={16}
        lineHeight={24}
        fontWeight='500'
      >
        {props.title}
      </Text>

      <StyledBlockControlContainer>
        <StyledBlockControlButtonContainer>
          <ArrowUpwardIcon />
        </StyledBlockControlButtonContainer>

        <StyledBlockControlButtonContainer>
          <ArrowDownwardIcon />
        </StyledBlockControlButtonContainer>

        <StyledBlockControlButtonContainer onClick={props.onDelete}>
          <Text>Delete</Text>
        </StyledBlockControlButtonContainer>
      </StyledBlockControlContainer>
    </StyledBlockHeaderContainer>
  )
}

export default BlockHeader;
