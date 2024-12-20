type TitleBlockPropsType = {
  language: string;
  inputVal: string;
  blockIndex: number;

  onInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type TextBlockPropsType = {
  language: string;
  inputVal: string;
  blockIndex: number;

  onInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type ImageBlockPropsType = {
  image: string;
  alt: string;
  blockIndex: number;

  onImageInputChange: (val: string) => void;
  onAltInputChange: (val: string) => void;
  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type CollapsibleBlockPropsType = {
  language: string;
  blockIndex: number

  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

type BlockHeaderPropsType = {
  title: string;
  blockIndex: number;

  onDelete: () => void;
  onMoveUp: (index: number) => void;
  onMoveDown: (index: number) => void;
}

export type {
  TitleBlockPropsType,
  TextBlockPropsType,
  ImageBlockPropsType,
  CollapsibleBlockPropsType,
  BlockHeaderPropsType,
}