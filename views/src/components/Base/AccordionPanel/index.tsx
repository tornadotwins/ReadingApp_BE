import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { StyledAccordionPanel, StyledLabelContainer } from './styled';
import Text from '../Text';
import { AccordionExpandProps } from './types';
import Input from '../Input';

function AccordionPanel(props: AccordionExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledAccordionPanel
      iconcolor="#1B7695"
      isoutarrow={props.outArrow ? 'true' : 'false'}
      outerarrowcolor="#1B7695"
    >
      <Accordion
        onChange={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)}
        style={{ backgroundColor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={
            props.showArrow === false
              ? null
              : isExpanded
                ? <ArrowDropUpIcon />
                : <ArrowRightIcon />
          }
        >
          <StyledLabelContainer>
            <Text color="#1B7695" fontWeight="700">
              {props.label}
            </Text>

            <Input value={props.value} label='' onChange={() => { }} />
          </StyledLabelContainer>
        </AccordionSummary>
        <AccordionDetails>{props.detail}</AccordionDetails>
      </Accordion>
    </StyledAccordionPanel>
  );
}

export default AccordionPanel;
