import { useState } from "react";

import { StyledPreviewCollapsibleBlockContainer } from "./styles";

import { CollapsibleBlockPropsType } from "./types";
import { BlockType } from "@/pages/IntroOverview/types";
import { AccordionPanel } from "../Base";

function PreviewCollapsibleBlock (props: CollapsibleBlockPropsType) {
  const [blocks, setBlocks] = useState<BlockType[]>([]);

  return (
    <StyledPreviewCollapsibleBlockContainer>
      <AccordionPanel
        summaryTitle={(props.value?.title || '') as string}
        label=""
        detail={blocks[1]?.value}
      />
    </StyledPreviewCollapsibleBlockContainer>
  )
}

export default PreviewCollapsibleBlock;
