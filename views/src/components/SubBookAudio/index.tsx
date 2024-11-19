import { TRANSLATION_STATUS_NONE } from "@/config";
import { Text } from "../Base";
import ChapterAudioSquare from "../ChapterAudioSquare";
import {
  StyledSubBookContainer,
  StyledSubBookContentContainer,
  StyledSubBookTitleContainer,
  StyledSubBookIntroChapterContainer,
  StyledSubBookChapterGroupContainer,
} from "./styles";
import { SubBookAudioPropsType } from "./types";
import { ChapterInfoType } from "@/pages/BookOverview/types";

function SubBookAudio(props: SubBookAudioPropsType) {
  return (
    <StyledSubBookContainer>
      <StyledSubBookTitleContainer>
        <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="400">
          {props.subBook.subBookTitle?.[props.languageCode]}
        </Text>
      </StyledSubBookTitleContainer>

      <StyledSubBookContentContainer>
        <StyledSubBookIntroChapterContainer>
          {
            !!props.subBook.noChapter && props.subBook.chapterInfos[0].chapterNumber == 0 &&
            <ChapterAudioSquare
              chapterNumber={0}
              onClick={() => { }}
              audioStatus={TRANSLATION_STATUS_NONE}
            />
          }
        </StyledSubBookIntroChapterContainer>

        <StyledSubBookChapterGroupContainer>
          {
            props.subBook.chapterInfos.map((chapterInfo: ChapterInfoType, index: number) => (
              <ChapterAudioSquare
                key={index}
                chapterNumber={chapterInfo.chapterNumber}
                audioStatus={chapterInfo.chapterAudio?.[props.languageCode] || TRANSLATION_STATUS_NONE}
                onClick={() => { }}
              />
            ))
          }
        </StyledSubBookChapterGroupContainer>
      </StyledSubBookContentContainer>
    </StyledSubBookContainer>
  )
}

export default SubBookAudio;