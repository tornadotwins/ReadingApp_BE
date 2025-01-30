import { Dispatch } from "redux";
import { UserType } from "../types"

type BookOverviewPropsType = {
  currentUser: UserType;
  bookInfos: BookType[];
  currentLanguage: string;
  currentBook: string;

  dispatch: Dispatch;
};

type VerseType = {
  verseId: string;
  verseHeader: {
    en: string;
    [key: string]: string;
  };
  verseAudioStart: {
    ar: number;
    en: number;
    [key: string]: number;
  };
  verseNumber: number;
  verseText: {
    ar: string;
    en: string;
    [key: string]: string;
  };
  verseReference: {
    ref: string[]
  };
};

type AudioType = {
  language: string,
  isCompleted: boolean,
  isPublished: boolean,
  audio: string,
}

type ChapterInfoType = {
  chapterId: string;
  chapterNumber: number;
  chapterTranslated: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
  chapterAudio: AudioType[];
  subBookId?: string;
  chapterIsCompleted: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
  chapterIsPublished: {
    ar: boolean;
    en: boolean;
    [key: string]: boolean;
  };
  verses?: VerseType[];
};

type SubBookInfoType = {
  chapterInfos: ChapterInfoType[];
  subBookId: string;
  subBookNumber: number;
  subBookTitle: {
    ar: string;
    en: string;
    [key: string]: string;
  },
  noChapter: boolean,
};

type BookType = {
  bookId: string;
  bookImage: string;
  markImage?: string;
  bookTitle: {
    ar: string;
    en: string;
    [key: string]: string;
  };
  subBooks: SubBookInfoType[];
};

export type {
  VerseType,
  ChapterInfoType,
  SubBookInfoType,
  BookOverviewPropsType,
  BookType,
};
