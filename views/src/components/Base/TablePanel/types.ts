type UserInfoType = {
  userName: string;
  password: string;
  isAdmin: boolean;
  lastLogin: string;
  arabic: string;
  english: string;
  [key: string]: string | boolean;
  // [e: string]: string | boolean;
};

type TablePanelType =  {
  headers: string[];
  users: UserInfoType[];
  onEditUser?: (user: UserInfoType) => void;
  onDeleteUser?: (userName: string) => void;
  onUpdateUserRole?: (userName: string, language: string, role: string) => void;
};

type RoleType = 'none' | 'translator' | 'publisher';

type UserRowType = {
  user: UserInfoType,
  headers: string[],
  onEditUser?: (user: UserInfoType) => void;
  onDeleteUser?: (userName: string) => void;
  onUpdateUserRole?: (userName: string, language: string, role: RoleType) => void;
}

export type {
  UserInfoType,
  TablePanelType,
  RoleType,
  UserRowType,
};