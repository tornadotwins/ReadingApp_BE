type TitleBlockPropsType = {
  language: string;
  inputVal: string;

  onInputChange: (val: string) => void;
  onDelete: () => void;
}

type TextBlockPropsType = {
  language: string;
  inputVal: string;

  onInputChange: (val: string) => void;
  onDelete: () => void;
}

type ImageBlockPropsType = {
  image: string;
  alt: string;

  onImageInputChange: (val: string) => void;
  onAltInputChange: (val: string) => void;
  onDelete: () => void;
}

type CollapsibleBlockPropsType = {
  language: string;
  
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