import { UserType } from "@/pages/types";

type StateType = {
  currentUser: UserType | null;
}

type UserActionType = {
  type: string,
  payload: {
    user: UserType,
  }
}

type AppStateType = {
  user: {
    currentUser: UserType | null;
  }
}

export type {
  StateType,
  UserActionType,
  AppStateType,
}