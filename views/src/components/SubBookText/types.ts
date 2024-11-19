import { BookType, SubBookInfoType } from "@/pages/BookOverview/types"

type SubBookTextPropsType = {
  subBook?: SubBookInfoType,
  book?: BookType,
  languageCode: string,
  isQuranOrZabur?: boolean,
}

export type {
  SubBookTextPropsType
}