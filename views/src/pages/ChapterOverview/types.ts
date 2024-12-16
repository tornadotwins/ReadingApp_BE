import { Dispatch } from "redux";
import {
  BookType,
  ChapterInfoType,
  SubBookInfoType,
  VerseType
} from "../BookOverview/types"
import { UserType } from "../types";

type ChapterOverviewPropsType = {
  chapterInfo?: ChapterInfoType;
  subBookInfo?: SubBookInfoType;
  currentUser: UserType;
  bookInfos: BookType[];
  chapterInfos: ChapterInfoType[];
  currentLanguage: string;
  currentBook: string;
  dispatch: Dispatch;
}

type AudioType = {
  language: string,
  isCompleted: boolean,
  isPublished: boolean,
  audio: string,
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
  audio: AudioType[];
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
  verses?: VerseType[]
}

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

type SelectOptionType = {
  label: string;
  value: string;
}

type ParseDataType = {
  [key: string]: string,
}

export type {
  ChapterOverviewPropsType,
  ChapterModelType,
  SubBookModelType,
  SelectOptionType,
  ParseDataType,
}