import { UserType } from "@/pages/types";

type PersonInfoDialogType = {
  isOpen: boolean,
  user?: UserType,
  onSave: (username: string, password: string, isAdmin: boolean) => void,
  onCancel: () => void,
};

export type {
  PersonInfoDialogType,
};
