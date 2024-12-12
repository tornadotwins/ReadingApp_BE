import { BookType } from "@/pages/BookOverview/types";

type ChapterAudioOverviewPropsType = {
  language: string;
  languageCode: string;
  bookTitle: string;
  bookInfo: BookType;
  isQuranOrZabur?: boolean;

  moveToAudioOverview: () => void;
}

export type {
  ChapterAudioOverviewPropsType,
}