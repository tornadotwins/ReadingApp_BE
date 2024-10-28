type RoleType = {
  language: string;
  role: string;
};

type UserType = {
  _id: string;
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