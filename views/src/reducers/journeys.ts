import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { 
  JourneyBookStateType,
  JourneyBookActionType,
  JourneyParentActionType,
  JourneyBookImageActionType,
  JourneyParentTitleActionType,
  JourneyDepthActionType,
  JourneyUpdateActionType,
} from './types';
import { JOURNEY_QURAN } from '@/config';

export const initialState = {
  journeyTitle: JOURNEY_QURAN,
  journeyMarkImg: "",
  parentId: "",
  journeyCardInfos: [],
  journeyBookImage: "",
  parentJourneyTitle: "",
  depth: 1,
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
//////////////////// Set Current Journey Depth ///////////////////
//////////////////////////////////////////////////////////////////
const setDepth = (state: JourneyBookStateType, action: JourneyDepthActionType) => {
  const { depth } = action.payload;
  return { ...state, depth: depth }
}

//////////////////////////////////////////////////////////////////
////////////////////// Update Journey Cards //////////////////////
//////////////////////////////////////////////////////////////////
const updateJourneyCards = (state: JourneyBookStateType, action: JourneyUpdateActionType) => {
  const updatedCards = action.payload.journeyCards;
  console.log('input: ', updatedCards);

  const updatedJourneyCardInfos = state.journeyCardInfos?.map(existingCard => {
    const matchingCard = updatedCards.find(
      newCard => newCard._id === existingCard?._id
    );

    return matchingCard ? { ...existingCard, ...matchingCard } : existingCard;
  });

  // Add new cards that don't already exist
  const newCards = updatedCards.filter(
    newCard => !state.journeyCardInfos.some(
      existingCard => existingCard.id === newCard.id || existingCard._id === newCard._id
    )
  );
  console.log([...updatedJourneyCardInfos, ...newCards]);

  return {
    ...state,
    journeyCardInfos: [...updatedJourneyCardInfos, ...newCards],
  };
};

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
  [Types.SET_JOURNEY_DEPTH]: setDepth,
  [Types.UPDATE_JOURNEY_CARDS]: updateJourneyCards,

  [Types.RESET_JOURNEY]: resetJourneyInfo
}

export default createReducer(initialState, actionHandler);
