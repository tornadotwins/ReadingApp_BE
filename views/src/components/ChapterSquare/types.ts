import { ChapterInfoType, SubBookInfoType } from "@/pages/BookOverview/types";

type ChapterSquarePropsType = {
  subBookInfo?: SubBookInfoType;
  chapterInfo?: ChapterInfoType;
  translationStatus: string;

  onClick: (chapterId: string) => void;
}

export type {
  ChapterSquarePropsType,
}