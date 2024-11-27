import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import {
  AppTextPagesActionType,
  AppTextPageActionType,
  StateType
} from './types';

export const initialState = {
  appTextPages: [],
}

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
///////////////////////// Reset book info ////////////////////////
//////////////////////////////////////////////////////////////////
const resetBookInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_APP_TEXT_PAGES]: setAppTextPages,
  [Types.UPDATE_APP_TEXT_PAGES]: updateAppTextPages,
  [Types.RESET_APP_TEXT_PAGES]: resetBookInfo
}

export default createReducer(initialState, actionHandler)