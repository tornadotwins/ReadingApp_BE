import { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate } from "react-router-dom";

import Header from "@/components/Header";
import BookSelector from "@/components/BookSelector";

import useOrientation from "@/hooks/useOrientation";
import { AppStateType } from "@/reducers/types";
import { AudioOverviewPropsType } from "./types";
import {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledAudioOverviewContainer,
} from "./styles";

import actionTypes from "@/actions/actionTypes";
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
} from "@/config";
import Tools from "@/components/Tools";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function AudioOverview(props: AudioOverviewPropsType) {
  const [selectedBook, setSelectedBook] = useState(props.currentBook);

  const navigate = useNavigate();
  const isPortrait = useOrientation();

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.RESET_USER
    });

    props.dispatch({
      type: actionTypes.RESET_BOOK
    });

    props.dispatch({
      type: actionTypes.RESET_APP_TEXT_PAGES
    });

    navigate('/admin');
  };

  const _renderHeader = () => {
    return (
      <Header
        isLoggedIn
        username={props.currentUser.username}
        isAdmin={props.currentUser.isAdmin}
        onLogOut={onLogout}
      />
    )
  }

  const handleSelectedBook = (bookTitle: string) => {
    setSelectedBook(bookTitle);
    navigate('/admin/bookoverview')

    props.dispatch({
      type: actionTypes.SET_BOOK,
      payload: {
        bookTitle
      }
    })
  };

  const _renderBookSelector = () => {
    return (
      <StyledBookSelectorContainer>
        <BookSelector
          books={BOOK_SELECTORS.map(book => ({
            bookTitle: book.bookTitle,
            onClick: () => handleSelectedBook(book.value)
          }))}
          selectedBook={selectedBook}
        />
      </StyledBookSelectorContainer>
    )
  };

  const _renderBody = () => {
    return (
      <StyledAudioOverviewContainer>
        <Tools tools={TOOLS} />
        {_renderBookSelector()}
      </StyledAudioOverviewContainer>
    )
  }

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderHeader()}

        {_renderBody()}
      </StyledContainer>
    </>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return { dispatch };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
    bookInfos: state.book.bookInfos,
    currentLanguage: state.book.language,
    currentBook: state.book.book,
    appTextPages: state.translator.appTextPages,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioOverview);