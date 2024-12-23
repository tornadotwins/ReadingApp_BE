import { Text } from "../Base";
import { StyledImagePreview, StyledPreviewCollapsibleBlockContainer } from "./styles";

import { CollapsibleBlockPropsType } from "./types";
import { AccordionPanel } from "../Base";

function PreviewCollapsibleBlock(props: CollapsibleBlockPropsType) {
  return (
    <StyledPreviewCollapsibleBlockContainer>
      <AccordionPanel
        label={props.title || props.value?.title?.[props.language] || ''}
        detail={(props.contents && props.contents.length > 0 ? props.contents : props.value?.content)?.map((contentItem, index) =>
          contentItem?.isTitle ?
            <Text key={index} color="#474747" fontSize={16} fontWeight="700" fontFamily="Inter">
              {contentItem?.[props.language]}
            </Text> :
            contentItem?.url ?
              <StyledImagePreview key={index}>
                <img src={contentItem?.url} />
              </StyledImagePreview> :
              <Text key={index} color="#474747" fontSize={16} fontWeight="500" fontFamily="Inter">
                {contentItem?.[props.language]}
              </Text>
        )}
      />
    </StyledPreviewCollapsibleBlockContainer>
  )
}

export default PreviewCollapsibleBlock;
