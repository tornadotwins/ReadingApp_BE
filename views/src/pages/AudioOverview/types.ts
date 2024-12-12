import { Dispatch } from "redux";
import { ChapterInfoType } from "../BookOverview/types"
import { UserType } from "../types";

type AudioOverviewPropsType = {
  chapterInfo?: ChapterInfoType,
  currentUser: UserType,
  currentLanguage: string,
  currentBook: string,
  
  dispatch: Dispatch
};

type SelectOptionType = {
  label: string;
  value: string;
}

export type {
  AudioOverviewPropsType,
  SelectOptionType,
}