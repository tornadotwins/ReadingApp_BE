import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { toast, Bounce } from "material-react-toastify";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Component Imports
import { SelectBox, Text, LoadingOverlay, Button } from "@/components/Base";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import BookTextOverview from "@/components/BookTextOverview";
import BookAudioOverview from "@/components/BookAudioOverview";
import BookReferenceOverview from "@/components/BookReferenceOverview";

// Style Imports
import {
  StyledContainer,
  StyledBookOverviewContainer,
  StyledSelectContainer,
  StyledBookSelectorContainer,
  StyledUploadButtonContainer,
} from "./styles";

// Type Imports
import { BookOverviewPropsType, BookType } from "./types";
import { LanguageType } from "../types";

// Config and Utility Imports
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
import {
  getLanguageCodeFromLanguage,
  getLanguageFromLanguageCode
} from "@/utils";

import bookService from '../../../services/book.services';
import { AppStateType } from '@/reducers/types';

// Constants
const BOOK_SELECTORS = [
  { bookTitle: "App Text", value: "App Text" },
  { bookTitle: BOOK_QURAN, value: "Qur'an" },
  { bookTitle: BOOK_INJIL, value: "Injil" },
  { bookTitle: BOOK_ZABUR, value: "Zabur" },
  { bookTitle: BOOK_TAWRAT, value: "Tawrat" },
];

const BOOK_OVERVIEW_TYPES = [
  { value: 'Text', label: 'Text' },
  { value: 'Audio', label: 'Audio' },
  { value: 'Reference', label: 'Reference' }
];

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

const BookOverview: React.FC<BookOverviewPropsType> = (props) => {
  const [selectedBook, setSelectedBook] = useState(BOOK_QURAN);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentBookOverviewType, setCurrentBookOverviewType] = useState('Text');
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookType | null>(null);

  const navigate = useNavigate();
  const isPortrait = useOrientation();

  // Memoized language processing
  const processLanguages = useCallback(() => {
    if (!props.currentUser?.roles) return [];

    const uniqueLanguages = props.currentUser.roles.reduce<LanguageType[]>((acc, role) => {
      if (role.role !== 'none') {
        const languageCode = getLanguageCodeFromLanguage(role.language);
        const exists = acc.some(item => item.value === languageCode);

        if (!exists) {
          acc.push({ value: languageCode, label: role.language });
        }
      }
      return acc;
    }, []);

    return uniqueLanguages;
  }, [props.currentUser]);

  // Languages effect
  useEffect(() => {
    const processedLanguages = processLanguages();
    setLanguages(processedLanguages);

    if (processedLanguages.length > 0 && !processedLanguages.some(lang => lang.value === currentLanguage)) {
      setCurrentLanguage(processedLanguages[0].value);
    }
  }, [props.currentUser, currentLanguage, processLanguages]);

  // Book information effect
  useEffect(() => {
    const fetchBookInfo = async () => {
      setIsLoading(true);
      try {
        const strSavedBookInfo = localStorage.getItem(BOOK_INFO);
        const jsonSavedBookInfo = strSavedBookInfo ? JSON.parse(strSavedBookInfo) : [];

        const existingBookInfo = jsonSavedBookInfo.find((book: BookType) => book.bookTitle.en === selectedBook);

        if (existingBookInfo) {
          setBookInfo(existingBookInfo);
        } else {
          const result = await bookService.getBookInfoByTitle(selectedBook);
          setBookInfo(result);

          const updatedBookInfo = [...jsonSavedBookInfo, result];
          localStorage.setItem(BOOK_INFO, JSON.stringify(updatedBookInfo));
        }
      } catch (error) {
        toast.error(error instanceof Error ? error.message : String(error), {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookInfo();
  }, [selectedBook]);

  // Event Handlers
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);
  };

  const handleBookOverviewTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentBookOverviewType(value);
  };

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(BOOK_INFO);

    props.dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: { user: null },
    });

    navigate('/admin');
  };

  // Render Conditions
  const isSpecialBook = selectedBook === BOOK_QURAN || selectedBook === BOOK_ZABUR;
  const languageName = getLanguageFromLanguageCode(currentLanguage);

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          isLoggedIn={true}
          username={props.currentUser.username}
          isAdmin={props.currentUser.isAdmin}
          onLogOut={onLogout}
        />

        <StyledBookOverviewContainer>
          <Tools tools={TOOLS} />

          <StyledBookSelectorContainer>
            <BookSelector
              books={BOOK_SELECTORS.map(book => ({
                bookTitle: book.bookTitle,
                onClick: () => setSelectedBook(book.value)
              }))}
              selectedBook={selectedBook}
            />
          </StyledBookSelectorContainer>

          <StyledSelectContainer>
            <Text color="#155D74" fontWeight="700" fontFamily="'Baloo Da 2'">
              {selectedBook}
            </Text>

            <SelectBox
              label=""
              options={languages}
              value={currentLanguage}
              backgroundColor="#fff"
              textColor="#155D74"
              onChange={handleLanguageChange}
            />

            <SelectBox
              label=""
              options={BOOK_OVERVIEW_TYPES}
              value={currentBookOverviewType}
              backgroundColor="#fff"
              textColor="#155D74"
              onChange={handleBookOverviewTypeChange}
            />
          </StyledSelectContainer>

          <StyledUploadButtonContainer>
            <Button
              icon={<CloudUploadIcon />}
              label={`Import ${currentBookOverviewType} into ${languageName} ${selectedBook}`}
              onClick={() => { }}
            />
          </StyledUploadButtonContainer>

          {bookInfo && !isSpecialBook && (
            <>
              {currentBookOverviewType === 'Text' && (
                <BookTextOverview
                  bookTitle={selectedBook}
                  language={languageName}
                  languageCode={currentLanguage}
                  bookInfo={bookInfo}
                  isQuranOrZabur={false}
                />
              )}
              {currentBookOverviewType === 'Audio' && (
                <BookAudioOverview
                  bookTitle={selectedBook}
                  language={languageName}
                  languageCode={currentLanguage}
                  bookInfo={bookInfo}
                  isQuranOrZabur={false}
                />
              )}
              {currentBookOverviewType === 'Reference' && (
                <BookReferenceOverview
                  bookTitle={selectedBook}
                  language={languageName}
                  languageCode={currentLanguage}
                  bookInfo={bookInfo}
                />
              )}
            </>
          )}

          {bookInfo && isSpecialBook && (
            <>
              <BookTextOverview
                bookTitle={selectedBook}
                language={languageName}
                languageCode={currentLanguage}
                bookInfo={bookInfo}
                isQuranOrZabur={true}
              />
              <BookAudioOverview
                bookTitle={selectedBook}
                language={languageName}
                languageCode={currentLanguage}
                bookInfo={bookInfo}
                isQuranOrZabur={true}
              />
            </>
          )}
        </StyledBookOverviewContainer>
      </StyledContainer>

      {isLoading && <LoadingOverlay />}
    </>
  );
};

function mapDispatchToProps(dispatch: Dispatch) {
  return { dispatch };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOverview);