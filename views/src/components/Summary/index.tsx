import { StyledContainer, StyledSummaryItemContainer } from "./styles";
import { SummaryPropsType } from "./types";
import { Text, Switch, AccordionPanel } from "../Base";
import { getLanguageFromLanguageCode } from "@/utils";

function Summary(props: SummaryPropsType) {
  return (
    props.isSpecialBook ?
      (
        <StyledContainer>
          <AccordionPanel
            label={`Chapter name (${getLanguageFromLanguageCode(props.currentLanguage)}): `}
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

                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#969696"
                  >
                    Arabic Title
                  </Text>
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

                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#969696"
                  >
                    An-Nisa
                  </Text>
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

                  <Text
                    fontFamily="Inter"
                    fontWeight="500"
                    fontSize={16}
                    lineHeight={24}
                    color="#969696"
                  >
                    The Woman
                  </Text>
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