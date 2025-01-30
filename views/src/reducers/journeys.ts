import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { 
  JourneyBookStateType,
  JourneyBookActionType,
  JourneyParentActionType,
  JourneyBookImageActionType,
} from './types';
import { JOURNEY_QURAN } from '@/config';

export const initialState = {
  journeyTitle: JOURNEY_QURAN,
  parentId: "",
  journeyCardInfos: [],
  journeyBookImage: "",
};

//////////////////////////////////////////////////////////////////
////////////////// Set Current Selected Journey //////////////////
//////////////////////////////////////////////////////////////////
const setJourneyBook = (state: JourneyBookStateType, action: JourneyBookActionType) => {
  const { journeyTitle } = action.payload;
  return { ...state, journeyTitle: journeyTitle }
}

//////////////////////////////////////////////////////////////////
///////////////// Set Parent Journey(Article) ID /////////////////
//////////////////////////////////////////////////////////////////
const setParentId = (state: JourneyBookStateType, action: JourneyParentActionType) => {
  const { parentId } = action.payload;
  return { ...state,  parentId: parentId};
}

//////////////////////////////////////////////////////////////////
/////////////////////// Set Journey Image ////////////////////////
//////////////////////////////////////////////////////////////////
const setJourneyImage = (state: JourneyBookStateType, action: JourneyBookImageActionType) => {
  const { image } = action.payload;
  return { ...state, journeyBookImage: image }
}

//////////////////////////////////////////////////////////////////
/////////////////////// Reset journey info ///////////////////////
//////////////////////////////////////////////////////////////////
const resetJourneyInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_JOURNEY_BOOK]: setJourneyBook,
  [Types.SET_JOURNEY_PARENT_ID]: setParentId,
  [Types.SET_JOURNEY_IMAGE]: setJourneyImage,

  [Types.RESET_JOURNEY]: resetJourneyInfo
}

export default createReducer(initialState, actionHandler);
