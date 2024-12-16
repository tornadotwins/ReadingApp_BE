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
import { SubBookInfoType, ChapterInfoType } from "@/pages/BookOverview/types";

function SubBookAudio(props: SubBookAudioPropsType) {
  return (
    <StyledSubBookContainer>
      {
        !props.isQuranOrZabur && props.subBook &&
        <StyledSubBookTitleContainer>
          <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="400">
            {props.subBook.subBookTitle?.[props.languageCode]}
          </Text>
        </StyledSubBookTitleContainer>
      }

      <StyledSubBookContentContainer>
        <StyledSubBookIntroChapterContainer>
          {
            props.subBook && !!props.subBook.noChapter && props.subBook.chapterInfos[0].chapterNumber == 0 &&
            <ChapterAudioSquare
              chapterNumber={0}
              chapterId={props.subBook.chapterInfos[0].chapterId}
              onClick={props.moveToAudioOverview}
              audioStatus={TRANSLATION_STATUS_NONE}
            />
          }
        </StyledSubBookIntroChapterContainer>

        {
          !props.isQuranOrZabur &&
          <StyledSubBookChapterGroupContainer>
            {
              props.subBook && props.subBook.chapterInfos?.map((chapterInfo: ChapterInfoType, index: number) => (
                <ChapterAudioSquare
                  key={index}
                  chapterNumber={chapterInfo.chapterNumber}
                  chapterId={chapterInfo.chapterId}
                  audioStatus={chapterInfo?.chapterAudio?.[props.languageCode] || TRANSLATION_STATUS_NONE}
                  onClick={props.moveToAudioOverview}
                />
              ))
            }
          </StyledSubBookChapterGroupContainer>
        }

        {
          props.isQuranOrZabur &&
          <StyledSubBookChapterGroupContainer>
            {
              props.book && props.book.subBooks && props.book.subBooks.map((subBook: SubBookInfoType, index: number) => (
                <ChapterAudioSquare
                  key={index}
                  chapterNumber={subBook?.subBookNumber}
                  chapterId={subBook?.chapterInfos[0]?.chapterId}
                  audioStatus={(subBook.chapterInfos && subBook.chapterInfos[0]?.chapterAudio?.[props.languageCode]) || TRANSLATION_STATUS_NONE}
                  onClick={props.moveToAudioOverview}
                />
              ))
            }
          </StyledSubBookChapterGroupContainer>
        }
      </StyledSubBookContentContainer>
    </StyledSubBookContainer>
  )
}

export default SubBookAudio;