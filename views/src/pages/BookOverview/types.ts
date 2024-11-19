import { Dispatch } from "redux";
import { UserType } from "../types"

type BookOverviewPropsType = {
  currentUser: UserType;
  dispatch: Dispatch;
}

export type {
  BookOverviewPropsType,
}