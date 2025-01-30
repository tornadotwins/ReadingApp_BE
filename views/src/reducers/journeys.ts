import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { 
  JourneyBookStateType,
  JourneyBookActionType,
  JourneyParentActionType,
  JourneyBookImageActionType,
  JourneyParentTitleActionType,
} from './types';
import { JOURNEY_QURAN } from '@/config';

export const initialState = {
  journeyTitle: JOURNEY_QURAN,
  journeyMarkImg: "",
  parentId: "",
  journeyCardInfos: [],
  journeyBookImage: "",
  parentJourneyTitle: "",
};

//////////////////////////////////////////////////////////////////
////////////////// Set Current Selected Journey //////////////////
//////////////////////////////////////////////////////////////////
const setJourneyBook = (state: JourneyBookStateType, action: JourneyBookActionType) => {
  const { journeyTitle } = action.payload;
  return { ...state, journeyTitle: journeyTitle }
}

//////////////////////////////////////////////////////////////////
/////////////////// Set Selected Journey Cover ///////////////////
//////////////////////////////////////////////////////////////////
const setJourneyMarkImg = (state: JourneyBookStateType, action: JourneyBookImageActionType) => {
  const { image } = action.payload;
  return { ...state, journeyMarkImg: image }
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
//////////////////// Set Parent Journey title ////////////////////
//////////////////////////////////////////////////////////////////
const setParentJourneyTitle = (state: JourneyBookStateType, action: JourneyParentTitleActionType) => {
  const { title } = action.payload;
  return { ...state, parentJourneyTitle: title }
}

//////////////////////////////////////////////////////////////////
/////////////////////// Reset journey info ///////////////////////
//////////////////////////////////////////////////////////////////
const resetJourneyInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_JOURNEY_BOOK]: setJourneyBook,
  [Types.SET_JOURNEY_BOOK_MARK_IMAGE]: setJourneyMarkImg,
  [Types.SET_JOURNEY_PARENT_ID]: setParentId,
  [Types.SET_JOURNEY_IMAGE]: setJourneyImage,
  [Types.SET_JOUREY_PARENT_TITLE]: setParentJourneyTitle,

  [Types.RESET_JOURNEY]: resetJourneyInfo
}

export default createReducer(initialState, actionHandler);
