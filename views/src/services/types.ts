import { SubBookModelType } from "@/pages/ChapterOverview/types";
import { IntroType } from "@/pages/IntroOverview/types";
import { ArticleVerseType, JourneyCardType } from "@/pages/JourneyOverview/types";
import { ParseDataType } from "@/pages/Translator/types";
import { AppTextType, ObjectType } from "@/pages/types";

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

type SaveJourneyRequestType = {
  languageCode: string;
  journeyCards: JourneyCardType[];
}

type SaveArticleRequestType = {
  parentId: string;
  languageCode: string;
  isCompleted: boolean;
  isPublished: boolean;
  verses: ArticleVerseType[];
}

type GetJourneyStageResponseType = {
  bookTitle: object;
  cards: JourneyCardType[];
  coverImage: string;
  markimage: string;
}

type GetArticleResponseType = {
  isCompleted: ObjectType;
  isPublished: ObjectType;
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
  SaveJourneyRequestType,
  SaveArticleRequestType,
  GetJourneyStageResponseType,
  GetArticleResponseType,
}