import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { toast, Bounce, ToastContainer } from "material-react-toastify";
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
  BOOK_QURAN,
  BOOK_ZABUR,
  BOOK_SELECTORS,
} from "@/config";
import actionTypes from "@/actions/actionTypes";
import useOrientation from "@/hooks/useOrientation";
import {
  getLanguageCodeFromLanguage,
  getLanguageFromLanguageCode
} from "@/utils";

import bookService from "@/services/book.services";
import { AppStateType } from '@/reducers/types';

// Constants
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

  const [selectedBook, setSelectedBook] = useState(props.currentBook || BOOK_QURAN);
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
    if (selectedBook == 'App Text') {
      moveToAppTextoverview();
    } else {
      const fetchBookInfo = async () => {
        setIsLoading(true);
        try {
          const existingBookInfo = props.bookInfos.find((book: BookType) => book.bookTitle.en === selectedBook);

          if (existingBookInfo) {
            setBookInfo(existingBookInfo);
          } else {
            const result = await bookService.getBookInfoByTitle(selectedBook);
            const resultInBookType: BookType = {
              bookId: result.bookId,
              bookImage: result.bookImage,
              bookTitle: result.bookTitle,
              subBooks: result.subBooks,
            }
            setBookInfo(result);

            props.dispatch({
              type: actionTypes.ADD_BOOKINFO,
              payload: {
                bookInfo: resultInBookType
              }
            });
          }

          setIsLoading(false);
        } catch (error) {
          toast.error('Failed to fetch book information', {
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
    }
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

  const handleSelectedBook = (bookTitle: string) => {
    setSelectedBook(bookTitle);

    props.dispatch({
      type: actionTypes.SET_BOOK,
      payload: {
        bookTitle
      }
    })
  }

  const moveToChapterOverview = (chapterId: string, isImport: boolean = false) => {
    const subBookInfo = bookInfo?.subBooks.find(
      (subBook: SubBookInfoType) => subBook?.chapterInfos?.find(
        (chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId
      ));

    const chapterInfo = subBookInfo?.chapterInfos.find((chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId);

    const chapterNumber = chapterInfo?.chapterNumber || 0;

    const passData = {
      chapterId,
      isImport,
      subBookInfo: subBookInfo,
      chapterInfo: chapterInfo,
      languages: languages
    };

    chapterNumber ?
      navigate('/admin/chapteroverview', { state: passData }) :
      navigate('/admin/introoverview', { state: passData });
  }

  const moveToAppTextoverview = () => {
    navigate('/admin/apptext');
  }

  const moveToAudioOverview = (chapterId: string) => {
    const subBookInfo = bookInfo?.subBooks.find(
      (subBook: SubBookInfoType) => subBook?.chapterInfos?.find(
        (chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId
      ));

    const chapterInfo = subBookInfo?.chapterInfos.find((chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId);

    const passData = {
      chapterId,
      subBookInfo: subBookInfo,
      chapterInfo: chapterInfo,
      languages: languages
    };

    navigate('/admin/audiooverview', { state: passData });
  }

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

  // Render Conditions
  const isSpecialBook = selectedBook === BOOK_QURAN || selectedBook === BOOK_ZABUR;
  const languageName = getLanguageFromLanguageCode(currentLanguage);

  const _renderHeader = () => {
    return (
      <Header
        isLoggedIn={true}
        username={props.currentUser.username}
        isAdmin={props.currentUser.isAdmin}
        onLogOut={onLogout}
      />
    )
  }

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

  const _renderDetailSelector = () => {
    return (
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
    )
  }

  const _renderUploadButtonForInjil = () => {
    return (
      currentBookOverviewType == 'Text' &&
      <StyledUploadButtonContainer>
        <Button
          icon={<CloudUploadIcon />}
          label={`Import ${currentBookOverviewType} into ${languageName} ${selectedBook}`}
          onClick={() => moveToChapterOverview(bookInfo?.subBooks[0].chapterInfos[0].chapterId || '', true)}
        />
      </StyledUploadButtonContainer>
    )
  }

  const _renderNonSpecialBooks = () => {
    return (
      <>
        {
          bookInfo && !isSpecialBook && (
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

                  moveToAudioOverview={moveToAudioOverview}
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
          )
        }
      </>
    )
  };

  const _renderSpecialBooks = () => {
    return (
      <>
        {bookInfo && isSpecialBook && (
          <>
            <BookTextOverview
              bookTitle={selectedBook}
              language={languageName}
              languageCode={currentLanguage}
              bookInfo={bookInfo}
              isQuranOrZabur={true}

              onClickSquare={moveToChapterOverview}
            />
            <BookAudioOverview
              bookTitle={selectedBook}
              language={languageName}
              languageCode={currentLanguage}
              bookInfo={bookInfo}
              isQuranOrZabur={true}

              moveToAudioOverview={moveToAudioOverview}
            />
          </>
        )}
      </>
    )
  }

  const _renderOverview = () => {
    return (
      <>
        {_renderNonSpecialBooks()}

        {_renderSpecialBooks()}
      </>
    )
  }

  const _renderBody = () => {
    return (
      <StyledBookOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderDetailSelector()}

        {!isSpecialBook && _renderUploadButtonForInjil()}

        {_renderOverview()}
      </StyledBookOverviewContainer>
    )
  }

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderHeader()}

        {_renderBody()}
      </StyledContainer>

      <ToastContainer />
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
    currentBook: state.book.book,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOverview);
