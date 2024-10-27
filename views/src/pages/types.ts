type RoleType = {
  language: string;
  role: string;
};

type UserType = {
  id: string;
  username: string;
  password: string;
  roles: RoleType[];
  isAdmin: boolean;
  lastLoggedInAt: number;
};

export type {
  RoleType,
  UserType,
};