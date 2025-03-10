import { SelectBoxOption } from "../Base/Select/types";

type JourneyBlockPropsType = {
  blockIndex: number;
  blockId: string;
  isArticle: boolean;
  language: string;
  title: string;
  seriesTitle: string;
  seriesLogo: string;
  seriesLogoOptions: SelectBoxOption[];
  disableOpen: boolean;

  onTitleChange: (val: string) => void;
  onSeriesTitleChange: (val: string) => void;
  onSeriesLogoChange: (event: React.ChangeEvent<{value: unknown}>) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
  onOpen: () => void;
}

type JourneyBlockHeaderPropsType = {
  title: string;
  blockIndex: number;
  disableDelete?: boolean;
  disableMoveUp?: boolean;
  disableMoveDown?: boolean;

  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

export type {
  JourneyBlockPropsType,
  JourneyBlockHeaderPropsType,
}
