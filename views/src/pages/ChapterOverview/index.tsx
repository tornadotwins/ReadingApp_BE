import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
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
import translatorService from "@/services/translator.services";

import {
  Button,
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
  StyledSelectContainer,
  StyledTableInfoContainer,
  StyledExportButtonContainer,
  StyledToggleContainer,
  StyledToggleItemContainer,
  StyledTranslatorPortalContainer,
  StyledTranslatorContainer,
} from "./styles";

import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import Uploader from "@/components/Uploader";
import Summary from "@/components/Summary";

import {
  ACCESS_TOKEN,
  BOOK_QURAN,
  BOOK_SELECTORS,
  BOOK_ZABUR,
} from "@/config";
import { DOWNLOAD_SUCCESS } from '@/config/messages';
import {
  ERROR_EMPTY_FILE,
  ERROR_ONLY_ONE_SUBBOOK,
  ERROR_ONLY_ONE_TRANSLITERATION,
  ERROR_SPECIAL_BOOK_CHAPTER_NUMBER,
  ERROR_SUBBOOK_TRANSLITERATION_NOT_REQUIRE,
  ERROR_SUBBOOK_TRANSLITERATION_REQUIRE
} from "@/config/error-messages";

import {
  BookType,
  ChapterInfoType,
  SubBookInfoType,
  VerseType
} from "../BookOverview/types";

