import { StyledContainer, StyledSummaryItemContainer } from "./styles";
import { SummaryPropsType } from "./types";
import { Text, Switch, AccordionPanel, Input } from "../Base";
import { getLanguageFromLanguageCode } from "@/utils";

function Summary(props: SummaryPropsType) {
  return (
    props.isSpecialBook ?
      (
        <StyledContainer>
          <AccordionPanel
            label={`Chapter name (${getLanguageFromLanguageCode(props.currentLanguage)}): `}
            summaryTitle={props.currentChapterTitle}
            onChange={
              (e: React.ChangeEvent<HTMLInputElement>) =>
                props.handleCurrentChapterTitleChange && props.handleCurrentChapterTitleChange(e.target.value)
            }
            onCurrentChapterTitleEnterPressed={() =>
              props.handleUpdateChapterSummary &&
              props.currentChapterTitle &&
              props.arabicChapterTitle &&
              props.transliteration &&
              props.englishChapterTitle &&
              props.handleUpdateChapterSummary(props.currentChapterTitle, props.arabicChapterTitle, props.transliteration, props.englishChapterTitle)
            }
            detail={
              <>
                <StyledSummaryItemContainer>
                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#155D74"
                  >
                    Arabic:
                  </Text>

                  {
                    props.currentUser.isAdmin ?
                      <Input
                        value={props.arabicChapterTitle}
                        onChange={
                          (event: React.ChangeEvent<HTMLInputElement>) =>
                            props.handleArabicChapterTitleChange && props.handleArabicChapterTitleChange(event.target.value)
                        }
                        onKeyDown={
                          (event: React.KeyboardEvent<HTMLInputElement>) => {
                            event.key == 'Enter' &&
                              props.handleUpdateChapterSummary &&
                              props.currentChapterTitle &&
                              props.arabicChapterTitle &&
                              props.transliteration &&
                              props.englishChapterTitle &&
                              props.handleUpdateChapterSummary(props.currentChapterTitle, props.arabicChapterTitle, props.transliteration, props.englishChapterTitle)
                          }
                        }
                      /> :
                      <Text
                        fontFamily="Inter"
                        fontWeight="500"
                        fontSize={16}
                        lineHeight={24}
                        color="#969696"
                      >
                        {props.arabicChapterTitle}
                      </Text>
                  }
                </StyledSummaryItemContainer>

                <StyledSummaryItemContainer>
                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#155D74"
                  >
                    Transliteration:
                  </Text>

                  {
                    props.currentUser.isAdmin ?
                      <Input
                        value={props.transliteration}
                        onChange={
                          (event: React.ChangeEvent<HTMLInputElement>) =>
                            props.handleTransliterationChapterTitleChange && props.handleTransliterationChapterTitleChange(event.target.value)
                        }
                        onKeyDown={
                          (event: React.KeyboardEvent<HTMLInputElement>) => {
                            event.key == 'Enter' &&
                              props.handleUpdateChapterSummary &&
                              props.currentChapterTitle &&
                              props.arabicChapterTitle &&
                              props.transliteration &&
                              props.englishChapterTitle &&
                              props.handleUpdateChapterSummary(props.currentChapterTitle, props.arabicChapterTitle, props.transliteration, props.englishChapterTitle)
                          }
                        }
                      /> :
                      <Text
                        fontFamily="Inter"
                        fontWeight="500"
                        fontSize={16}
                        lineHeight={24}
                        color="#969696"
                      >
                        {props.transliteration}
                      </Text>
                  }
                </StyledSummaryItemContainer>

                <StyledSummaryItemContainer>
                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#155D74"
                  >
                    English:
                  </Text>

                  {
                    props.currentUser.isAdmin ?
                      <Input
                        value={props.englishChapterTitle}
                        onChange={
                          (event: React.ChangeEvent<HTMLInputElement>) =>
                            props.handleEnglishChapterTitleChange && props.handleEnglishChapterTitleChange(event.target.value)
                        }
                        onKeyDown={
                          (event: React.KeyboardEvent<HTMLInputElement>) => {
                            event.key == 'Enter' &&
                              props.handleUpdateChapterSummary &&
                              props.currentChapterTitle &&
                              props.arabicChapterTitle &&
                              props.transliteration &&
                              props.englishChapterTitle &&
                              props.handleUpdateChapterSummary(props.currentChapterTitle, props.arabicChapterTitle, props.transliteration, props.englishChapterTitle)
                          }
                        }
                      /> :
                      <Text
                        fontFamily="Inter"
                        fontWeight="500"
                        fontSize={16}
                        lineHeight={24}
                        color="#969696"
                      >
                        {props.englishChapterTitle}
                      </Text>
                  }
                </StyledSummaryItemContainer>

                <StyledSummaryItemContainer>
                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#155D74"
                  >
                    Ayas filled:
                  </Text>

                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#000"
                  >
                    {`${props.languageCountVerse} of ${props.totalCountVerse}`}
                  </Text>
                </StyledSummaryItemContainer>

                <StyledSummaryItemContainer>
                  <Switch
                    label="Complete: "
                    value={props.isComplete}
                    disable={
                      (props.currentUser.isAdmin ||
                        props.currentUser.roles.some(
                          role => role.language == getLanguageFromLanguageCode(props.currentLanguage) &&
                            (role.role.toLowerCase() == "translator".toLowerCase() || role.role.toLowerCase() == "publisher".toLowerCase())
                        )) ?
                        false :
                        true
                    }
                    onChange={(value: boolean) => props.translateComplete(value)}
                  />
                </StyledSummaryItemContainer>

                <StyledSummaryItemContainer>
                  <Switch
                    label="Publish: "
                    value={props.isPublish}
                    disable={
                      (props.currentUser.isAdmin ||
                        props.currentUser.roles.some(
                          role => role.language == getLanguageFromLanguageCode(props.currentLanguage) &&
                            role.role.toLowerCase() == "publisher".toLowerCase()
                        )) ?
                        false :
                        true
                    }
                    onChange={(value: boolean) => props.translatePublish(value)}
                  />
                </StyledSummaryItemContainer>
              </>
            }
          />
        </StyledContainer>
      ) :
      (
        <StyledContainer>
          <StyledSummaryItemContainer>
            <Text
              fontFamily="Inter"
              fontWeight="500"
              fontSize={16}
              lineHeight={24}
              color="#155D74"
            >
              Ayas filled:
            </Text>

            <Text
              fontFamily="Inter"
              fontWeight="500"
              fontSize={16}
              lineHeight={24}
              color="#000"
            >
              {`${props.languageCountVerse} of ${props.totalCountVerse}`}
            </Text>
          </StyledSummaryItemContainer>

          <StyledSummaryItemContainer>
            <Switch
              label="Complete: "
              value={props.isComplete}
              disable={
                (props.currentUser.isAdmin ||
                  props.currentUser.roles.some(
                    role => role.language == getLanguageFromLanguageCode(props.currentLanguage) &&
                      (role.role.toLowerCase() == "translator".toLowerCase() || role.role.toLowerCase() == "publisher".toLowerCase())
                  )) ?
                  false :
                  true
              }
              onChange={(value: boolean) => props.translateComplete(value)}
            />
          </StyledSummaryItemContainer>

          <StyledSummaryItemContainer>
            <Switch
              label="Publish: "
              value={props.isPublish}
              disable={
                (props.currentUser.isAdmin ||
                  props.currentUser.roles.some(
                    role => role.language == getLanguageFromLanguageCode(props.currentLanguage) &&
                      role.role.toLowerCase() == "publisher".toLowerCase()
                  )) ?
                  false :
                  true
              }
              onChange={(value: boolean) => props.translatePublish(value)}
            />
          </StyledSummaryItemContainer>
        </StyledContainer>
      )
  )
}

export default Summary;