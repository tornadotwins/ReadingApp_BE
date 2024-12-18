import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import { StateType, UserActionType } from './types';

export const initialState: StateType = {
  currentUser: null,
  bookInfos: [],
  chapterInfos: [],
  language: '',
  appTextPages: [],
  currentAudioHandler: "",
};

//////////////////////////////////////////////////////////////////
/////////////////////// Set Current User /////////////////////////
//////////////////////////////////////////////////////////////////
const setCurrentUser = (state: StateType, action: UserActionType) => {
  const { user } = action.payload;
  const newState = { ...state, currentUser: user };
  
  return newState;
};

//////////////////////////////////////////////////////////////////
/////////////////////////// Reset User ///////////////////////////
//////////////////////////////////////////////////////////////////
const resetUser = (state: StateType,) => ({
  ...state,

  currentUser: null,
});

const actionHandler = {
  [Types.SET_CURRENT_USER]: setCurrentUser,
  [Types.RESET_USER]: resetUser,
};

export default createReducer(initialState, actionHandler);
