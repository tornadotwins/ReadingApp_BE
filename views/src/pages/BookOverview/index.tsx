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
import {
  BookOverviewPropsType,
  BookType,
  ChapterInfoType,
  SubBookInfoType
} from "./types";
import { LanguageType } from "../types";

// Config and Utility Imports
import {
  ACCESS_TOKEN,
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

const BookOverview = (props: BookOverviewPropsType) => {
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookType | null>(null);

  const [selectedBook, setSelectedBook] = useState(BOOK_QURAN);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [currentBookOverviewType, setCurrentBookOverviewType] = useState(BOOK_OVERVIEW_TYPES[0].value);

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

    if (!props.currentLanguage)
      props.dispatch({
        type: actionTypes.SET_CURRENT_LANGUAGE,
        payload: {
          language: uniqueLanguages[0].value
        }
      })

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
        const existingBookInfo = props.bookInfos.find((book: BookType) => book.bookTitle.en === selectedBook);

        if (existingBookInfo) {
          setBookInfo(existingBookInfo);
        } else {
          const result = await bookService.getBookInfoByTitle(selectedBook);
          setBookInfo(result);

          props.dispatch({
            type: actionTypes.ADD_BOOKINFO,
            payload: {
              bookInfo: result
            }
          });
        }

        setIsLoading(false);
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

        setIsLoading(false);
      }
    };

    fetchBookInfo();
  }, [selectedBook, props.bookInfos]);

  // Event Handlers
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);

    props.dispatch({
      type: actionTypes.SET_CURRENT_LANGUAGE,
      payload: {
        language: value,
      }
    })
  };

  const handleBookOverviewTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentBookOverviewType(value);
  };

  const moveToChapterOverview = (chapterId: string) => {
    const subBookInfo = bookInfo?.subBooks.find(
      (subBook: SubBookInfoType) => subBook.chapterInfos.find(
        (chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId
      ));

    const chapterInfo = subBookInfo?.chapterInfos.find((chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId);

    const passData = {
      chapterId,
      bookTitle: selectedBook,
      subBookInfo: subBookInfo,
      chapterInfo: chapterInfo,
      languages: languages
    };

    navigate('/admin/chapteroverview', { state: passData });
  }

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.RESET_USER
    });

    props.dispatch({
      type: actionTypes.RESET_BOOK
    })

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
              {`${selectedBook} ${isSpecialBook ? 'overview' : ''}`}
            </Text>

            <SelectBox
              label=""
              options={languages}
              value={currentLanguage}
              backgroundColor="#fff"
              textColor="#155D74"
              onChange={handleLanguageChange}
            />

            {!isSpecialBook &&
              <SelectBox
                label=""
                options={BOOK_OVERVIEW_TYPES}
                value={currentBookOverviewType}
                backgroundColor="#fff"
                textColor="#155D74"
                onChange={handleBookOverviewTypeChange}
              />
            }
          </StyledSelectContainer>

          {!isSpecialBook &&
            <StyledUploadButtonContainer>
              <Button
                icon={<CloudUploadIcon />}
                label={`Import ${currentBookOverviewType} into ${languageName} ${selectedBook}`}
                onClick={() => { }}
              />
            </StyledUploadButtonContainer>
          }

          {bookInfo && !isSpecialBook && (
            <>
              {currentBookOverviewType === 'Text' && (
                <BookTextOverview
                  bookTitle={selectedBook}
                  language={languageName}
                  languageCode={currentLanguage}
                  bookInfo={bookInfo}
                  isQuranOrZabur={false}

                  onClickSquare={moveToChapterOverview}
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

                onClickSquare={() => { }}
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
    bookInfos: state.book.bookInfos,
    currentLanguage: state.book.language,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOverview);
