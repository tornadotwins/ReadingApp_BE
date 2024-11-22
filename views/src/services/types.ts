import { ChapterInfoType } from "@/pages/BookOverview/types";
import { ParseDataType } from "@/pages/Translator/types";

type UserRequestType = {
  id?: string;
  username: string;
  password: string;
  isAdmin?: boolean;
}

type TranslatorRequestType = {
  bookInfos: ParseDataType[],
  bookTitle: string,
  language: string,
}

type UpdateChapterInfoType = {
  bookId: string,
  subBookId: string,
  chapterId: string,
  newChapterInfo: ChapterInfoType,
}

export type {
  UserRequestType,
  TranslatorRequestType,
  UpdateChapterInfoType,
}