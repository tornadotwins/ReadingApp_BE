import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';

export const initialState = {
  currentUser: null,
};

//////////////////////////////////////////////////////////////////
/////////////////////// Set Current User /////////////////////////
//////////////////////////////////////////////////////////////////
const setCurrentUser = (state: any, action: any) => {
  const { user } = action.payload;
  const newState = { ...state, currentUser: user };
  
  return newState;
};

//////////////////////////////////////////////////////////////////
/////////////////////////// Reset User ///////////////////////////
//////////////////////////////////////////////////////////////////
const resetUser = (state: any) => ({
  ...state,

  currentUser: null,
});

const actionHandler = {
  [Types.SET_CURRENT_USER]: setCurrentUser,
  [Types.RESET_USER]: resetUser,
};

export default createReducer(initialState, actionHandler);
