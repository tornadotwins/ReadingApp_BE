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
  lastLoggedAt: number;
};

export type {
  UserType,
};