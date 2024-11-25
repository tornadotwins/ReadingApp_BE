import { UserType } from "@/pages/types"

type SummaryPropsType = {
  currentUser: UserType,
  currentLanguage: string,
  currentBook: string,
  totalCountVerse: number,
  languageCountVerse: number,
  arabicChapterTitle?: string,
  englishChapterTitle?: string,
  transliteration?: string,
  currentChapterTitle?: string,
  isComplete: boolean,
  isPublish: boolean,
  isSpecialBook: boolean,

  translateComplete: (value: boolean) => void,
  translatePublish: (value: boolean) => void,
  handleCurrentChapterTitleChange?: (value: string) => void,
  handleArabicChapterTitleChange?: (value: string) => void,
  handleTransliterationChapterTitleChange?: (value: string) => void,
  handleEnglishChapterTitleChange?: (value: string) => void,
  handleUpdateChapterSummary?: (currentChapterTitle: string, arabicChapterTitle: string, tralisteration: string, englishChapterTitle: string) => void,
}

export type {
  SummaryPropsType,
}