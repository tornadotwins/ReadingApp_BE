import { BookType, SubBookInfoType } from "@/pages/BookOverview/types"

type SubBookAudioPropsType = {
  book?: BookType,
  subBook?: SubBookInfoType,
  languageCode: string,
  isQuranOrZabur?: boolean,

  moveToAudioOverview: (chapterId: string) => void,
}

export type {
  SubBookAudioPropsType,
}