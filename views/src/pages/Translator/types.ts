import { Dispatch } from "redux";
import { UserType } from "../types";

type TranslatorPropsType = {
  title: string;
  currentUser: UserType;
  currentLanguage: string;
  currentBook: string;
  
  dispatch: Dispatch;
}

type ParseDataType = {
  [key: string]: string,
}

type ChapterType = {
  book: string;
  subBook: string;
  chapter: string;
  verses: ParseDataType[];
}

export type {
  TranslatorPropsType,
  ParseDataType,
  ChapterType
}