import { Text } from "../Base";
import SubBook from "../SubBook";

import { StyledContainer, StyledOverviewTitleContainer, StyledOverviewTitleIcon } from "./styles";
import { ChapterTextOverviewPropsType } from "./types";
import { SubBookInfoType } from "@/pages/BookOverview/types";

import Images from "@/config/images";

const BookTextOverview = (props: ChapterTextOverviewPropsType) => {
  return (
    <StyledContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitleIcon src={Images.icon_book} />

        <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="700">
          {`${props.bookTitle} text - ${props.language} - chapters:`}
        </Text>
      </StyledOverviewTitleContainer>

      {
        props.bookInfo.subBooks.map((subBook: SubBookInfoType, index: number) =>
          <SubBook
            key={index}
            subBook={subBook}
            languageCode={props.languageCode}
          />
        )
      }
    </StyledContainer>
  )
}

export default BookTextOverview;
