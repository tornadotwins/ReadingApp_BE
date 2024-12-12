import { useState, useEffect, useMemo, ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate, useLocation } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "material-react-toastify";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Summary from "@/components/Summary";
import Header from "@/components/Header";
import BookSelector from "@/components/BookSelector";
import { Text, SelectBox, LoadingOverlay, FilePicker } from "@/components/Base";

import bookService from "@/services/book.services";

import useOrientation from "@/hooks/useOrientation";
import { AppStateType } from "@/reducers/types";
import {
  AudioOverviewPropsType,
  SelectOptionType,
  SubBookModelType,
  ChapterModelType,
} from "./types";
import {
  BookType,
  SubBookInfoType,
  ChapterInfoType,
} from "../BookOverview/types";
import {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledAudioOverviewContainer,
  StyledSelectContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledFileImporterContainer,
} from "./styles";

import actionTypes from "@/actions/actionTypes";
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
  BOOK_INJIL,
  BOOK_TAWRAT,
  BOOK_QURAN,
  BOOK_ZABUR,
} from "@/config";
import { ERROR_SOMETHING_WRONG_FOR_SUBBOOK } from "@/config/error-messages";
import Tools from "@/components/Tools";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function AudioOverview(props: AudioOverviewPropsType) {
  const location = useLocation();
  const locationState = location.state as {
    bookTitle: string,
    chapterId: string,
    isImport: boolean,
    subBookInfo: SubBookInfoType,
    chapterInfo: ChapterInfoType
  };

  const [isLoading, setIsLoading] = useState(false);

  const [selectedBook, setSelectedBook] = useState(props.currentBook);

  const [activeBookInfo, setActiveBookInfo] = useState<BookType | null>(null);
  const [activeSubBook, setActiveSubBook] = useState<SubBookInfoType>(locationState?.subBookInfo);
  const [activeChapterInfo, setActiveChapterInfo] = useState<ChapterInfoType>(locationState?.chapterInfo);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedSubBook, setSelectedSubBook] = useState<string>(locationState?.subBookInfo?.subBookId);
  const [selectedChapter, setSelectedChapter] = useState<string>(locationState?.chapterId);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(props.currentLanguage);

  const [totalCountVerse, setTotalCountVerse] = useState(0);
  const [languageCountVerse, setLanguageCountVerse] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isPublish, setIsPublish] = useState(false);
  const [inputArabicChapterName, setInputArabicChapterName] = useState('');
  const [inputTransliteration, setInputTransliteration] = useState('');
  const [inputEnglishChaptername, setInputEnglishChaptername] = useState('');
  const [inputCurrentLanguageChapterName, setInputCurrentLanguageChapterName] = useState('');

  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [edlFile, setEdlFile] = useState<File | null>(null);

  const navigate = useNavigate();
  const isPortrait = useOrientation();

  const languages = useMemo(() => location?.state?.languages, [props.currentUser]);

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

  const handleSelectSubBookChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedSubBook(value);
  };

  const handleSelectChapterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedChapter(value);
  };

  const handleSelectLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);

    // Reset table data to force re-render
    // setTableHeaders([]);
    // setTableRows([]);

    props.dispatch({
      type: actionTypes.SET_CURRENT_LANGUAGE,
      payload: {
        language: value,
      }
    })
  };

  const _renderDetailSelector = () => {
    return (
      <StyledSelectContainer>
        <StyledBackContainer onClick={() => navigate('/admin/bookoverview')}>
          <KeyboardBackspaceIcon />
          <Text fontFamily="Inter" color="#155D74" fontWeight="500">overview</Text>
        </StyledBackContainer>

        <StyledSelectGroupContainer>
          <Text fontFamily="Inter" color="#155D74" fontWeight="500">
            {(selectedBook == BOOK_INJIL || selectedBook == BOOK_TAWRAT) ? 'Go to: ' : 'Go to Surah: '}
          </Text>
          <SelectBox
            label=""
            options={subBookSelectOptions}
            value={subBookSelectOptions.find(option => option.value === selectedSubBook) ? selectedSubBook : ''}
            backgroundColor="#fff"
            textColor="#155D74"
            onChange={handleSelectSubBookChange}
          />

          {
            (selectedBook == BOOK_INJIL || selectedBook == BOOK_TAWRAT) &&
            <SelectBox
              label=""
              options={chapterSelectOptions}
              value={chapterSelectOptions.find(option => option.value === selectedChapter) ? selectedChapter : ''}
              backgroundColor="#fff"
              textColor="#155D74"
              onChange={handleSelectChapterChange}
            />
          }

          <SelectBox
            label=""
            options={languages}
            value={selectedLanguage}
            backgroundColor="#fff"
            textColor="#155D74"
            onChange={handleSelectLanguageChange}
          />
        </StyledSelectGroupContainer>
      </StyledSelectContainer>
    )
  };

  const updateReduxBookInfoWithChapter = (updatedChapterInfo: ChapterModelType) => {
    const newChapterInfo: ChapterInfoType = {
      chapterAudio: updatedChapterInfo.audio,
      chapterId: updatedChapterInfo._id,
      chapterNumber: updatedChapterInfo.chapterNumber,
      chapterTranslated: updatedChapterInfo.isTranslated,
      chapterIsCompleted: updatedChapterInfo.isCompleted,
      chapterIsPublished: updatedChapterInfo.isPublished,
      subBookId: updatedChapterInfo.subBook,
      verses: activeChapterInfo.verses,
    }

    const updatedBookInfos = props.bookInfos.map((book) => ({
      ...book,
      subBooks: book.subBooks.map((subBook) => ({
        ...subBook,
        chapterInfos: subBook.chapterInfos.map((chapter) =>
          chapter.chapterId === selectedChapter
            ? { ...chapter, ...newChapterInfo }
            : chapter
        ),
      })),
    }));

    props.dispatch({
      type: actionTypes.SET_BOOKINFOS,
      payload: {
        bookInfos: updatedBookInfos
      }
    });

    props.dispatch({
      type: actionTypes.UPDATE_CHAPTERINFOS,
      payload: {
        chapterInfo: newChapterInfo,
      }
    })
  };

  const updateReduxBookInfoWithSubBook = (updatedSubBookInfo: SubBookModelType) => {
    // Update book info with updated Chapter Information
    const updatedSubBookInfoInSubBookType: SubBookInfoType = {
      chapterInfos: activeSubBook?.chapterInfos || [],
      subBookId: activeSubBook?.subBookId || '',
      subBookNumber: activeSubBook?.subBookNumber || 1,
      subBookTitle: updatedSubBookInfo.title,
      noChapter: true,
    }

    const updatedBookInfos = props.bookInfos.map((book) => ({
      ...book,
      subBooks: book.subBooks.map((subBook => (
        subBook.subBookId == selectedSubBook
          ? { ...subBook, ...updatedSubBookInfoInSubBookType }
          : subBook
      )))
    }));

    props.dispatch({
      type: actionTypes.SET_BOOKINFOS,
      payload: {
        bookInfos: updatedBookInfos
      }
    })
  };

  // Update chapter with isCompleted
  const handleTranslateComplete = async (isTranslateCompleted: boolean) => {
    setIsComplete(isTranslateCompleted);
    setIsPublish(isTranslateCompleted && isPublish);
    setIsLoading(true);

    const newChapter = {
      chapterNumber: activeChapterInfo.chapterNumber || 1,
      subBook: activeChapterInfo.subBookId || '',
      audio: activeChapterInfo.chapterAudio,
      isTranslated: activeChapterInfo.chapterTranslated,
      isCompleted: {
        ...activeChapterInfo.chapterIsCompleted,
        [selectedLanguage]: isTranslateCompleted
      },
      isPublished: {
        ...activeChapterInfo.chapterIsPublished,
        [selectedLanguage]: isTranslateCompleted && isPublish
      }
    };

    bookService
      .updateChapterInfo({
        chapterId: selectedChapter,
        newChapterInfo: newChapter
      })
      .then(updatedChapter => {
        updateReduxBookInfoWithChapter(updatedChapter)
        setIsLoading(false);
      })
      .catch(() => {
        toast.error('Failed to complete the chapter', {
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
      });
  };

  // Update chapter with isPublished
  const handleTranslatePublish = async (isTranslatePublished: boolean) => {
    setIsPublish(isTranslatePublished);

    const newChapter = {
      chapterNumber: activeChapterInfo.chapterNumber || 1,
      subBook: activeChapterInfo.subBookId || '',
      audio: activeChapterInfo.chapterAudio,
      isTranslated: activeChapterInfo.chapterTranslated,
      isCompleted: activeChapterInfo.chapterIsCompleted,
      isPublished: {
        ...activeChapterInfo.chapterIsPublished, [selectedLanguage]: isTranslatePublished
      }
    };

    bookService
      .updateChapterInfo({
        chapterId: selectedChapter,
        newChapterInfo: newChapter
      })
      .then(updatedChapter => {
        updateReduxBookInfoWithChapter(updatedChapter)
        setIsLoading(false);
      })
      .catch(() => {
        toast.error('Failed to publish the chapter', {
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
      });
  };

  // handle changing the chapter name (language)
  const handleCurrentLanguageChapterNameChange = (value: string) => {
    if (selectedLanguage == 'en') {
      setInputEnglishChaptername(value);
    } else if (selectedLanguage == 'ar') {
      setInputArabicChapterName(value);
    }
    setInputCurrentLanguageChapterName(value);
  };

  // handle changing the Arabic Chapter name
  const handleArabicChapterNameChange = (value: string) => {
    if (selectedLanguage == 'ar') {
      setInputCurrentLanguageChapterName(value);
    }
    setInputArabicChapterName(value);
  };

  // handle changing the English Chapter name
  const handleEnglishChapterNameChange = (value: string) => {
    if (selectedLanguage == 'en') {
      setInputCurrentLanguageChapterName(value);
    }
    setInputEnglishChaptername(value);
  };

  // Update Chapter Summary
  const updateSummaryTitleInfos = (currentChapterTitle: string, arabicChapterTitle: string, transliteration: string, englishChapterTitle: string) => {
    const subBookTitle = {
      [`${selectedLanguage}`]: currentChapterTitle,
      'ar': arabicChapterTitle,
      'transliteration': transliteration,
      'en': englishChapterTitle,
    }

    const updatedSubBookInfo = { ...activeSubBook, subBookTitle };

    const updatedSubBookInfoWithSubBookModelType: SubBookModelType = {
      title: updatedSubBookInfo.subBookTitle,
      number: updatedSubBookInfo.subBookNumber || 1,
      book: activeBookInfo?.bookId || '',
      noChapter: true
    };

    if (activeSubBook?.subBookId) {
      setIsLoading(true);
      bookService
        .updateSubBookInfo({ subBookId: activeSubBook?.subBookId, newSubBookInfo: updatedSubBookInfoWithSubBookModelType })
        .then(result => {
          updateReduxBookInfoWithSubBook(result);

          setIsLoading(false);
        })
        .catch(() => {
          toast.error('Failed to update the summary of chapter', {
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
    } else {
      toast.error(ERROR_SOMETHING_WRONG_FOR_SUBBOOK, {
        position: 'top-right',
        draggable: true,
        theme: 'colored',
        transition: Bounce,
        closeOnClick: true,
        pauseOnHover: true,
        hideProgressBar: false,
        autoClose: 3000
      });
    }
  };

  const _renderSummary = () => {
    return (
      <Summary
        currentUser={props.currentUser}
        currentBook={props.currentBook}
        totalCountVerse={totalCountVerse}
        languageCountVerse={languageCountVerse}
        isComplete={isComplete}
        isPublish={isPublish}
        isSpecialBook={selectedBook == BOOK_QURAN || selectedBook == BOOK_ZABUR}
        currentLanguage={selectedLanguage}
        arabicChapterTitle={inputArabicChapterName}
        englishChapterTitle={inputEnglishChaptername}
        transliteration={inputTransliteration}
        currentChapterTitle={inputCurrentLanguageChapterName}

        translateComplete={(value: boolean) => handleTranslateComplete(value)}
        translatePublish={(value: boolean) => handleTranslatePublish(value)}
        handleCurrentChapterTitleChange={(value: string) => handleCurrentLanguageChapterNameChange(value)}
        handleArabicChapterTitleChange={(value: string) => handleArabicChapterNameChange(value)}
        handleTransliterationChapterTitleChange={(value: string) => setInputTransliteration(value)}
        handleEnglishChapterTitleChange={(value: string) => handleEnglishChapterNameChange(value)}
        handleUpdateChapterSummary={updateSummaryTitleInfos}
      />
    )
  };

  useEffect(() => {
    console.log({ audioFile });
  }, [audioFile]);

  useEffect(() => {
    console.log({ edlFile });
  }, [edlFile]);

  const _renderAudioImporter = () => {
    return (
      <StyledFileImporterContainer>
        <Text color="#155D74" fontFamily="'Baloo Da 2'" >
          Select Audio File:
        </Text>

        <FilePicker
          type=".mp3, .m4a"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setAudioFile(e.target.files ? e.target.files[0] : null)}
        />
      </StyledFileImporterContainer>
    );
  };

  const _renderEDLImporter = () => {
    return (
      <StyledFileImporterContainer>
        <Text color="#155D74" fontFamily="'Baloo Da 2'" >
          Select EDL File:
        </Text>

        <FilePicker
          type=".edl"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEdlFile(e.target.files ? e.target.files[0] : null)}
        />
      </StyledFileImporterContainer>
    )
  }

  const _renderBody = () => {
    return (
      <StyledAudioOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderDetailSelector()}

        {_renderSummary()}

        {_renderAudioImporter()}

        {_renderEDLImporter()}
      </StyledAudioOverviewContainer>
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