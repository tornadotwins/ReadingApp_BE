type BookSelectType = {
  bookTitle: string;
  onClick: () => void;
}

type BookSelectorPropsType = {
  books: BookSelectType[];
  selectedBook: string;
}

export type {
  BookSelectType,
  BookSelectorPropsType,
}