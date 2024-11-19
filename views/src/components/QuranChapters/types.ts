import { BookType } from "@/pages/BookOverview/types";

type QuranChapterType = {
  chapterNumber: number;
  status: string;
}

type QuranChaptersPropsType = {
  bookInfo: BookType;
  onChapterClick?: (chapterNumber: number) => void;
}

export type {
  QuranChapterType,
  QuranChaptersPropsType
}