import { Dispatch } from "redux";
import { UserType } from "../types"

type AppTextOverviewPropsType = {
  currentUser: UserType;
  
  dispatch: Dispatch;
}

export type {
  AppTextOverviewPropsType,
}