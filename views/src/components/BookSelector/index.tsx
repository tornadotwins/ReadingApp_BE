import { Text } from "../Base";

import { StyledBookSelector, StyledBookSelectorContainer } from "./styles";
import { BookSelectorPropsType, BookSelectType } from "./types";

const BookSelector = (props: BookSelectorPropsType) => {
  return (
    <StyledBookSelectorContainer>
      {
        props.books.map((book: BookSelectType, index: number) =>
          <StyledBookSelector key={index} onClick={book.onClick} isSelected={book.bookTitle == props.selectedBook}>
            <Text fontFamily="'Baloo Da 2'" fontWeight="500" fontSize={16} lineHeight={24}>
              {book.bookTitle}
            </Text>
          </StyledBookSelector>
        )
      }
    </StyledBookSelectorContainer>
  )
};

export default BookSelector;
