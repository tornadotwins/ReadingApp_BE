import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { toast, Bounce } from "material-react-toastify";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DownloadIcon from '@mui/icons-material/Download';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import { AppStateType } from "@/reducers/types";
import useOrientation from "@/hooks/useOrientation";
import actionTypes from "@/actions/actionTypes";
import bookService from "@/services/book.services";

import {
  Button,
  LoadingOverlay,
  SelectBox,
  Switch,
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
  StyledSelectContainer,
  StyledSummaryContainer,
  StyledSummaryItemContainer,
  StyledTableInfoContainer,
  StyledExportButtonContainer,
  StyledToggleContainer,
  StyledToggleItemContainer,
} from "./styles";

import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";

import {
  ACCESS_TOKEN,
  BOOK_QURAN,
  BOOK_INJIL,
  BOOK_ZABUR,
  BOOK_TAWRAT
} from "@/config";
import { DOWNLOAD_SUCCESS } from '@/config/messages';

import {
  BookType,
  ChapterInfoType,
  SubBookInfoType,
  VerseType
} from "../BookOverview/types";

import {
  ChapterModelType,
  ChapterOverviewPropsType,
  SelectOptionType
} from "./types";
import { TableRowType } from "@/components/Base/TablePanel/types";
import { getLabelFromValueInDropdownOptions, getLanguageFromLanguageCode } from "@/utils";

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
  const [activeBookInfo, setActiveBookInfo] = useState<BookType | null>(null);
  const [activeChapterInfo, setActiveChapterInfo] = useState<ChapterInfoType>(locationState.chapterInfo);
  const [verseInfos, setVerseInfos] = useState<VerseType[]>([]);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedBook, setSelectedBook] = useState(locationState.bookTitle);
  const [selectedSubBook, setSelectedSubBook] = useState<string>(locationState.subBookInfo.subBookId);
  const [selectedChapter, setSelectedChapter] = useState<string>(locationState.chapterId);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(props.currentLanguage);

  const [isImport, setIsImport] = useState(false);

  const [isComplete, setIsComplete] = useState(false);
  const [isPublish, setIsPublish] = useState(false);
  const [totalCountVerse, setTotalCountVerse] = useState(0);
  const [languageCountVerse, setLanguageCountVerse] = useState(0);

  const languages = useMemo(() => location.state.languages, [props.currentUser]);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  // Fetch book info by book title
  const fetchBookInfoByTitle = useCallback((bookTitle: string) => {
    setIsLoading(true);
    bookService
      .getBookInfoByTitle(bookTitle)
      .then((result: BookType) => {
        setActiveBookInfo(result);

        // Deduplicate sub-books
        const uniqueSubBooks = Array.from(
          new Set(result.subBooks.map(sb => sb.subBookId))
        ).map(id => result.subBooks.find(sb => sb.subBookId === id)!);

        const newSubBookOptions = uniqueSubBooks.map((subBook: SubBookInfoType) => ({
          label: subBook.subBookTitle?.[selectedLanguage],
          value: subBook.subBookId
        }));

        setSubBookSelectOptions(newSubBookOptions);

        setSelectedSubBook(newSubBookOptions.length ? newSubBookOptions[0].value : '');

        // Set first sub-book if no selection exists
        if (newSubBookOptions.length > 0 && !selectedSubBook) {
          setSelectedSubBook(newSubBookOptions[0].value);
        }

        // Set first chapter if no selection exists
        if (chapterSelectOptions.length > 0 && !selectedChapter)
          setSelectedChapter(chapterSelectOptions[0].value);
        setIsLoading(false);
      })
      .catch((error) => {
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
      });
  }, []);

  // Fetch Chapter info by chapterId
  const fetchChapterInfoByChapterId = useCallback((chapterId: string) => {
    setIsLoading(true);

    bookService
      .getChapterInfoByChapterId(chapterId)
      .then((result) => {
        setActiveChapterInfo(result);
        setVerseInfos(result.verses);

        props.dispatch({
          type: actionTypes.ADD_CHAPTERINFO,
          payload: {
            chapterInfo: result
          }
        })

        setIsLoading(false);
      })
      .catch((error) => {
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
      })
  }, []);

  // Set cell data for table
  const configureTableData = useCallback(() => {
    const currentSubBook = activeBookInfo?.subBooks.find(subBook => subBook.subBookId == selectedSubBook);
    if (selectedLanguage == 'en') {
      setTableHeaders(['SubBook_English', 'Chapter_Number', 'Verse_Number', 'Verse_English']);

      const rows = verseInfos.map(verseInfo => ({
        SubBook_English: currentSubBook?.subBookTitle.en || '',
        Chapter_Number: activeChapterInfo?.chapterNumber.toString() || '1',
        Verse_Number: verseInfo.verseNumber.toString() || '1',
        Verse_English: verseInfo.verseText.en || '',
      }));

      rows ? setTableRows(rows) : setTableRows([]);
    }
    else {
      const language = getLanguageFromLanguageCode(selectedLanguage);
      setTableHeaders(['SubBook_English', `SubBook_${language}`, 'Chapter_Number', 'Verse_Number', `Verse_${language}`]);

      const rows = verseInfos.map(verseInfo => ({
        SubBook_English: currentSubBook?.subBookTitle.en || '',
        [`SubBook_${language}`]: currentSubBook?.subBookTitle?.[selectedLanguage] || currentSubBook?.subBookTitle.en || '',
        Chapter_Number: activeChapterInfo?.chapterNumber.toString() || '1',
        Verse_Number: verseInfo.verseNumber.toString() || '1',
        [`Verse_${language}`]: verseInfo.verseText?.[selectedLanguage] || verseInfo.verseText.en || '',
      }));

      rows ? setTableRows(rows) : setTableRows([]);
    }
  }, []);

  // Export table data to Excel
  const exportTable2Excel = useCallback(() => {
    const fileName = `${selectedBook}-${getLabelFromValueInDropdownOptions(selectedSubBook, subBookSelectOptions)}-${getLabelFromValueInDropdownOptions(selectedChapter, chapterSelectOptions)}`;

    const worksheet = XLSX.utils.json_to_sheet(tableRows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    saveAs(blob, `${fileName}.xlsx`);

    toast.success(DOWNLOAD_SUCCESS, {
      position: 'top-right',
      draggable: true,
      theme: 'colored',
      transition: Bounce,
      closeOnClick: true,
      pauseOnHover: true,
      hideProgressBar: false,
      autoClose: 3000
    });
  }, []);

  // Set the default values when render the page first
  useEffect(() => {
    setLanguageCountVerse(0);
    const isCompleted = activeChapterInfo?.chapterIsCompleted?.[selectedLanguage] || false;
    const isPublished = activeChapterInfo?.chapterIsPublished?.[selectedLanguage] || false;
    setTotalCountVerse(activeChapterInfo?.verses?.length || 0);
    activeChapterInfo.verses?.map(verse =>
      setLanguageCountVerse((prevLanguageCountVerse) => (verse?.verseText?.[selectedLanguage] ? prevLanguageCountVerse + 1 : prevLanguageCountVerse))
    );

    setIsComplete(isCompleted);
    setIsPublish(isPublished);
  }, [selectedBook, selectedSubBook, selectedChapter, selectedLanguage]);

  // Book Title Effect
  useEffect(() => {
    // Check if the selected book is existing in redux store
    const existingBook = props.bookInfos.find((bookInfo: BookType) => bookInfo.bookTitle.en == selectedBook);
    if (existingBook) {
      setActiveBookInfo(existingBook);

      // Deduplicate sub-books
      const uniqueSubBooks = Array.from(
        new Set(existingBook.subBooks.map(sb => sb.subBookId))
      ).map(id => existingBook.subBooks.find(sb => sb.subBookId === id)!);

      const newSubBookOptions = uniqueSubBooks.map((subBook: SubBookInfoType) => ({
        label: subBook.subBookTitle?.[selectedLanguage],
        value: subBook.subBookId
      }));

      setSubBookSelectOptions(newSubBookOptions);

      setSelectedSubBook(
        newSubBookOptions.some(newSubBookOption => newSubBookOption.value == selectedSubBook) ?
          selectedSubBook :
          newSubBookOptions.length ?
            newSubBookOptions[0].value :
            ''
      );

      // Set first sub-book if no selection exists
      if (newSubBookOptions.length > 0 && !selectedSubBook) {
        setSelectedSubBook(newSubBookOptions[0].value);
      }

      // Set first chapter if no selection exists
      if (chapterSelectOptions.length > 0 && !selectedChapter)
        setSelectedChapter(chapterSelectOptions[0].value);
    } else { // If the book is not existing in redux store, fetch from database
      fetchBookInfoByTitle(selectedBook);
    }
    configureTableData();
  }, [selectedBook]);

  // Sub Book Effect
  useEffect(() => {
    const bookInfo = props.bookInfos.find(bookInfo => bookInfo.subBooks.find(subBook => subBook.subBookId == selectedSubBook));
    const subBookInfo = bookInfo?.subBooks.find(subBook => subBook.subBookId == selectedSubBook);

    const newChapterOptions = subBookInfo?.chapterInfos?.map(chapterInfo => ({
      value: chapterInfo.chapterId,
      label: chapterInfo.chapterNumber.toString(),
    }));

    newChapterOptions ? setChapterSelectOptions(newChapterOptions) : setChapterSelectOptions([]);

    configureTableData();
  }, [selectedSubBook]);

  // Chapter Effect
  useEffect(() => {
    // Check if the chapter is existing in Redux store
    const existingChapterInfo = props.chapterInfos.find(chapterInfo => chapterInfo.chapterId == selectedChapter);
    if (existingChapterInfo) {
      setActiveChapterInfo(existingChapterInfo);
      setVerseInfos(existingChapterInfo.verses);
    } else {
      fetchChapterInfoByChapterId(selectedChapter);
    }

    configureTableData();
  }, [selectedChapter]);

  // Language Effect
  useEffect(() => {
    const newLanguageSubBookOptions = activeBookInfo?.subBooks.map(subBook => ({
      value: subBook.subBookId,
      label: subBook.subBookTitle?.[selectedLanguage] || subBook.subBookTitle.en
    }));

    newLanguageSubBookOptions ? setSubBookSelectOptions(newLanguageSubBookOptions) : [];

    configureTableData();
  }, [selectedLanguage]);

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

  const updateReduxBookInfoWithChapter = (updatedChapterInfo: ChapterModelType) => {
    // Update book info with updated Chapter Information
    const updatedChapterInfoInChapterType: ChapterInfoType = {
      chapterId: selectedChapter,
      chapterNumber: updatedChapterInfo.chapterNumber,
      chapterTranslated: updatedChapterInfo.isTranslated,
      chapterAudio: updatedChapterInfo.audio,
      subBookId: selectedSubBook,
      verses: activeChapterInfo.verses,
      chapterIsCompleted: updatedChapterInfo.isCompleted,
      chapterIsPublished: updatedChapterInfo.isPublished
    };

    // Find the sub book
    const currentSubBook = activeBookInfo?.subBooks.find(subBook => subBook.subBookId == selectedSubBook);
    const updatedCurrentSubBook = currentSubBook?.chapterInfos.map(
      chapterInfo =>
        chapterInfo.chapterId == selectedChapter ?
          { ...chapterInfo, chapterInfo: updatedChapterInfoInChapterType } :
          chapterInfo
    );

    const updatedCurrentBook = {
      ...activeBookInfo, subBooks: activeBookInfo?.subBooks.map(
        subBook =>
          subBook.subBookId == selectedSubBook ?
            { ...subBook, updatedCurrentSubBook } :
            subBook
      )
    };

    const bookInfos = props.bookInfos;
    const updatedBookInfos = bookInfos.map(
      bookInfo =>
        bookInfo.bookId == updatedCurrentBook.bookId ?
          { ...bookInfo, updatedCurrentBook } :
          bookInfo
    )

    props.dispatch({
      type: actionTypes.SET_BOOKINFOS,
      payload: {
        bookInfos: updatedBookInfos
      }
    })
  }

  // Update chapter in backend with isCompleted
  const handleTranslateComplete = async (isTranslateCompleted: boolean) => {
    setIsComplete(isTranslateCompleted);
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
      isPublished: activeChapterInfo.chapterIsPublished
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
      .catch(error => {
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
      });
  }

  // Update chapter in backend with isPublished
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
      .catch(error => {
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
      });
  }

  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    props.dispatch({ type: actionTypes.RESET_USER });
    props.dispatch({ type: actionTypes.RESET_BOOK });
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

  const _renderBookSelector = () => {
    return (
      <StyledBookSelectorContainer>
        <BookSelector
          books={BOOK_SELECTORS.map(book => ({
            bookTitle: book.bookTitle,
            onClick: () => setSelectedBook(book.value)
          }))}
          selectedBook={selectedBook}
        />
      </StyledBookSelectorContainer>
    )
  };

  const _renderDetailSelector = () => {
    return (
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
            value={subBookSelectOptions.find(option => option.value === selectedSubBook) ? selectedSubBook : ''}
            backgroundColor="#fff"
            textColor="#155D74"
            onChange={handleSelectSubBookChange}
          />

          <SelectBox
            label=""
            options={chapterSelectOptions}
            value={chapterSelectOptions.find(option => option.value === selectedChapter) ? selectedChapter : ''}
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
    )
  };

  const _renderSummary = () => {
    return (
      <StyledSummaryContainer>
        <StyledSummaryItemContainer>
          <Text
            fontFamily="Inter"
            fontWeight="500"
            fontSize={16}
            lineHeight={24}
            color="#155D74"
          >
            Ayas filled:
          </Text>

          <Text
            fontFamily="Inter"
            fontWeight="500"
            fontSize={16}
            lineHeight={24}
            color="#000"
          >
            {`${languageCountVerse} of ${totalCountVerse}`}
          </Text>
        </StyledSummaryItemContainer>

        <StyledSummaryItemContainer>
          <Switch
            label="Complete: "
            value={isComplete}
            disable={
              (props.currentUser.isAdmin ||
                props.currentUser.roles.some(
                  role => role.language == getLanguageFromLanguageCode(selectedLanguage) &&
                    (role.role.toLowerCase() == "translator".toLowerCase() || role.role.toLowerCase() == "publisher".toLowerCase())
                )) ?
                false :
                true
            }
            onChange={(value: boolean) => handleTranslateComplete(value)}
          />
        </StyledSummaryItemContainer>

        <StyledSummaryItemContainer>
          <Switch
            label="Publish: "
            value={isPublish}
            disable={
              (props.currentUser.isAdmin ||
                props.currentUser.roles.some(
                  role => role.language == getLanguageFromLanguageCode(selectedLanguage) &&
                    role.role.toLowerCase() == "publisher".toLowerCase()
                )) ?
                false :
                true
            }
            onChange={(value: boolean) => handleTranslatePublish(value)}
          />
        </StyledSummaryItemContainer>
      </StyledSummaryContainer>
    )
  };

  const _renderToggle = () => {
    return (
      <StyledToggleContainer>
        <StyledToggleItemContainer
          active={!isImport ? 'true' : 'false'}
          onClick={() => setIsImport(false)}
        >
          <CloudDownloadIcon />
          <Text fontFamily="'Baloo Da 2'">
            Database
          </Text>
        </StyledToggleItemContainer>

        <StyledToggleItemContainer
          active={isImport ? 'true' : 'false'}
          onClick={() => setIsImport(true)}
        >
          <CloudUploadIcon />
          <Text fontFamily="'Baloo Da 2'">
            Import
          </Text>
        </StyledToggleItemContainer>
      </StyledToggleContainer>
    )
  }

  const _renderTableInfo = () => {
    return (
      <StyledTableInfoContainer>
        <Text fontFamily="Inter" color="#155D74" fontWeight="500">
          {`${selectedBook} - ${getLabelFromValueInDropdownOptions(selectedSubBook, subBookSelectOptions)} ${getLabelFromValueInDropdownOptions(selectedChapter, chapterSelectOptions)}`}
        </Text>

        <StyledExportButtonContainer>
          <Button
            label="Export to Excel"
            icon={<DownloadIcon />}
            onClick={exportTable2Excel}
          />
        </StyledExportButtonContainer>
      </StyledTableInfoContainer>
    )
  }

  const _renderTable = () => {
    return (
      <StyledTableContainer>
        <TablePanel
          headers={tableHeaders}
          rows={tableRows}
        />
      </StyledTableContainer>
    )
  }

  const _renderBody = () => {
    return (
      <StyledChapterOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderDetailSelector()}

        {_renderSummary()}

        {_renderToggle()}

        {_renderTableInfo()}

        {_renderTable()}
      </StyledChapterOverviewContainer>
    )
  }

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderHeader()}

        {_renderBody()}
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
    chapterInfos: state.book.chapterInfos,
    currentLanguage: state.book.language,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterOverview);
