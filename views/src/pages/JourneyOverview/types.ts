import { Dispatch } from "redux";
import { UserType } from "../types"

type JourneyOverviewPropsType = {
  currentUser: UserType;
  currentLanguage: string;
  currentJourneyTitle: string;

  dispatch: Dispatch
}

type JourneyBlockType = {
  id: string;
  blockIndex: number;
  type: 'directory' | 'article',
  title: string;
  seriesTitle: string;
  seriesLogo: string;
}

export type {
  JourneyOverviewPropsType,
  JourneyBlockType,
}