import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toast, Bounce } from "material-react-toastify";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { AppStateType } from "@/reducers/types";
import useOrientation from "@/hooks/useOrientation";
import actionTypes from "@/actions/actionTypes";
import bookService from "../../../services/book.services";

import {
  LoadingOverlay,
  SelectBox,
  TablePanel,
  Text
} from "@/components/Base";

import {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledSelectContainer
} from "./styles";

import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";

import {
  ACCESS_TOKEN,
  BOOK_QURAN,
  BOOK_INJIL,
  BOOK_ZABUR,
  BOOK_TAWRAT,
} from "@/config";

import {
  BookType,
  ChapterInfoType,
  SubBookInfoType,
  VerseType
} from "../BookOverview/types";

import {
  ChapterOverviewPropsType,
  SelectOptionType
} from "./types";
import { TableRowType } from "@/components/Base/TablePanel/types";

const BOOK_SELECTORS = [
  { bookTitle: "App Text", value: "App Text" },
  { bookTitle: BOOK_QURAN, value: "Qur'an" },
  { bookTitle: BOOK_INJIL, value: "Injil" },
  { bookTitle: BOOK_ZABUR, value: "Zabur" },
  { bookTitle: BOOK_TAWRAT, value: "Tawrat" },
];

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function ChapterOverview(props: ChapterOverviewPropsType) {
  const location = useLocation();
  const locationState = location.state as {
    bookTitle: string,
    chapterId: string,
    subBookInfo: SubBookInfoType,
    chapterInfo: ChapterInfoType
  };

  const [isLoading, setIsLoading] = useState(false);
  const [bookInfo, setBookInfo] = useState<BookType | null>(null);
  // const [verseInfos, setVerseInfos] = useState<VerseType[]>([]);
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedBook, setSelectedBook] = useState(locationState.bookTitle);
  const [selectedSubBook, setSelectedSubBook] = useState<string>(locationState.subBookInfo.subBookTitle.en);
  const [selectedChapter, setSelectedChapter] = useState(locationState.chapterId);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(props.currentLanguage);

  const languages = useMemo(() => location.state.languages, [props.currentUser]);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookInfo = async () => {
      setIsLoading(true);
      try {
        const existingBookInfo = props.bookInfos.find((book: BookType) => book.bookTitle.en === selectedBook);
        const bookResult = existingBookInfo || await bookService.getBookInfoByTitle(selectedBook);

        props.dispatch({
          type: actionTypes.ADD_BOOKINFO,
          payload: { bookInfo: bookResult }
        });

        setBookInfo(bookResult);

        // Deduplicate sub-books
        const uniqueSubBooks = Array.from(
          new Set(bookResult.subBooks.map(sb => sb.subBookId))
        ).map(id => bookResult.subBooks.find(sb => sb.subBookId === id)!);

        const newSubBookOptions = uniqueSubBooks.map((subBook: SubBookInfoType) => ({
          label: subBook.subBookTitle.en,
          value: subBook.subBookId
        }));

        setSubBookSelectOptions(newSubBookOptions);

        setSelectedSubBook(newSubBookOptions.length ? newSubBookOptions[0].value : '');

        // Set first sub-book if no selection exists
        if (newSubBookOptions.length > 0 && !selectedSubBook) {
          setSelectedSubBook(newSubBookOptions[0].value);
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
  }, [selectedBook]);

  useEffect(() => {
    if (!locationState || !props.bookInfos.length) return;

    const { bookTitle, chapterId } = locationState;
    const bookInfo = props.bookInfos.find((book: BookType) => book.bookTitle.en === bookTitle);

    const subBookInfo = bookInfo?.subBooks.find((subBook: SubBookInfoType) =>
      subBook.chapterInfos.some((chapterInfo: ChapterInfoType) =>
        chapterInfo.chapterId === chapterId
      )
    );

    if (subBookInfo) {
      setSelectedSubBook(subBookInfo.subBookId);
    }

    const chapterInfo = subBookInfo?.chapterInfos.find(
      (chapter: ChapterInfoType) => chapter.chapterId === chapterId
    );

    if (chapterInfo) {
      setSelectedChapter(chapterInfo.chapterId);
    }
  }, [locationState, props.bookInfos]);

  useEffect(() => {
    if (!bookInfo || !selectedSubBook) return;

    setChapterSelectOptions([]);
    const subBookInfo = bookInfo.subBooks.find(
      (subBook: SubBookInfoType) => subBook.subBookId === selectedSubBook
    );

    const chapterInfos = subBookInfo?.chapterInfos || [];
    const newChapterOptions = chapterInfos.map((chapterInfo: ChapterInfoType) => ({
      value: chapterInfo.chapterId,
      label: chapterInfo.chapterNumber.toString(),
    }));

    setChapterSelectOptions(newChapterOptions);
  }, [selectedSubBook, bookInfo]);

  useEffect(() => {
    const fetchVersesInfo = async () => {
      if (!locationState || !selectedChapter) return;

      setIsLoading(true);
      setTableRows([]);

      try {
        const chapterInfo: ChapterInfoType = await bookService.getVersesByChapterId(selectedChapter);
        const newTableRows = chapterInfo.verses.map((verse: VerseType) => ({
          SubBook_English: location.state.subBookInfo?.subBookTitle?.[selectedLanguage],
          Chapter_Number: chapterInfo.chapterNumber.toString() || '',
          Verse_Number: verse.verseNumber.toString() || '',
          Verse_English: verse.verseText?.[selectedLanguage] || ''
        }));

        setTableRows(newTableRows);
        // setVerseInfos(chapterInfo.verses);
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

    fetchVersesInfo();
  }, [selectedChapter, selectedLanguage]);

  const handleSelectSubBookChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedSubBook(value);
  }

  const handleSelectChapterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedChapter(value);
  }

  const handleSelectLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);

    props.dispatch({
      type: actionTypes.SET_CURRENT_LANGUAGE,
      payload: {
        language: value,
      }
    })
  };

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    props.dispatch({ type: actionTypes.RESET_USER });
    props.dispatch({ type: actionTypes.RESET_BOOK });
    navigate('/admin');
  };

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          isLoggedIn
          username={props.currentUser.username}
          isAdmin={props.currentUser.isAdmin}
          onLogOut={onLogout}
        />

        <StyledChapterOverviewContainer>
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
            <StyledBackContainer onClick={() => navigate('/admin/bookoverview')}>
              <KeyboardBackspaceIcon />
              <Text fontFamily="Inter" color="#155D74" fontWeight="500">overview</Text>
            </StyledBackContainer>

            <StyledSelectGroupContainer>
              <Text fontFamily="Inter" color="#155D74" fontWeight="500">Go to:</Text>
              <SelectBox
                label=""
                options={subBookSelectOptions}
                value={selectedSubBook}
                backgroundColor="#fff"
                textColor="#155D74"
                onChange={handleSelectSubBookChange}
              />

              <SelectBox
                label=""
                options={chapterSelectOptions}
                value={selectedChapter}
                backgroundColor="#fff"
                textColor="#155D74"
                onChange={handleSelectChapterChange}
              />

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

          <StyledTableContainer>
            <TablePanel
              headers={['SubBook_English', 'Chapter_Number', 'Verse_Number', 'Verse_English']}
              rows={tableRows}
            />
          </StyledTableContainer>
        </StyledChapterOverviewContainer>
      </StyledContainer>

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterOverview);