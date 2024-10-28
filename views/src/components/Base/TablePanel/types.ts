import { UserType } from "@/pages/types";

type TablePanelType = {
  headers: string[];
  users: UserType[];
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (id: string) => void;
  onUpdateUserRole?: (id: string, language: string, role: string) => void;
  // Optional: You could add an onUserChange if you want to handle user updates as a whole
  onUserChange?: (updatedUsers: UserType[]) => void;
};

type UserRowType = {
  user: UserType;
  headers: string[];
  onEditUser?: (user: UserType) => void;
  onDeleteUser?: (id: string) => void;
  onUpdateUserRole?: (id: string, language: string, role: string) => void;
  // Optional: This can be added to handle updates for each user row
  onUserChange?: (updatedUser: UserType) => void;
};

export type {
  TablePanelType,
  UserRowType,
};
