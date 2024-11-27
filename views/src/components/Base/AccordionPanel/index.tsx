import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import {
  StyledAccordionPanel,
  StyledLabelContainer,
  StyledLabel,
  StyledSummaryIcon,
  StyledInputContainer,
  StyledSwitchGroupContainer,
  StyledSwitchContainer,
} from './styled';
import Text from '../Text';
import { AccordionExpandProps } from './types';
import Input from '../Input';
import Switch from '../Switch';

import { getLanguageFromLanguageCode } from '@/utils';
import Images from '@/config/images';

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
            <StyledLabel>
              {
                props.summaryIcon &&
                <StyledSummaryIcon src={Images.icon_mobile} />
              }
              <Text color="#1B7695" fontWeight="700" fontFamily='Inter'>
                {props.label}
              </Text>
            </StyledLabel>

            {
              props.summaryTitle &&
              <StyledInputContainer onClick={(e => e.stopPropagation())}>
                <Input
                  value={props.summaryTitle}
                  label=''
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange && props.onChange(event)}
                  onKeyDown={
                    (event: React.KeyboardEvent<HTMLInputElement>) => {
                      event.key == 'Enter' &&
                        props.onCurrentChapterTitleEnterPressed &&
                        props.summaryTitle &&
                        props.onCurrentChapterTitleEnterPressed(props.summaryTitle)
                    }
                  }
                />
              </StyledInputContainer>
            }

            {
              props.hasSwitches &&
              <StyledSwitchGroupContainer onClick={(e => e.stopPropagation())}>
                <StyledSwitchContainer>
                  <Switch
                    label="Complete: "
                    value={props.isComplete?.[props.currentLanguage || 'en'] || false}
                    disable={
                      (props.currentUser?.isAdmin ||
                        props.currentUser?.roles.some(
                          role => role.language == getLanguageFromLanguageCode(props.currentLanguage || 'en') &&
                            role.role.toLowerCase() == "translator".toLowerCase()
                        )) ?
                        false :
                        true
                    }

                    onChange={
                      (value: boolean) =>
                        props.onChangeAppTextPageStatus({
                          pageId: props.pageId || '',
                          isCompleted: { ...props.isComplete, [props.currentLanguage || '']: value },
                          isPublished: props.isPublish,
                        })}
                  />
                </StyledSwitchContainer>

                <StyledSwitchContainer onClick={(e => e.stopPropagation())}>
                  <Switch
                    label="Publish: "
                    value={props.isPublish?.[props.currentLanguage || 'en'] || false}
                    disable={
                      (props.currentUser?.isAdmin ||
                        props.currentUser?.roles.some(
                          role => role.language == getLanguageFromLanguageCode(props.currentLanguage || 'en') &&
                            role.role.toLowerCase() == "publisher".toLowerCase()
                        )) ?
                        false :
                        true
                    }
                    onChange={
                      (value: boolean) =>
                        props.onChangeAppTextPageStatus({
                          pageId: props.pageId || '',
                          isCompleted: props.isComplete,
                          isPublished: { ...props.isPublish, [props.currentLanguage || '']: value },
                        })}
                  />
                </StyledSwitchContainer>
              </StyledSwitchGroupContainer>
            }
          </StyledLabelContainer>
        </AccordionSummary>
        <AccordionDetails>{props.detail}</AccordionDetails>
      </Accordion>
    </StyledAccordionPanel>
  );
}

export default AccordionPanel;
