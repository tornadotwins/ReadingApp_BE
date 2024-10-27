import { UserType } from "../types";

type AdminPortalPropsType = {
  currentUser: UserType;
  dispatch: any;

  onSave: () => void;
  onAddPerson: () => void;
  onAddLang: () => void;
  onDelLang: () => void;
  onLogout : () => void;
}

export type {
  AdminPortalPropsType,
}