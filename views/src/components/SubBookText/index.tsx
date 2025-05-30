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
            {props.subBookTitleInfo?.find(subBook => subBook.variable === props.subBook?.subBookTitle?.en)?.text?.[props.languageCode] || props.subBook?.subBookTitle?.en}
          </Text>
        </StyledSubBookTitleContainer>
      }

      <StyledSubBookContentContainer>
        <StyledSubBookIntroChapterContainer>
          {
            props.subBook && !props.subBook.noChapter && props.subBook?.chapterInfos[0]?.chapterNumber == 0 &&
            <ChapterSquare
              chapterInfo={props.subBook.chapterInfos[0]}
              isCompleted={props.subBook.chapterInfos[0]?.chapterIsCompleted?.[props.languageCode]}
              isPublished={props.subBook.chapterInfos[0]?.chapterIsPublished?.[props.languageCode]}

              onClick={props.onChapterClick}
            />
          }
          {
            props.isQuranOrZabur && props.book &&
            <ChapterSquare
              chapterInfo={props.book?.subBooks[0]?.chapterInfos[0]}
              isCompleted={props.book?.subBooks[0].chapterInfos[0]?.chapterIsCompleted?.[props.languageCode] || false}
              isPublished={props.book?.subBooks[0].chapterInfos[0]?.chapterIsPublished?.[props.languageCode] || false}

              onClick={props.onChapterClick}
            />
          }
        </StyledSubBookIntroChapterContainer>

        {
          !props.isQuranOrZabur &&
          <StyledSubBookChapterGroupContainer>
            {
              props.subBook && props.subBook.chapterInfos?.map((chapterInfo: ChapterInfoType, index: number) => (
                chapterInfo?.chapterNumber !== 0 &&
                <ChapterSquare
                  key={index}
                  subBookInfo={props.subBook}
                  chapterInfo={chapterInfo}
                  isCompleted={chapterInfo?.chapterIsCompleted?.[props.languageCode] || false}
                  isPublished={chapterInfo?.chapterIsPublished?.[props.languageCode] || false}
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
                subBook.chapterInfos[0]?.chapterNumber !== 0 &&
                <ChapterSquare
                  key={index}
                  subBookInfo={subBook}
                  chapterInfo={subBook.chapterInfos[0]}
                  isCompleted={subBook.chapterInfos && subBook.chapterInfos[0]?.chapterIsCompleted?.[props.languageCode] || false}
                  isPublished={subBook.chapterInfos && subBook.chapterInfos[0]?.chapterIsPublished?.[props.languageCode] || false}
                  isSpecialBook
                  onClick={() => props.onChapterClick(subBook.chapterInfos && subBook?.chapterInfos[0].chapterId)}
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
