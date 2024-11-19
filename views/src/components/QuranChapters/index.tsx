import { TRANSLATION_STATUS_NONE } from "@/config";
import ChapterSquare from "../ChapterSquare";

import { StyledIntroContainer, StyledQuranContainer, StyledChapterContainer } from "./styles";
import { QuranChaptersPropsType } from './types';

const QuranChapters = (props: QuranChaptersPropsType) => {
  return (
    <StyledQuranContainer>
      {
        props.bookInfo.subBooks[0].subBookNumber == 0 &&
        <StyledIntroContainer>
          <ChapterSquare
            chapterNumber={0}
            translationStatus={TRANSLATION_STATUS_NONE}
            onClick={() => console.log("Intro Chapter clicked")
            }
          />
        </StyledIntroContainer>
      }

      <StyledChapterContainer>
        {
          props.bookInfo.subBooks.map((subBook: SubBookType, index: number) => (
            chapter.chapterNumber > 0 &&
            <ChapterSquare
              key={index}
              chapterNumber={chapter.chapterNumber}
              translationStatus={chapter.status}
              onClick={() => {
                console.log(`Chapter ${index} clicked`);
              }}
            />
          ))
        }
      </StyledChapterContainer>
    </StyledQuranContainer>
  );
};

export default QuranChapters;
