type HeaderType = {
  header?: string;
  isLoggedIn: boolean;
  username?: string;
  isAdmin?: boolean;
  isAdminPage?: boolean;
  isJourneyPage?: boolean;

  onLogOut?: () => void;
}

export type { HeaderType }