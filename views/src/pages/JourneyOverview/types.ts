import { Dispatch } from "redux";
import { ObjectType, UserType } from "../types"

type JourneyOverviewPropsType = {
  currentUser: UserType;
  currentLanguage: string;
  currentJourneyTitle: string;
  parentJourneyId: string;
  parentJourneyTitle: string;

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
  _id?: string;
  number: number;
  parent: string;
  parentModel: string;
  depth: number;
  isArticle: boolean;
  image: ObjectType;
  seriesTitle: ObjectType;
  title: ObjectType;
  isCompleted?: ObjectType;
  isPublished?: ObjectType;
}

type ArticleVerseType = {
  id?: string;
  _id?: string;
  article: string;
  title: ObjectType;
  text: ObjectType;
  image: ObjectType;
  number: number;
  isCollapse: boolean;
  content: any[];
}

export type {
  JourneyOverviewPropsType,
  JourneyBlockType,
  JourneyCardType,
  ArticleVerseType,
}