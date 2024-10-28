type DialogBoxProps = {
  title?: string;
  description?: string;
  agree?: string;
  disagree?: string;
  isOpen: boolean;
  onAgree?: () => void;
  onDisagree?: () => void;
  onClose?: () => void;
};

export type { DialogBoxProps };
