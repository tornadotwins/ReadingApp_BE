import { CHAPTER_HAS_CONTENT, TRANSLATION_STATUS_COMPLETE, TRANSLATION_STATUS_NONE, TRANSLATION_STATUS_PUBLISH } from '@/config';
import { Text } from '../Base';
import { StyledChapterSquare } from './styles';
import { ChapterSquarePropsType } from './types';

const ChapterSquare = (props: ChapterSquarePropsType) => {
  return (
    <StyledChapterSquare
      status={props.isPublished ?
        TRANSLATION_STATUS_PUBLISH :
        props.isCompleted ?
          TRANSLATION_STATUS_COMPLETE :
          props.chapterInfo && props.chapterInfo?.verses?.length > 0 ?
            CHAPTER_HAS_CONTENT :
            TRANSLATION_STATUS_NONE
      }
      onClick={() => props.onClick(props.chapterInfo?.chapterId || '')}>
      <Text fontFamily='Inter' fontSize={16} fontWeight='500'>
        {
          props.isSpecialBook ?
            props.subBookInfo?.subBookNumber == 0 ? 'Intr' : props.subBookInfo?.subBookNumber?.toString() :
            props.chapterInfo && (props.chapterInfo.chapterNumber == 0 ? 'Intr' : props.chapterInfo.chapterNumber?.toString())
        }
      </Text>
    </StyledChapterSquare>
  )
}

export default ChapterSquare;
