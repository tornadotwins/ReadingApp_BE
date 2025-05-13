import {BookType} from "@/pages/BookOverview/types";
import { AppTextType } from "@/pages/types";

type ChapterTextOverviewPropsType = {
  language: string;
  languageCode: string;
  bookTitle: string;
  bookInfo: BookType;
  subBookTitleInfo?: AppTextType[];
  isQuranOrZabur?: boolean;

  onClickSquare: (chapterId: string) => void;
}

export type {
  ChapterTextOverviewPropsType,
}