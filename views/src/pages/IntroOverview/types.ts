import { Dispatch } from "redux";

import { UserType } from "../types";
import { BookType, SubBookInfoType } from "../BookOverview/types";

type IntroOverviewPropsType = {
  subBookInfo: SubBookInfoType,
  bookInfos: BookType[],
  currentLanguage: string,
  currentUser: UserType,
  currentBook: string,

  dispatch: Dispatch
}

type SelectOptionType = {
  label: string;
  value: string;
}

type ImageValType = {
  image: string;
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
  value: string | ImageValType | CollapsibleValType;
}

type IntroType = {
  id?: string;
  chapter: string;
  title: object;
  text: object;
  image: object;
  number: number;
  isCollapse: boolean;
  content: any[];
}

export type {
  IntroOverviewPropsType,
  SelectOptionType,
  ImageValType, 
  CollapsibleValType,
  BlockType,
  IntroType,
}