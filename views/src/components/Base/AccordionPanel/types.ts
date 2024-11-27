import {
  UserType,
  AppTextPageStatusType,
} from "@/pages/types";

type AccordionExpandProps = {
  label: string;
  detail: any;
  value?: string;
  summaryTitle?: string;
  pageId?: string;
  isComplete?: {
    [key: string]: boolean,
  };
  isPublish?: {
    [key: string]: boolean,
  };
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
  onChangeAppTextPageStatus?: (status: AppTextPageStatusType) => void;
};

export type { AccordionExpandProps };
