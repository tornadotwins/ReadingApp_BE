import { Text } from "../Base";
import { StyledImagePreview, StyledPreviewCollapsibleBlockContainer } from "./styles";

import { CollapsibleBlockPropsType } from "./types";
import { AccordionPanel } from "../Base";

function PreviewCollapsibleBlock(props: CollapsibleBlockPropsType) {
  return (
    <StyledPreviewCollapsibleBlockContainer>
      <AccordionPanel
        label={props.value?.title?.[props.language] || ''}
        detail={props.value?.content?.map((contentItem, index) =>
          contentItem.isTitle ?
            <Text key={index} color="#474747" fontSize={16} fontWeight="700">
              {contentItem?.[props.language]}
            </Text> :
            contentItem.url ?
              <StyledImagePreview key={index}>
                <img src={contentItem.url} />
              </StyledImagePreview> :
              <Text key={index} color="#474747" fontSize={16} fontWeight="500">
                {contentItem?.[props.language]}
              </Text>
        )}
      />
    </StyledPreviewCollapsibleBlockContainer>
  )
}

export default PreviewCollapsibleBlock;
