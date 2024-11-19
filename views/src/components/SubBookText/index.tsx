import { TRANSLATION_STATUS_NONE } from "@/config";
import { Text } from "../Base";
import ChapterSquare from "../ChapterSquare";
import {
  StyledSubBookContainer,
  StyledSubBookContentContainer,
  StyledSubBookTitleContainer,
  StyledSubBookIntroChapterContainer,
  StyledSubBookChapterGroupContainer,
} from "./styles";
import { SubBookTextPropsType } from "./types";
import { ChapterInfoType, SubBookInfoType } from "@/pages/BookOverview/types";

function SubBookText(props: SubBookTextPropsType) {
  return (
    <StyledSubBookContainer>
      {!props.isQuranOrZabur && props.subBook &&
        <StyledSubBookTitleContainer>
          <Text color="#155D74" fontFamily="'Baloo Da 2'" fontWeight="400">
            {props.subBook.subBookTitle?.[props.languageCode]}
          </Text>
        </StyledSubBookTitleContainer>}

      <StyledSubBookContentContainer>
        <StyledSubBookIntroChapterContainer>
          {
            props.subBook && !!props.subBook.noChapter && props.subBook.chapterInfos[0].chapterNumber == 0 &&
            <ChapterSquare
              chapterNumber={0}
              onClick={() => { }}
              translationStatus={TRANSLATION_STATUS_NONE}
            />
          }
        </StyledSubBookIntroChapterContainer>

        {
          !props.isQuranOrZabur &&
          <StyledSubBookChapterGroupContainer>
            {
              props.subBook && props.subBook.chapterInfos?.map((chapterInfo: ChapterInfoType, index: number) => (
                <ChapterSquare
                  key={index}
                  chapterNumber={chapterInfo.chapterNumber}
                  translationStatus={chapterInfo.translationStatus || TRANSLATION_STATUS_NONE}
                  onClick={() => { }}
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
                <ChapterSquare
                  key={index}
                  chapterNumber={subBook.subBookNumber}
                  translationStatus={subBook.chapterInfos[0].translationStatus || TRANSLATION_STATUS_NONE}
                  onClick={() => { }}
                />
              ))
            }
          </StyledSubBookChapterGroupContainer>
        }
      </StyledSubBookContentContainer>
    </StyledSubBookContainer>
  )
}

export default SubBookText;
