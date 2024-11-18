import { Text } from '../Base';
import {
  StyledToolsContainer,
} from './styles';
import Tool from './Tool';
import { ToolsPropsType, ToolType } from './types';

const Tools = (props: ToolsPropsType) => {
  return (
    <StyledToolsContainer>
      <Text fontFamily='"Baloo Da 2"' fontWeight='700' fontSize={16} lineHeight={24}>Tools: </Text>

      {
        props.tools.map((tool: ToolType, index: number) =>
          <Tool toolName={tool.toolName} onClick={tool.onClick} key={index} />
        )
      }
    </StyledToolsContainer>
  )
}

export default Tools;