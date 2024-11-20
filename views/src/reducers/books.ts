import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import {
  BookStateType,
  BooksActionType,
  BookActionType,
  SubBooksActionType,
  SubBookActionType,
  SubBookIdActionType,
  ChapterActionType
} from './types';
import { SubBookInfoType } from '@/pages/BookOverview/types';

export const initialState = {
  bookInfos: [],
  subBookInfos: [],
  chapterInfos: [],
};

//////////////////////////////////////////////////////////////////
////////////////////////// Set BookInfos /////////////////////////
//////////////////////////////////////////////////////////////////
const setBookInfos = (state: BookStateType, action: BooksActionType) => {
  const { bookInfos } = action.payload;
  return { ...state, bookInfos };
};

//////////////////////////////////////////////////////////////////
////////////////////////// Add BookInfo //////////////////////////
//////////////////////////////////////////////////////////////////
const addBookInfo = (state: BookStateType, action: BookActionType) => {
  const { bookInfo } = action.payload;

  return {
    ...state,
    bookInfos: [...state.bookInfos, bookInfo],
  };
};

//////////////////////////////////////////////////////////////////
///////////////////// Set subbook Information ////////////////////
//////////////////////////////////////////////////////////////////
const setSubBookInfos = (state: BookStateType, action: SubBooksActionType) => {
  const { subBookInfos } = action.payload;
  return { ...state, subBookInfos };
};

//////////////////////////////////////////////////////////////////
///////////////////// Add subbook Information ////////////////////
//////////////////////////////////////////////////////////////////
const addSubBookInfo = (state: BookStateType, action: SubBookActionType) => {
  const { subBookInfo } = action.payload;

  return {
    ...state,
    subBookInfos: [...state.subBookInfos, subBookInfo],
  };
};

//////////////////////////////////////////////////////////////////
/////////////////// Remove subbook Information ///////////////////
//////////////////////////////////////////////////////////////////
const removeSubBookInfo = (state: BookStateType, action: SubBookIdActionType) => {
  const { subBookId } = action.payload;

  // Create a new array by filtering out
  const updatedSubBookInfos = state.subBookInfos.filter(
    (subBookInfo: SubBookInfoType) => subBookInfo.subBookId !== subBookId,
  );

  // Return a new state object with the updated subBookInfos
  return {
    ...state,
    subBookInfos: updatedSubBookInfos,
  };
};

//////////////////////////////////////////////////////////////////
///////////////////// Add Chapter Information ////////////////////
//////////////////////////////////////////////////////////////////
const addChapterInfo = (state: BookStateType, action: ChapterActionType) => {
  const { chapterInfo } = action.payload;

  return {
    ...state,
    chapterInfos: [...state.chapterInfos, chapterInfo],
  };
};

//////////////////////////////////////////////////////////////////
///////////////////////// Reset book info ////////////////////////
//////////////////////////////////////////////////////////////////
const resetBookInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_BOOKINFOS]: setBookInfos,
  [Types.ADD_BOOKINFO]: addBookInfo,
  [Types.SET_SUBBOOKINFO]: setSubBookInfos,
  [Types.ADD_SUBBOOKINFO]: addSubBookInfo,
  [Types.REMOVE_SUBBOOKINFO]: removeSubBookInfo,
  [Types.ADD_CHAPTERINFO]: addChapterInfo,

  [Types.RESET_BOOK]: resetBookInfo,
}

export default createReducer(initialState, actionHandler);