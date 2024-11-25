import {BookType} from "@/pages/BookOverview/types";

type ChapterTextOverviewPropsType = {
  language: string;
  languageCode: string;
  bookTitle: string;
  bookInfo: BookType;
  isQuranOrZabur?: boolean;

  onClickSquare: (chapterId: string) => void;
}

export type {
  ChapterTextOverviewPropsType,
}