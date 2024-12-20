type TitleBlockPropsType = {
  language: string;

  onInputChange: (val: string) => void;
  onDelete: () => void;
}

type TextBlockPropsType = {
  language: string;

  onInputChange: (val: string) => void;
  onDelete: () => void;
}

type ImageBlockPropsType = {
  onDelete: () => void;
}

type CollapsibleBlockPropsType = {
  onDelete: () => void;
}

type BlockHeaderPropsType = {
  title: string;
  onDelete: () => void;
}

export type {
  TitleBlockPropsType,
  TextBlockPropsType,
  ImageBlockPropsType,
  CollapsibleBlockPropsType,
  BlockHeaderPropsType,
}