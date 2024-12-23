import { BlockType, ImageValType, IntroType } from "@/pages/IntroOverview/types";

type TitleBlockPropsType = {
  language: string;
  inputVal: string;
  blockIndex: number;
  disableDelete?: boolean;
  disableMoveUp?: boolean;
  disableMovedown?: boolean;

  onInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type TextBlockPropsType = {
  language: string;
  inputVal: string;
  blockIndex: number;
  disableDelete?: boolean;
  disableMoveUp?: boolean;
  disableMovedown?: boolean;

  onInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type ImageBlockPropsType = {
  url: string;
  alt: string;
  blockIndex: number;
  disableDelete?: boolean;
  disableMoveUp?: boolean;
  disableMovedown?: boolean;

  onImageInputChange: (val: string) => void;
  onAltInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type CommonType = {
  [key: string]: string;
}

type BlockValType = {
  id: string;
  isCollpase: boolean;
  number: number;
  title: CommonType;
  content: CommonType[];
}

type CollapsibleBlockPropsType = {
  language: string;
  blockIndex: number;
  value?: IntroType;
  title?: string;
  contents?: (string | ImageValType | BlockType | CommonType | IntroType)[];

  onChange: (val: BlockType[]) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type BlockHeaderPropsType = {
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
  TitleBlockPropsType,
  TextBlockPropsType,
  ImageBlockPropsType,
  BlockValType,
  CollapsibleBlockPropsType,
  BlockHeaderPropsType,
}