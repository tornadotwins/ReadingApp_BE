import Images from "@/config/images";
import { Text } from "../Base";
import { StyledContainer, StyledOverviewTitleContainer, StyledOverviewTitleIcon } from "./styles";
import { ChapterTextOverviewPropsType } from "./types";

const ChapterTextOverview = (props: ChapterTextOverviewPropsType) => {
  return (
    <StyledContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitleIcon src={Images.icon_book} />

        <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="700">
          {`${props.bookTitle} text - ${props.language} - chapters:`}
        </Text>
      </StyledOverviewTitleContainer>
    </StyledContainer>
  )
}

export default ChapterTextOverview;
