import { Dispatch } from "redux";
import { ObjectType, UserType } from "../types"

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

type JourneyCardType = {
  id?: string;
  number: number;
  parent: string;
  parentModel: string;
  depth: number;
  isArticle: boolean;
  image: ObjectType;
  seriesTitle: ObjectType;
  title: ObjectType;
}

export type {
  JourneyOverviewPropsType,
  JourneyBlockType,
  JourneyCardType,
}