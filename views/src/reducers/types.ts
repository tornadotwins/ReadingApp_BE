import { BookType, ChapterInfoType, SubBookInfoType } from "@/pages/BookOverview/types";
import { UserType } from "@/pages/types";

type StateType = {
  currentUser: UserType | null;
  bookInfos: BookType[] | [];
}

type BookStateType = {
  bookInfos: BookType[] | [];
  subBookInfos: SubBookInfoType[] | [];
  chapterInfos: ChapterInfoType[] | [];  
}

type UserActionType = {
  type: string,
  payload: {
    user: UserType,
  }
}

type BooksActionType = {
  type: string,
  payload: {
    bookInfos: BookType[]
  }
}

type BookActionType = {
  type: string,
  payload: {
    bookInfo: BookType
  }
}

type SubBooksActionType = {
  type: string,
  payload: {
    subBookInfos: SubBookInfoType[]
  }
}

type SubBookActionType = {
  type: string,
  payload: {
    subBookInfo: SubBookInfoType
  }
}

type SubBookIdActionType = {
  type: string,
  payload: {
    subBookId: string
  }
}

type ChapterActionType = {
  type: string,
  payload: {
    chapterInfo: ChapterInfoType
  }
}

type AppStateType = {
  user: {
    currentUser: UserType | null;
  },
  book: {
    bookInfos: BookType[] | [];
  }
}

export type {
  StateType,
  BookStateType,
  UserActionType,
  BooksActionType,
  BookActionType,
  SubBooksActionType,
  SubBookActionType,
  SubBookIdActionType,
  ChapterActionType,
  AppStateType,
}