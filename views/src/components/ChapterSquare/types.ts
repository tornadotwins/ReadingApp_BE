import { ChapterInfoType, SubBookInfoType } from "@/pages/BookOverview/types";

type ChapterSquarePropsType = {
  subBookInfo?: SubBookInfoType;
  chapterInfo?: ChapterInfoType;
  isCompleted?: boolean;
  isPublished: boolean;
  isSpecialBook?: boolean;

  onClick: (chapterId: string) => void;
}

export type {
  ChapterSquarePropsType,
}