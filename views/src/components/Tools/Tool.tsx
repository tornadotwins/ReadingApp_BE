import { ToolType } from "./types";
import { ToolContainer, StyledToolIconContainer, StyledToolIcon } from './styles';
import Images from "@/config/images";
import { Text } from "../Base";

const Tool = (props: ToolType) => {
  return (
    <ToolContainer onClick={() => props.onClick}>
      <StyledToolIconContainer>
        <StyledToolIcon src={Images.icon_tool} />
      </StyledToolIconContainer>

      <Text fontFamily="'Baloo Da 2'" fontWeight="700" fontSize={16} lineHeight={24} color="white">{props.toolName}</Text>
    </ToolContainer>
  )
}

export default Tool;