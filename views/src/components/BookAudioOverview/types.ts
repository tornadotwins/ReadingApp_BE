import { BookType } from "@/pages/BookOverview/types";

type ChapterAudioOverviewPropsType = {
  language: string;
  languageCode: string;
  bookTitle: string;
  bookInfo: BookType;
  isQuranOrZabur?: boolean;
}

export type {
  ChapterAudioOverviewPropsType,
}