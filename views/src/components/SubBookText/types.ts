import { BookType, SubBookInfoType } from "@/pages/BookOverview/types"
import { AppTextType } from "@/pages/types";

type SubBookTextPropsType = {
  subBook?: SubBookInfoType,
  subBookTitleInfo?: AppTextType[],
  book?: BookType,
  languageCode: string,
  isQuranOrZabur?: boolean,

  onChapterClick: (chapterId: string) => void;
}

export type {
  SubBookTextPropsType
}