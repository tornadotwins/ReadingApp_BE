import { Dispatch } from "redux";
import {
  BookType,
  ChapterInfoType,
  SubBookInfoType
} from "../BookOverview/types"
import { UserType } from "../types";

type ChapterOverviewPropsType = {
  chapterInfo?: ChapterInfoType;
  subBookInfo?: SubBookInfoType;
  currentUser: UserType;
  bookInfos: BookType[];
  chapterInfos: ChapterInfoType[];
  currentLanguage: string;
  dispatch: Dispatch;
}

type SelectOptionType = {
  label: string;
  value: string;
}

export type {
  ChapterOverviewPropsType,
  SelectOptionType,
}