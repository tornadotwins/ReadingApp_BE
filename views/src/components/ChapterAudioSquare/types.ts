type ChapterSquarePropsType = {
  chapterNumber: number;
  chapterId: string;
  audioStatus: string;

  onClick: (chapterId: string) => void;
}

export type {
  ChapterSquarePropsType,
}