import { Dispatch } from "redux";
import { UserType } from "../types"

type AppTextOverviewPropsType = {
  currentUser: UserType;
  currentLanguage: string;
  
  dispatch: Dispatch;
}

export type {
  AppTextOverviewPropsType,
}