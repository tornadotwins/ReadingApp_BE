type LanguageDialogPropsType = {
  isOpen: boolean;
  languages: string[];
  onConfirm: (language: string) => void;
  onCancel: () => void;
}

export type {
  LanguageDialogPropsType,
}