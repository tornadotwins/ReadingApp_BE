import { Dispatch } from "redux";
import { BookType, ChapterInfoType } from "../BookOverview/types"
import { UserType } from "../types";

type AudioOverviewPropsType = {
  chapterInfo?: ChapterInfoType,
  currentUser: UserType,
  currentLanguage: string,
  currentBook: string,
  bookInfos: BookType[],
  currentAudioHandler: string,
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
}

type ParseDataType = {
  [key: string]: string,
}

type MarkerType = {
  'Marker Name': string,
  'Marker Time': string,
  'Action': JSX.Element,
}

export type {
  AudioOverviewPropsType,
  SelectOptionType,
  SubBookModelType,
  ChapterModelType,
  ParseDataType,
  MarkerType,
}