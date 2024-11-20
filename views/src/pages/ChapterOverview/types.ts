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
  dispatch: Dispatch;
}

export type {
  ChapterOverviewPropsType,
}