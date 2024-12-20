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

type CollapsibleValType = {
  title: string;
  content: string;
}

type BlockType = {
  id: string;
  type: 'title' | 'text' | 'image' | 'collapsible';
  value: string | ImageValType | CollapsibleValType;
}

export type {
  IntroOverviewPropsType,
  SelectOptionType,
  ImageValType, 
  CollapsibleValType,
  BlockType,
}