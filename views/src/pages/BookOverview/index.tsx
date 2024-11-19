import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppStateType } from '@/reducers/types';
import { toast, Bounce } from "material-react-toastify";

import { SelectBox, Text, LoadingOverlay } from "@/components/Base";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";

import {
  StyledContainer,
  StyledBookOverviewContainer,
  StyledLanguageContainer,
  StyledBookSelectorContainer
} from "./styles";
import { BookOverviewPropsType, BookType } from "./types";
import { LanguageType } from "../types";
import {
  ACCESS_TOKEN,
  BOOK_INFO,
  BOOK_INJIL,
  BOOK_QURAN,
  BOOK_TAWRAT,
  BOOK_ZABUR
} from "@/config";
import actionTypes from "@/actions/actionTypes";
import useOrientation from "@/hooks/useOrientation";
import BookTextOverview from "@/components/BookTextOverview";
import {
  getLanguageCodeFromLanguage,
  getLanguageFromLanguageCode
} from "@/utils";

import bookService from '../../../services/book.services';

const BookOverview = (props: BookOverviewPropsType) => {
  const [selectedBook, setSelectedBook] = useState(BOOK_QURAN);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookType | null>(null);

  const navigate = useNavigate();

  const toolsProps = [
    {
      toolName: 'Western',
      onClick: () => { },
    },
    {
      toolName: 'Arabic',
      onClick: () => { },
    }
  ];

  const bookSelectors = [
    {
      bookTitle: "App Text",
      onClick: () => setSelectedBook("App Text"),
    },
    {
      bookTitle: BOOK_QURAN,
      onClick: () => setSelectedBook("Qur'an"),
    },
    {
      bookTitle: BOOK_INJIL,
      onClick: () => setSelectedBook("Injil"),
    },
    {
      bookTitle: BOOK_ZABUR,
      onClick: () => setSelectedBook("Zabur"),
    },
    {
      bookTitle: BOOK_TAWRAT,
      onClick: () => setSelectedBook("Tawrat"),
    },
  ];

  // Get Languages
  useEffect(() => {
    if (!props.currentUser?.roles) return;

    // Convert roles to language objects and remove duplicates
    const uniqueLanguages = props.currentUser.roles.reduce<LanguageType[]>((acc, role) => {
      const permission = role.role;

      if (permission != 'none') {
        const language = role.language;
        const languageCode = getLanguageCodeFromLanguage(language);

        // Check if this language is already in the accumulator
        const exists = acc.some(item => item.value === languageCode);

        if (!exists) {
          acc.push({ value: languageCode, label: language });
        }
      }

      return acc;
    }, []);

    setLanguages(uniqueLanguages);

    // Set default language if current language isn't in the list
    if (uniqueLanguages.length > 0 && !uniqueLanguages.some(lang => lang.value === currentLanguage)) {
      setCurrentLanguage(uniqueLanguages[0].value);
    }
  }, [props.currentUser, currentLanguage]);

  // Get book information
  useEffect(() => {
    setIsLoading(true);

    // Check if the current book is existing in local storage. if not, fetch the book data
    const strSavedBookInfo = localStorage.getItem(BOOK_INFO);
    const jsonSavedBookInfo = strSavedBookInfo != null ? JSON.parse(strSavedBookInfo) : [];
    const bookInfo = jsonSavedBookInfo.find((book: BookType) => book.bookTitle.en == selectedBook);
    if (bookInfo) {
      setBookInfo(bookInfo)

      setIsLoading(false);
    } else {
      bookService
        .getBookInfoByTitle(selectedBook)
        .then((result: BookType) => {
          setBookInfo(result);

          // Save the book info to local storage for performance
          localStorage.setItem(BOOK_INFO, JSON.stringify([...jsonSavedBookInfo, result]));

          setIsLoading(false);
        })
        .catch(error => {
          toast.error(error, {
            position: 'top-right',
            draggable: true,
            theme: 'colored',
            transition: Bounce,
            closeOnClick: true,
            pauseOnHover: true,
            hideProgressBar: false,
            autoClose: 3000
          });
          setIsLoading(false);
        })
    }
  }, [selectedBook]);

  const isPortrait = useOrientation();

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);
  };

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(BOOK_INFO);

    props.dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: {
        user: null,
      },
    });

    navigate('/admin');
  };

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header isLoggedIn={true} username={props.currentUser.username} isAdmin={props.currentUser.isAdmin} onLogOut={onLogout} />

        <StyledBookOverviewContainer>
          <Tools tools={toolsProps} />

          <StyledBookSelectorContainer>
            <BookSelector
              books={bookSelectors}
              selectedBook={selectedBook}
            />
          </StyledBookSelectorContainer>

          <StyledLanguageContainer>
            <Text color="#155D74" fontWeight="700" fontFamily="'Baloo Da 2'">
              {selectedBook + ' overview'}
            </Text>

            <SelectBox
              label=""
              options={languages}
              value={currentLanguage}
              backgroundColor="#fff"
              textColor="#155D74"
              onChange={handleLanguageChange}
            />
          </StyledLanguageContainer>

          {bookInfo && (
            <BookTextOverview
              bookTitle={selectedBook}
              language={getLanguageFromLanguageCode(currentLanguage)}
              languageCode={currentLanguage}
              bookInfo={bookInfo}
            />
          )}
        </StyledBookOverviewContainer>
      </StyledContainer>

      {isLoading && <LoadingOverlay />}
    </>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOverview);