import { useContext, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { StyledAccordionPanel } from './styled';
import Text from '../Text';
import { SettingsContext } from '@/contexts/SettingsProvider';
import getColorsByTheme from '@/utils/theme';
import { AccordionExpandProps } from './types';

function AccordionPanel(props: AccordionExpandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { theme } = useContext(SettingsContext);
  const { backgroundColor, topTextColor, altTextColor } = getColorsByTheme(theme);

  return (
    <StyledAccordionPanel iconcolor={topTextColor} isoutarrow={props.outArrow ? 'true' : 'false'} outerarrowcolor={altTextColor}>
      <Accordion onChange={() => setIsExpanded((prevIsExpanded) => !prevIsExpanded)} style={{ backgroundColor: backgroundColor }}>
        <AccordionSummary
          expandIcon={
            props.showArrow == false ?
              null :
              isExpanded ?
                <ArrowDropUpIcon /> :
                <ArrowRightIcon />
          }
        >
          <Text color={topTextColor} fontWeight='700'>{props.label}</Text>
        </AccordionSummary>

        <AccordionDetails>{props.detail}</AccordionDetails>
      </Accordion>
    </StyledAccordionPanel>
  );
}

export default AccordionPanel;
