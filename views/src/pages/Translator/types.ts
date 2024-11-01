type TranslatorPortalPropsType = {
  title: string;
  
}

type ParseDataType = {
  [key: string]: string,
}

type ChapterType = {
  book: string;
  subBook: string;
  chapter: string;
  verses: ParseDataType[];
}

export type {
  TranslatorPortalPropsType,
  ParseDataType,
  ChapterType
}