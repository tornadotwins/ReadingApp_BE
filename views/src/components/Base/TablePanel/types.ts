import { UserType } from "@/pages/types";

type TablePanelType =  {
  headers: string[];
  users: UserType[];
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (id: string) => void;
  onUpdateUserRole?: (id: string, language: string, role: string) => void;
};

type UserRowType = {
  user: UserType,
  headers: string[],
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (id: string) => void;
  onUpdateUserRole?: (id: string, language: string, role: string) => void;
}

export type {
  TablePanelType,
  UserRowType,
};