import { Text } from '../Base';
import { StyledChapterSquare } from './styles';
import { ChapterSquarePropsType } from './types';

const ChapterSquare = (props: ChapterSquarePropsType) => {
  return (
    <StyledChapterSquare
      status={props.translationStatus}
      onClick={() => props.onClick(props.chapterInfo?.chapterId || '')}>
      <Text fontFamily='Inter' fontSize={16} fontWeight='500'>
        {
          props.chapterInfo ?
            props.chapterInfo.chapterNumber == 0 ? 'Intr' : props.chapterInfo.chapterNumber.toString() :
            props.subBookInfo?.subBookNumber == 0 ? 'Intr' : props.subBookInfo?.subBookNumber.toString()
        }
      </Text>
    </StyledChapterSquare>
  )
}

export default ChapterSquare;
