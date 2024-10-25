type LoginValues = {
  username: string;
  password: string;
};

type LoginBoxType = {
  onLogIn: (username: string, password: string) => void;
}

type LoginFormType = {
  onLogIn: (values: LoginValues) => void;
}

export type { LoginBoxType, LoginFormType, LoginValues };