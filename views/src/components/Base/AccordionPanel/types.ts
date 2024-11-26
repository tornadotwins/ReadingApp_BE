import { UserType } from "@/pages/types";

type AccordionExpandProps = {
  label: string;
  detail: any;
  value?: string;
  summaryTitle?: string;
  isComplet?: boolean;
  isPublish?: boolean;
  summaryIcon?: boolean;
  hasSwitches?: boolean;
  showArrow?: boolean;
  outArrow?: boolean;
  currentUser?: UserType;
  currentLanguage?: string;

  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrentChapterTitleEnterPressed?: (value: string) => void;
};

export type { AccordionExpandProps };
