import { Dispatch } from "redux";
import { AppTextPageType, UserType } from "../types"

type AppTextOverviewPropsType = {
  currentUser: UserType;
  currentLanguage: string;
  appTextPages: AppTextPageType[];
  
  dispatch: Dispatch;
}

export type {
  AppTextOverviewPropsType,
}