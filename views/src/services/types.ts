import { SubBookModelType } from "@/pages/ChapterOverview/types";
import { ParseDataType } from "@/pages/Translator/types";

type UserRequestType = {
  id?: string;
  username: string;
  password: string;
  isAdmin?: boolean;
}

type ChapterRequestType = {
  chapterNumber: number,
  subBook: string,
  audio: object,
  isTranslated: object,
  isCompleted: object,
  isPublished: object,
}

type TranslatorRequestType = {
  bookInfos: ParseDataType[],
  bookTitle: string,
  language: string,
}

type UpdateAppTextPageRequestType = {
  pageId: string,
  updates: any
}

type UpdateChapterRequestType = {
  chapterId: string,
  newChapterInfo: ChapterRequestType,
}

type UpdateSubBookRequestType = {
  subBookId: string,
  newSubBookInfo: SubBookModelType,
}

export type {
  UserRequestType,
  TranslatorRequestType,
  UpdateAppTextPageRequestType,
  UpdateChapterRequestType,
  UpdateSubBookRequestType,
}