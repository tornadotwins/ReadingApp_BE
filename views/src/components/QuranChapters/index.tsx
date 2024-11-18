import { TRANSLATION_STATUS_NONE } from "@/config";
import ChapterSquare from "../ChapterSquare";

import { StyledIntroContainer, StyledQuranContainer, StyledChapterContainer } from "./styles";
import { QuranChaptersPropsType } from './types';

const QuranChapters = (props: QuranChaptersPropsType) => {
  return (
    <StyledQuranContainer>
      <StyledIntroContainer>
        <StyledIntroContainer>
          <ChapterSquare
            chapterNumber={0}
            translationStatus={TRANSLATION_STATUS_NONE}
            onClick={() => { }}
          />
        </StyledIntroContainer>

        <StyledChapterContainer>
          {
            Array.from({ length: props.chapters }).map((_, index) => (
              <ChapterSquare
                key={index + 1}
                chapterNumber={index + 1}
                translationStatus={TRANSLATION_STATUS_NONE}
                onClick={() => {
                  console.log(`Chapter ${index + 1} clicked`);
                }}
              />
            ))
          }
        </StyledChapterContainer>
      </StyledIntroContainer>
    </StyledQuranContainer>
  );
}

export default QuranChapters;
