type RoleType = {
  [key: string]: string;
}

type UserType = {
  id: string;
  role: Array<RoleType>;
  username: string;
  isAdmin: boolean;
  token: string;
}

export type {
  UserType,
}