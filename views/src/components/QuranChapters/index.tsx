import { TRANSLATION_STATUS_NONE } from "@/config";
import ChapterSquare from "../ChapterSquare";

import { StyledIntroContainer, StyledQuranContainer, StyledChapterContainer } from "./styles";
import { QuranChaptersPropsType, QuranChapterType } from './types';

const QuranChapters = (props: QuranChaptersPropsType) => {
  return (
    <StyledQuranContainer>
      <StyledIntroContainer>
        <ChapterSquare
          chapterNumber={0}
          translationStatus={TRANSLATION_STATUS_NONE}
          onClick={() => console.log("Intro Chapter clicked")
          }
        />
      </StyledIntroContainer>

      <StyledChapterContainer>
        {props.chapters.map((chapter: QuranChapterType, index: number) => (
          <ChapterSquare
            key={index}
            chapterNumber={chapter.chapterNumber}
            translationStatus={chapter.status}
            onClick={() => {
              console.log(`Chapter ${index} clicked`);
            }}
          />
        ))}
      </StyledChapterContainer>
    </StyledQuranContainer>
  );
};

export default QuranChapters;
