import { Dispatch } from "redux";
import { BookType, ChapterInfoType } from "../BookOverview/types"
import { UserType } from "../types";

type AudioOverviewPropsType = {
  chapterInfo?: ChapterInfoType,
  currentUser: UserType,
  currentLanguage: string,
  currentBook: string,
  bookInfos: BookType[],
  chapterInfos: ChapterInfoType[];
  
  dispatch: Dispatch
};

type SelectOptionType = {
  label: string;
  value: string;
};

type SubBookModelType = {
  number: number,
  title: {
    ar: string;
    en: string;
    [key: string]: string;
  },
  book: string,
  noChapter: boolean
}

type ChapterModelType = {
  _id: string;
  subBook: string;
  chapterNumber: number;
  isTranslated: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
  audio: {
    ar: string;
    en: string;
    [key: string]: string;
  };
  isCompleted: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
  isPublished: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
}

type ParseDataType = {
  [key: string]: string,
}

export type {
  AudioOverviewPropsType,
  SelectOptionType,
  SubBookModelType,
  ChapterModelType,
  ParseDataType,
}