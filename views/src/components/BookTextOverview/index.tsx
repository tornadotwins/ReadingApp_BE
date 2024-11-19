import { Text } from "../Base";
import SubBookText from "../SubBookText";

import { StyledContainer, StyledOverviewTitleContainer, StyledOverviewTitleIcon } from "./styles";
import { ChapterTextOverviewPropsType } from "./types";
import { SubBookInfoType } from "@/pages/BookOverview/types";

import Images from "@/config/images";

const BookTextOverview = (props: ChapterTextOverviewPropsType) => {
  return (
    <StyledContainer isquranorzabur={props.isQuranOrZabur ? 'true' : 'false'}>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitleIcon src={Images.icon_book} />

        <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="700">
          {`${props.bookTitle} text - ${props.language} - chapters:`}
        </Text>
      </StyledOverviewTitleContainer>

      {
        !props.isQuranOrZabur && props.bookInfo.subBooks.map((subBook: SubBookInfoType, index: number) =>
          <SubBookText
            key={index}
            subBook={subBook}
            languageCode={props.languageCode}
            isQuranOrZabur={props.isQuranOrZabur}
          />
        )
      }

      {
        props.isQuranOrZabur &&
        <SubBookText
          book={props.bookInfo}
          languageCode={props.languageCode}
          isQuranOrZabur={props.isQuranOrZabur}
        />
      }
    </StyledContainer>
  )
}

export default BookTextOverview;
