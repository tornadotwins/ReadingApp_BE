import { Dispatch } from "redux";
import {
  BookType,
  ChapterInfoType,
  SubBookInfoType
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
  SelectOptionType,
  ParseDataType,
}