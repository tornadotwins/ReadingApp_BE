import { Text } from "../Base";

import { StyledContainer, StyledOverviewTitleContainer } from "./styles";
import { ChapterReferenceOverviewPropsType } from "./types";
// import { SubBookInfoType } from "@/pages/BookOverview/types";

// import Images from "@/config/images";

const BookReferenceOverview = (props: ChapterReferenceOverviewPropsType) => {
  return (
    <StyledContainer>
      <StyledOverviewTitleContainer>
        <Text color="red" fontFamily="'Baloo Da 2'" fontWeight="700" fontSize={30}>
          Coming Soon
        </Text>
      </StyledOverviewTitleContainer>
    </StyledContainer>
  )
}

export default BookReferenceOverview;
