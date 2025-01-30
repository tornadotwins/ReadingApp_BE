import Images from "@/config/images";
import {
  StyledBackgroundImg,
  StyledBodyContainer,
  StyledCloseBtn,
  StyledCloseBtnContainer,
  StyledContainer,
  StyledHeaderContainer,
  StyledJourneyCardContainer,
  StyledJourneyCardHeaderContainer,
  StyledJourneyCardHeaderImg,
  StyledJourneyCardHeaderImgContainer,
  StyledJourneyCardTitleContainer,
  StyledJourneySectionContainer,
  StyledMainContainer,
  StyledMarkContainer,
  StyledMarkImg,
  StyledMarkImgContainer,
  StyledMarkImgMainContainer,
  StyledMarkTitle,
  StyledSearchBtn
} from "./styles";
import { JourneyPreviewPropsType, PreviewJourneyCardType } from "./types";
import { Text } from "../Base";
import { API_URL } from "@/config";

function JourneyPreview(props: JourneyPreviewPropsType) {
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledBackgroundImg src={Images.img_header_bg} />

        <StyledMarkContainer>
          <StyledMarkImgMainContainer>
            <StyledMarkImgContainer>
              <StyledMarkImg src={API_URL + props.markImg} />
            </StyledMarkImgContainer>

            <StyledMarkTitle>
              <Text fontFamily='Buenard' fontWeight='700' fontSize={36} lineHeight={47} textAlign='center' color='#FFF'>
                {props.markTitle}
              </Text>
            </StyledMarkTitle>
          </StyledMarkImgMainContainer>

          <StyledSearchBtn src={Images.icon_search} />

          <StyledCloseBtnContainer>
            <StyledCloseBtn src={Images.icon_close} />
          </StyledCloseBtnContainer>
        </StyledMarkContainer>
      </StyledHeaderContainer>

      <StyledBodyContainer>
        <StyledMainContainer>
          <StyledJourneySectionContainer>
            {props.journeyItems?.map((card: PreviewJourneyCardType, index: number) => (
              <StyledJourneyCardContainer key={index}>
                <StyledJourneyCardHeaderContainer>
                  <StyledJourneyCardHeaderImgContainer>
                    <StyledJourneyCardHeaderImg src={API_URL + card.logo} />
                  </StyledJourneyCardHeaderImgContainer>

                  <Text fontFamily="Inter" fontWeight="400" fontSize={12} lineHeight={24} color="#899093">
                    {card.seriesTitle}
                  </Text>
                </StyledJourneyCardHeaderContainer>

                <StyledJourneyCardTitleContainer>
                  <Text fontFamily="Inter" fontWeight="700" fontSize={16} lineHeight={24} color="#000">
                    {card.title}
                  </Text>
                </StyledJourneyCardTitleContainer>
              </StyledJourneyCardContainer>
            ))}
          </StyledJourneySectionContainer>
        </StyledMainContainer>
      </StyledBodyContainer>
    </StyledContainer>
  )
}

export default JourneyPreview;
