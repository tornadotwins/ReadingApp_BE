import { TRANSLATION_STATUS_COMPLETE, TRANSLATION_STATUS_PUBLISH } from '@/config';
import {Box, styled} from '@mui/material';

const StyledChapterSquareContainer = styled(Box) ({
  width: '100%',
  backgroundColor: '#F0F5FB',
  padding: '5px 20px',
})

const StyledChapterSquare = styled(Box) <{status: string}> (({status}) => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: status == TRANSLATION_STATUS_PUBLISH ? 
                    '#FFAA5D' : 
                    status == TRANSLATION_STATUS_COMPLETE ? 
                      '#155D74' : 
                      '#fff',

  color: status == TRANSLATION_STATUS_PUBLISH ? 
          '#155D74' : 
          status == TRANSLATION_STATUS_COMPLETE ? 
            '#fff' : 
            '#155D74',
}));

export {
  StyledChapterSquareContainer,
  StyledChapterSquare,
};
