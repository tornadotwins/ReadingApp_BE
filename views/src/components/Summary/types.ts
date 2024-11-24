import { UserType } from "@/pages/types"

type SummaryPropsType = {
  currentUser: UserType,
  currentLanguage: string,
  currentBook: string,
  totalCountVerse: number,
  languageCountVerse: number,
  isComplete: boolean,
  isPublish: boolean,
  isSpecialBook: boolean,

  translateComplete: (value: boolean) => void,
  translatePublish: (value: boolean) => void
}

export type {
  SummaryPropsType,
}