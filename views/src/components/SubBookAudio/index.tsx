import { TRANSLATION_STATUS_COMPLETE, TRANSLATION_STATUS_NONE, TRANSLATION_STATUS_PUBLISH } from "@/config";
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
              props.subBook &&
              props.subBook.chapterInfos?.map((chapterInfo: ChapterInfoType, index: number) => {
                const chapterAudioArray = Array.isArray(chapterInfo.chapterAudio)
                  ? chapterInfo.chapterAudio
                  : []; // Ensure chapterAudio is an array

                const audioInfo = chapterAudioArray.find(
                  (audioObj) => audioObj.language === props.languageCode
                );

                return (
                  <ChapterAudioSquare
                    key={index}
                    chapterNumber={chapterInfo.chapterNumber}
                    chapterId={chapterInfo.chapterId}
                    audioStatus={
                      audioInfo?.isPublished
                        ? TRANSLATION_STATUS_PUBLISH
                        : audioInfo?.isCompleted
                          ? TRANSLATION_STATUS_COMPLETE
                          : TRANSLATION_STATUS_NONE
                    }
                    onClick={props.moveToAudioOverview}
                  />
                );
              })}
          </StyledSubBookChapterGroupContainer>
        }

        {
          props.isQuranOrZabur &&
          <StyledSubBookChapterGroupContainer>
            {
              props.book && props.book.subBooks && props.book.subBooks.map((subBook: SubBookInfoType, index: number) => {
                const chapterAudioArray = Array.isArray(subBook?.chapterInfos[0]?.chapterAudio)
                  ? subBook?.chapterInfos[0].chapterAudio : [];
                const audioInfo = chapterAudioArray.find(audioObj => audioObj.language == props.languageCode)
                return <ChapterAudioSquare
                  key={index}
                  chapterNumber={subBook?.subBookNumber}
                  chapterId={subBook?.chapterInfos[0]?.chapterId}
                  audioStatus={
                    (audioInfo?.isPublished ?
                      TRANSLATION_STATUS_PUBLISH :
                      audioInfo?.isCompleted ?
                        TRANSLATION_STATUS_COMPLETE :
                        TRANSLATION_STATUS_NONE
                    )
                  }
                  onClick={props.moveToAudioOverview}
                />
              })
            }
          </StyledSubBookChapterGroupContainer>
        }
      </StyledSubBookContentContainer>
    </StyledSubBookContainer>
  )
}

export default SubBookAudio;