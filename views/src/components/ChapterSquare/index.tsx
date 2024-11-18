import { Text } from '../Base';
import { StyledChapterSquare } from './styles';
import { ChapterSquarePropsType } from './types';

const ChapterSquare = (props: ChapterSquarePropsType) => {
  return (
    <StyledChapterSquare status={props.translationStatus} onClick={() => props.onClick}>
      <Text fontFamily='Inter' fontSize={16} fontWeight='500'>
        {props.chapterNumber == 0 ? 'Intr' : props.chapterNumber.toString()}
      </Text>
    </StyledChapterSquare>
  )
}

export default ChapterSquare;