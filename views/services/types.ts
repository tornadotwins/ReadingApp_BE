type LoginType = {
  username: string;
  password: string;
}

type AddUserType = {
  username: string;
  password: string;
  isAdmin: boolean;
}

export type {
  LoginType,
  AddUserType,
}