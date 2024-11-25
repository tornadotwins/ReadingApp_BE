import { Text } from '../Base';
import { StyledChapterAudioSquare } from './styles';
import { ChapterSquarePropsType } from './types';

const ChapterAudioSquare = (props: ChapterSquarePropsType) => {
  return (
    <StyledChapterAudioSquare status={props.audioStatus} onClick={props.onClick}>
      <Text fontFamily='Inter' fontSize={16} fontWeight='500'>
        {props.chapterNumber == 0 ? 'Intr' : props.chapterNumber?.toString()}
      </Text>
    </StyledChapterAudioSquare>
  )
}

export default ChapterAudioSquare;
