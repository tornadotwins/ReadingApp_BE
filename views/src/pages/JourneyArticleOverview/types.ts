import { Dispatch } from "redux";

import { UserType } from "../types";
import { BookType, SubBookInfoType } from "../BookOverview/types";

type ArticleOverviewPropsType = {
  subBookInfo: SubBookInfoType,
  bookInfos: BookType[],
  currentLanguage: string,
  currentUser: UserType,
  currentJourneyBook: string,
  currentArticleId: string,
  articleTitle: string,

  dispatch: Dispatch
}

type SelectOptionType = {
  label: string;
  value: string;
}

type ImageValType = {
  url: string;
  alt: string;
}

type CollapsibleContentType = {
  id: string;
  blockIndex: number;
  type: 'title' | 'text' | 'image';
  value: string | ImageValType;
}

type CollapsibleValType = {
  [key: string]: CollapsibleContentType
}

type BlockType = {
  id: string;
  blockIndex: number;
  type: 'title' | 'text' | 'image' | 'collapsible';
  value: string | ImageValType | CollapsibleValType | IntroType;
}

type IntroInnerObjType = {
  [key: string]: string;
}

type IntroType = {
  id?: string;
  chapter: string;
  title: IntroInnerObjType;
  text: IntroInnerObjType;
  image: IntroInnerObjType;
  number: number;
  isCollapse: boolean;
  content: any[];
}

export type {
  ArticleOverviewPropsType,
  SelectOptionType,
  ImageValType, 
  CollapsibleValType,
  BlockType,
  IntroType,
}
