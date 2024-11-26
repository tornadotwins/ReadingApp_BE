import { createReducer } from 'reduxsauce';
import Types from '../actions/actionTypes';
import {
  BookStateType,
  BooksActionType,
  BookInfoActionType,
  SubBooksActionType,
  SubBookInfoActionType,
  SubBookIdActionType,
  ChapterActionType,
  LanguageActionType,
  BookActionType
} from './types';
import { SubBookInfoType } from '@/pages/BookOverview/types';

export const initialState = {
  book: 'Qur\'an',
  bookInfos: [],
  subBookInfos: [],
  chapterInfos: [],
  language: '',
};

//////////////////////////////////////////////////////////////////
//////////////////// Set Current Selected Book ///////////////////
//////////////////////////////////////////////////////////////////
const setBook = (state: BookStateType, action: BookActionType) => {
  const {bookTitle} = action.payload;
  return {...state, book: bookTitle};
}

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
const addBookInfo = (state: BookStateType, action: BookInfoActionType) => {
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
const addSubBookInfo = (state: BookStateType, action: SubBookInfoActionType) => {
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
/////////////////// Update Chapter Information ///////////////////
//////////////////////////////////////////////////////////////////
const updateChapterInfo = (state: BookStateType, action: ChapterActionType) => {
  const {chapterInfo} = action.payload;
  const updatedChapterInfos = state.chapterInfos.map(
    chapter => 
      chapter.chapterId == chapterInfo.chapterId ?
        chapterInfo:
        chapter
  );
  
  return {
    ...state,
    chapterInfos: updatedChapterInfos
  }
}

//////////////////////////////////////////////////////////////////
////////////////////// Set Current Language //////////////////////
//////////////////////////////////////////////////////////////////
const setCurrentLanguage = (state: BookStateType, action: LanguageActionType) => {
  const {language} = action.payload;

  return {
    ...state,
    language: language
  }
}


//////////////////////////////////////////////////////////////////
///////////////////////// Reset book info ////////////////////////
//////////////////////////////////////////////////////////////////
const resetBookInfo = () => ({
  ...initialState,
});

const actionHandler = {
  [Types.SET_BOOK]: setBook,
  [Types.SET_BOOKINFOS]: setBookInfos,
  [Types.ADD_BOOKINFO]: addBookInfo,
  [Types.SET_SUBBOOKINFO]: setSubBookInfos,
  [Types.ADD_SUBBOOKINFO]: addSubBookInfo,
  [Types.REMOVE_SUBBOOKINFO]: removeSubBookInfo,
  [Types.ADD_CHAPTERINFO]: addChapterInfo,
  [Types.UPDATE_CHAPTERINFOS]: updateChapterInfo,
  
  [Types.SET_CURRENT_LANGUAGE]: setCurrentLanguage,

  [Types.RESET_BOOK]: resetBookInfo,
}

export default createReducer(initialState, actionHandler);