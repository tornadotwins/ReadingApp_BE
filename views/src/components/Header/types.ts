type HeaderType = {
  header: string;
  isLoggedIn: boolean;
  username?: string;

  onLogOut?: () => void;
}

export type { HeaderType }