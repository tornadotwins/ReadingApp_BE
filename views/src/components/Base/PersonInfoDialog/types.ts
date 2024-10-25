type PersonInfoDialogType = {
  isOpen: boolean,
  onSave: (username: string, password: string, isAdmin: boolean) => void,
  onCancel: () => void,
};

export type {
  PersonInfoDialogType,
};