import {
  ChapterModelType,
  ChapterOverviewPropsType,
  SelectOptionType,
  ParseDataType,
} from "./types";
import { TableRowType } from "@/components/Base/TablePanel/types";
import {
  getLabelFromValueInDropdownOptions,
  getLanguageFromLanguageCode
} from "@/utils";

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
  const [file, setFile] = useState<File | null>(null);
  const [fileInput, setFileInput] = useState<ChangeEvent<HTMLInputElement>>();
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);
  const [parsedData, setParsedData] = useState<ParseDataType[]>([]);
  const [necessaryParseData, setNecessaryParsedData] = useState<ParseDataType[]>([]);
  const [error, setError] = useState('');

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedBook, setSelectedBook] = useState(props.currentBook);
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
    setTableHeaders([]);
    setTableRows([]);

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
    setTableHeaders([]);
    setTableRows([]);

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
    setTableHeaders([]);
    setTableRows([]);

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
    setTableHeaders([]);
    setTableRows([]);

    const newLanguageSubBookOptions = activeBookInfo?.subBooks.map(subBook => ({
      value: subBook.subBookId,
      label: subBook.subBookTitle?.[selectedLanguage] || subBook.subBookTitle.en
    }));

    newLanguageSubBookOptions ? setSubBookSelectOptions(newLanguageSubBookOptions) : [];

    configureTableData();
  }, [selectedLanguage]);

  useEffect(() => {
    const file = fileInput?.target.files && fileInput?.target.files[0];
    file && setFile(file);
  }, [fileInput]);

  //  Effect hook to extract table header and data when parsed data is changed (new file is selcted)
  useEffect(() => {
    setNecessaryParsedData([]);
    const firstData = parsedData[0];

    const languageLabel = languages.find((languageItem: SelectOptionType) => languageItem.value == selectedLanguage)?.label;

    if (languageLabel != 'English')
      setTableHeaders(prevHeaders => [...prevHeaders, 'SubBook_English']);
    firstData && Object.keys(firstData).forEach((key) => {
      if (key == 'SubBook_Transliteration')
        setTableHeaders(prevHeaders => [...prevHeaders, key]);
      if (languageLabel && key.includes(languageLabel))
        setTableHeaders(prevHeaders => [...prevHeaders, key]);
    });

    setTableHeaders(prevHeaders => [...prevHeaders, 'Chapter_Number', 'Verse_Number']);

    // Set the necessary parsed data according to the selected language
    parsedData.forEach((data: ParseDataType) => {
      const necessaryData: ParseDataType = {};
      necessaryData['SubBook_English'] = data['SubBook_English'];
      Object.keys(data).forEach((key) => {
        // If key contains selected language, it is necessary field to save in DB
        if (key.includes(languageLabel as string))
          necessaryData[key] = data[key];

        // If key is "SubBook_Transliteration" and the language is English, it is necessary field to save in DB
        if (key == 'SubBook_Transliteration' && languageLabel == 'English')
          necessaryData[key] = data[key];
      });
      necessaryData['Chapter_Number'] = data['Chapter_Number'];
      necessaryData['Verse_Number'] = data['Verse_Number'];

      setNecessaryParsedData(prevNecessaryParsedData => [
        ...prevNecessaryParsedData,
        necessaryData
      ]);
    });
  }, [parsedData, selectedLanguage]);

  /**
   * Effect hook to handle file parsing when a new file is selected
   * - Checks if a file exists
   * - Determines the file type by its extension
   * - Calls appropriate parser (CSV or Excel)
   * - Shows error for unsupported file types
  */
  useEffect(() => {
    setTableHeaders([]);
    // If no file is selected, exit early
    if (!file) return;

    // Extract the file extension from the filename
    const fileName = file.name;
    const fileExtension = fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();

    // Parse the file based on its extension (CSV or Excel)
    if (fileExtension === 'csv') {
      handleCSVParse(file);
    } else if (['xlsx', 'xls'].includes(fileExtension)) {
      handleExcelParse(file);
    } else {
      console.error('Unsupported file format');
    }
  }, [file, selectedLanguage]);

  /**
   * Effect hook for error handling
  */
  useEffect(() => {
    const necessaryHeaders: string[] = [
      'SubBook_English',
      `SubBook_${getLanguageFromLanguageCode(selectedLanguage)}`,
      `Chapter_Number`,
      `Verse_Number`,
      `Verse_${getLanguageFromLanguageCode(selectedLanguage)}`
    ].filter((item, index, array) => item && array.indexOf(item) === index);

    let errorMsg = '';

    if (parsedData.length > 1) {
      const fileHeaders = Object.keys(parsedData[0]);

      // check necessary fields
      const missedFields = necessaryHeaders.filter((necessaryHeader) => !fileHeaders.includes(necessaryHeader));
      missedFields.forEach((missedField: string) => errorMsg += `${missedField}, `);

      if (errorMsg)
        errorMsg = `You missed the ${missedFields.length >= 2 ? 'fields' : 'field'}: ` + errorMsg;
      // End checking necessary fields

      // Check if the file contains only 1 sub book
      const firstSubBookName = parsedData[0][`SubBook_${getLanguageFromLanguageCode(selectedLanguage)}`];
      const differentSubBooks = parsedData.find((data) => data[`SubBook_${getLanguageFromLanguageCode(selectedLanguage)}`] != firstSubBookName);
      if (differentSubBooks)
        errorMsg = ERROR_ONLY_ONE_SUBBOOK;

      const firstSubBookTransliteration = parsedData[0]['SubBook_Transliteration'];
      const differentSubBookTransliterations = parsedData.find((data) => data['SubBook_Transliteration'] != firstSubBookTransliteration);
      if (differentSubBookTransliterations)
        errorMsg = ERROR_ONLY_ONE_TRANSLITERATION;

      // Check the file structure according to book
      const hasTransliteration = tableHeaders.includes('SubBook_Transliteration');
      //In Qur'an or Zabur, all chapter numbers should be 1, not the others
      if (props.currentBook == BOOK_QURAN || props.currentBook == BOOK_ZABUR) {
        // Check if the file has SubBook_Transliteration field
        if (!hasTransliteration)
          errorMsg = ERROR_SUBBOOK_TRANSLITERATION_REQUIRE

        // Check Chapter_Number fields
        const isInValidChapterNumber = parsedData.some((data) => data.Chapter_Number != '1');
        if (isInValidChapterNumber)
          errorMsg = ERROR_SPECIAL_BOOK_CHAPTER_NUMBER;

        setError(errorMsg);
      } else {
        // Check if the file has SubBook_Transliteration field
        if (hasTransliteration)
          errorMsg = ERROR_SUBBOOK_TRANSLITERATION_NOT_REQUIRE

        setError(errorMsg);
      }
      // End checking the file structure according to book

      // If no file selected
      if (parsedData.length == 0) {
        errorMsg = ERROR_EMPTY_FILE
        setError(errorMsg)
      }
    }
  }, [tableHeaders, selectedLanguage, parsedData, isImport]);

  const handleSelectedBook = (bookTitle: string) => {
    setSelectedBook(bookTitle);

    props.dispatch({
      type: actionTypes.SET_BOOK,
      payload: {
        bookTitle
      }
    })
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
  };

  // Update chapter with isCompleted
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
  };

  // Handle Toggle (Database/Import)
  const handleToggle = (value: boolean) => {
    setIsImport(value);
    setTableHeaders([]);
    setTableRows([]);
  };

  // Parse picked CSV file to JSON format
  const handleCSVParse = (file: File) => {
    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const csvData = e.target?.result;
        if (!csvData) {
          console.error('Failed to read file');
          return;
        }

        Papa.parse(csvData as string, {
          complete: (results) => {
            if (results.errors.length > 0) {
              console.error('CSV parsing errors:', results.errors);
              return;
            }

            const jsonData = results.data as ParseDataType[];
            setParsedData(jsonData);
          },
          header: true, // This automatically converts to array of objects using headers
          skipEmptyLines: true,
          transformHeader: (header) => {
            // Transform header names
            return header.trim();
          },
          transform: (value) => {
            // Transform cell values
            return value.trim();
          }
        });
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsText(file); // Use readAsText for CSV files
    } catch (err) {
      console.error('Error parsing CSV file:', err);
    }
  };

  //  Parse picked file to JSON format
  const handleExcelParse = async (file: File) => {
    try {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result;
        if (!data) {
          console.error('Failed to read file');
          return;
        }

        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet) as ParseDataType[];

        setParsedData(jsonData);
      };

      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };

      reader.readAsArrayBuffer(file);
    } catch (err) {
      console.error('Error parsing Excel file:', err);
    }
  };

  // Save book by calling API
  const saveBook = () => {
    translatorService
      .saveBook({ bookInfos: necessaryParseData, bookTitle: props.currentBook, language: getLanguageFromLanguageCode(selectedLanguage) })
      .then(() => {
        toast.success('Saved successfully!', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      })
      .catch(error => {
        toast.success(error, {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });
      });
  };

  // Log out
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
  };

  const _renderBookSelector = () => {
    return (
      <StyledBookSelectorContainer>
        <BookSelector
          books={BOOK_SELECTORS.map(book => ({
            bookTitle: book.bookTitle,
            onClick: () => { handleSelectedBook(book.value) }
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
      <Summary
        currentUser={props.currentUser}
        currentBook={props.currentBook}
        totalCountVerse={totalCountVerse}
        languageCountVerse={languageCountVerse}
        isComplete={isComplete}
        isPublish={isPublish}
        isSpecialBook={selectedBook == BOOK_QURAN || selectedBook == BOOK_ZABUR}
        currentLanguage={selectedLanguage}
        translateComplete={(value: boolean) => handleTranslateComplete(value)}
        translatePublish={(value: boolean) => handleTranslatePublish(value)}
      />
    )
  };

  const _renderToggle = () => {
    return (
      <StyledToggleContainer>
        <StyledToggleItemContainer
          active={!isImport ? 'true' : 'false'}
          onClick={() => handleToggle(false)}
        >
          <CloudDownloadIcon />
          <Text fontFamily="'Baloo Da 2'">
            Database
          </Text>
        </StyledToggleItemContainer>

        <StyledToggleItemContainer
          active={isImport ? 'true' : 'false'}
          onClick={() => handleToggle(true)}
        >
          <CloudUploadIcon />
          <Text fontFamily="'Baloo Da 2'">
            Import
          </Text>
        </StyledToggleItemContainer>
      </StyledToggleContainer>
    )
  };

  const _renderTableInfo = () => {
    return (
      !isImport &&
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
  };

  const _renderTable = () => {
    return (
      !isImport &&
      <StyledTableContainer>
        <TablePanel
          headers={tableHeaders}
          rows={tableRows}
        />
      </StyledTableContainer>
    )
  };

  const _renderImporter = () => {
    return (
      isImport &&
      <StyledTranslatorContainer flexDirection={isPortrait ? 'column' : 'row'}>
        <Header
          isAdmin={!!props.currentUser.isAdmin}
          username={props.currentUser.username}
          isLoggedIn
          onLogOut={onLogout}
        />

        <StyledTranslatorPortalContainer>
          <Uploader
            language={selectedLanguage}
            languageLabel={getLanguageFromLanguageCode(selectedLanguage)}
            languages={languages}
            file={file}
            parsedData={parsedData}
            headers={tableHeaders}
            error={error}

            onChangeLanguage={(e) => setSelectedLanguage(e.target.value as string)}
            onChangeFile={(e: ChangeEvent<HTMLInputElement>) => setFileInput(e)}
            onUpload={saveBook}
          />
        </StyledTranslatorPortalContainer>
      </StyledTranslatorContainer>
    );
  };

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

        {_renderImporter()}
      </StyledChapterOverviewContainer>
    )
  };

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
    currentBook: state.book.book,
    currentLanguage: state.book.language,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterOverview);
