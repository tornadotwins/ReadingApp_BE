import { Text } from "../Base";
import SubBookAudio from "../SubBookAudio";

import { StyledContainer, StyledOverviewTitleContainer, StyledOverviewTitleIcon } from "./styles";
import { ChapterAudioOverviewPropsType } from "./types";
import { SubBookInfoType } from "@/pages/BookOverview/types";

import Images from "@/config/images";

const BookAudioOverview = (props: ChapterAudioOverviewPropsType) => {
  return (
    <StyledContainer>
      <StyledOverviewTitleContainer>
        <StyledOverviewTitleIcon src={Images.icon_audio} />

        <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="700">
          {`${props.bookTitle} Audio - ${props.language} - chapters:`}
        </Text>
      </StyledOverviewTitleContainer>

      {
        props.bookInfo.subBooks.map((subBook: SubBookInfoType, index: number) =>
          <SubBookAudio
            key={index}
            subBook={subBook}
            languageCode={props.languageCode}
          />
        )
      }
    </StyledContainer>
  )
}

export default BookAudioOverview;
