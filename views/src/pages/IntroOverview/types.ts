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

export type {
  IntroOverviewPropsType,
  SelectOptionType,
}