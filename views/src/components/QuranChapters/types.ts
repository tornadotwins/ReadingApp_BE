type QuranChapterType = {
  chapterNumber: number;
  status: string;
}

type QuranChaptersPropsType = {
  chapters: QuranChapterType[];
  onChapterClick?: (chapterNumber: number) => void;
}

export type {
  QuranChapterType,
  QuranChaptersPropsType
}