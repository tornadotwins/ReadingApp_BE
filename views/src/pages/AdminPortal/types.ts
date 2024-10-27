import { Dispatch } from "redux";
import { UserType } from "../types";

type AdminPortalPropsType = {
  currentUser: UserType;
  dispatch: Dispatch;

  onSave: () => void;
  onAddPerson: () => void;
  onAddLang: () => void;
  onDelLang: () => void;
  onLogout : () => void;
}

export type {
  AdminPortalPropsType,
}