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
              chapterInfo={props.subBook.chapterInfos[0]}
              isCompleted={props.subBook.chapterInfos[0].chapterIsCompleted?.[props.languageCode]}
              isPublished={props.subBook.chapterInfos[0].chapterIsPublished?.[props.languageCode]}
              onClick={props.onChapterClick}
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
                  subBookInfo={props.subBook}
                  chapterInfo={chapterInfo}
                  isCompleted={chapterInfo.chapterIsCompleted?.[props.languageCode]}
                  isPublished={chapterInfo.chapterIsPublished?.[props.languageCode]}
                  onClick={props.onChapterClick}
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
                  subBookInfo={subBook}
                  isCompleted={subBook.chapterInfos[0].chapterIsCompleted?.[props.languageCode]}
                  isPublished={subBook.chapterInfos[0].chapterIsPublished?.[props.languageCode]}
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
