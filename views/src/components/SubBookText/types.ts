import { BookType, SubBookInfoType } from "@/pages/BookOverview/types"

type SubBookTextPropsType = {
  subBook?: SubBookInfoType,
  book?: BookType,
  languageCode: string,
  isQuranOrZabur?: boolean,

  onChapterClick: (chapterId: string) => void;
}

export type {
  SubBookTextPropsType
}