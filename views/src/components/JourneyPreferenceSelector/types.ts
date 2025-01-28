import { LanguageType } from "@/pages/types";

type JourneyPreferenceSelectorPropsType = {
  availableLanguages: LanguageType[];
  currentLanguage: string;
  isCompleted: boolean;
  isPublished: boolean;
  enableComplete: boolean;
  enablePublish: boolean;
  enableSaveBtn: boolean;

  handleLanguageChange: (event: React.ChangeEvent<{value: unknown}>) => void;
  handleCompleteChange: () => void;
  handlePublishChange: () => void;
  handleSavePreference: () => void;
}

export type {
  JourneyPreferenceSelectorPropsType,
}