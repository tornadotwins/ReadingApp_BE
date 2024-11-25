type AccordionExpandProps = {
  label: string;
  detail: any;
  value?: string;
  summaryTitle?: string;
  showArrow?: boolean;
  outArrow?: boolean;

  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onCurrentChapterTitleEnterPressed?: (value: string) => void;
};

export type { AccordionExpandProps };
