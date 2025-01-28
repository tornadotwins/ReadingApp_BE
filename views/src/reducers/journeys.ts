import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { 
  JourneyBookStateType,
  JourneyBookActionType,
} from './types';
import { JOURNEY_QURAN } from '@/config';

export const initialState = {
  journeyTitle: JOURNEY_QURAN,
  journeyCardInfos: [],
};

//////////////////////////////////////////////////////////////////
////////////////// Set Current Selected Journey //////////////////
//////////////////////////////////////////////////////////////////
const setJourneyBook = (state: JourneyBookStateType, action: JourneyBookActionType) => {
  const { journeyTitle } = action.payload;
  return { ...state, journeyTitle: journeyTitle }
}

//////////////////////////////////////////////////////////////////
/////////////////////// Reset journey info ///////////////////////
//////////////////////////////////////////////////////////////////
const resetJourneyInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_JOURNEY_BOOK]: setJourneyBook,

  [Types.RESET_JOURNEY]: resetJourneyInfo
}

export default createReducer(initialState, actionHandler);