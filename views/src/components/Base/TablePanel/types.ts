import { UserType } from "@/pages/types";

type TablePanelType =  {
  headers: string[];
  users: UserType[];
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (userName: string) => void;
  onUpdateUserRole?: (userName: string, language: string, role: string) => void;
};

type UserRowType = {
  user: UserType,
  headers: string[],
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (userName: string) => void;
  onUpdateUserRole?: (userName: string, language: string, role: string) => void;
}

export type {
  TablePanelType,
  UserRowType,
};