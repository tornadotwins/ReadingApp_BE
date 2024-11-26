import { UserType } from "@/pages/types";

type AccordionExpandProps = {
  label: string;
  detail: any;
  value?: string;
  summaryTitle?: string;
  isComplete?: boolean;
  isPublish?: boolean;
  summaryIcon?: boolean;
  hasSwitches?: boolean;
  showArrow?: boolean;
  outArrow?: boolean;
  currentUser?: UserType;
  currentLanguage?: string;

  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrentChapterTitleEnterPressed?: (value: string) => void;
  onCompleteChange?: (value: boolean) => void;
  onPublishChange?: (value: boolean) => void;
};

export type { AccordionExpandProps };
