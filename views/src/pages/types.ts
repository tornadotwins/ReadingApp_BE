type RoleType = {
  language: string;
  role: string;
};

type UserType = {
  id: string;
  username: string;
  password: string;
  role: Array<RoleType>;
  isAdmin: boolean;
  lastLoggedInAt: number;
};

export type {
  UserType,
};