import { SubBookModelType } from "@/pages/ChapterOverview/types";
import { IntroType } from "@/pages/IntroOverview/types";
import { ArticleVerseType } from "@/pages/JourneyOverview/types";
import { ParseDataType } from "@/pages/Translator/types";
import { AppTextType } from "@/pages/types";

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

type UpdateAppTextRequestType = {
  texts: AppTextType[]
}

type UpdateSubBookRequestType = {
  subBookId: string,
  newSubBookInfo: SubBookModelType,
}

type SaveMarkerRequestType = {
  chapterId: string,
  languageCode: string,
  markerData: object[],
}

type IntroRequestType = {
  languageCode: string;
  subBookId: string;
  chapterId: string;
  isCompleted: object,
  isPublished: object,
  verses: IntroType[],
}

type SaveArticleRequestType = {
  parentId: string;
  languageCode: string;
  isCompleted: boolean;
  isPublished: boolean;
  verses: ArticleVerseType[];
}

export type {
  UserRequestType,
  TranslatorRequestType,
  UpdateAppTextPageRequestType,
  UpdateChapterRequestType,
  UpdateAppTextRequestType,
  UpdateSubBookRequestType,
  SaveMarkerRequestType,
  IntroRequestType,
  SaveArticleRequestType,
}