import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import {
  AppTextPagesActionType,
  AppTextPageActionType,
  StateType,
  CurrentAudioHandlerActionType
} from './types';

export const initialState: StateType = {
  currentUser: null, // Default user
  bookInfos: [], // Empty array for book info
  chapterInfos: [], // Empty array for chapter info
  language: '', // Default language is an empty string
  appTextPages: [], // Empty array for app text pages
  currentAudioHandler: '',
};

//////////////////////////////////////////////////////////////////
//////////////////// Set Current AppTextPage ///////////////////
//////////////////////////////////////////////////////////////////
const setAppTextPages = (state: StateType, action: AppTextPagesActionType) => {
  const {appTextPages} = action.payload;
  return {...state, appTextPages};
};

//////////////////////////////////////////////////////////////////
//////////////////// Update Current AppTextPage //////////////////
//////////////////////////////////////////////////////////////////
const updateAppTextPages = (state: StateType, action: AppTextPageActionType) => {
  const {appTextPage} = action.payload;
  const updatedAppTextPages = state.appTextPages.map(
    appText => 
      appText.pageId == appTextPage.pageId ?
        appTextPage:
        appText
  );

  return {
    ...state,
    appTextPages: updatedAppTextPages
  }
}

//////////////////////////////////////////////////////////////////
//////////////////// Set Current Audio Handler ///////////////////
//////////////////////////////////////////////////////////////////
const setCurrentAudioHandler = (state: StateType, action: CurrentAudioHandlerActionType) => {
  const {currentAudioHandler} = action.payload;
  return {...state, currentAudioHandler};
}

//////////////////////////////////////////////////////////////////
///////////////////////// Reset book info ////////////////////////
//////////////////////////////////////////////////////////////////
const resetBookInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_APP_TEXT_PAGES]: setAppTextPages,
  [Types.UPDATE_APP_TEXT_PAGES]: updateAppTextPages,
  [Types.SET_CURRENT_AUDIO_HANDLER]: setCurrentAudioHandler,

  [Types.RESET_APP_TEXT_PAGES]: resetBookInfo
}

export default createReducer(initialState, actionHandler)