import React, { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import { toast, Bounce, ToastContainer } from "material-react-toastify";
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
  StyledHintContainer,
  StyledTableContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledSelectContainer,
  StyledTableInfoContainer,
  StyledExportButtonContainer,
  StyledToggleContainer,
  StyledToggleItemContainer,
  StyledTranslatorPortalContainer
} from "./styles";

import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import Uploader from "@/components/Uploader";
import Summary from "@/components/Summary";

import {
  ACCESS_TOKEN,
  BOOK_INJIL,
  BOOK_QURAN,
  BOOK_SELECTORS,
  BOOK_TAWRAT,
  BOOK_ZABUR,
} from "@/config";
import { DOWNLOAD_SUCCESS } from '@/config/messages';
import {
  ERROR_EMPTY_FILE,
  ERROR_ONLY_ONE_SUBBOOK,
  ERROR_ONLY_ONE_TRANSLITERATION,
  ERROR_SOMETHING_WRONG_FOR_SUBBOOK,
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
  SubBookModelType,
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
    isImport: boolean,
    subBookInfo: SubBookInfoType,
    chapterInfo: ChapterInfoType
  };

  const [isLoading, setIsLoading] = useState(false);
  const [activeBookInfo, setActiveBookInfo] = useState<BookType | null>(null);
  const [activeSubBook, setActiveSubBook] = useState<SubBookInfoType | null>(null);
  const [activeChapterInfo, setActiveChapterInfo] = useState<ChapterInfoType>(locationState.chapterInfo);
  const [verseInfos, setVerseInfos] = useState<VerseType[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [fileInput, setFileInput] = useState<ChangeEvent<HTMLInputElement>>();
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);
  const [importTableHeaders, setImportTableHeaders] = useState<string[]>([]);
  const [parsedData, setParsedData] = useState<ParseDataType[]>([]);
  const [necessaryParsedData, setNecessaryParsedData] = useState<ParseDataType[]>([]);
  const [error, setError] = useState('');

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedBook, setSelectedBook] = useState(props.currentBook);
  const [selectedSubBook, setSelectedSubBook] = useState<string>(locationState.subBookInfo.subBookId);
  const [selectedChapter, setSelectedChapter] = useState<string>(locationState.chapterId);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(props.currentLanguage);

  const [isImport, setIsImport] = useState(locationState.isImport);

  const [isComplete, setIsComplete] = useState(false);
  const [isPublish, setIsPublish] = useState(false);
  const [totalCountVerse, setTotalCountVerse] = useState(0);
  const [languageCountVerse, setLanguageCountVerse] = useState(0);

  const [inputCurrentLanguageChapterName, setInputCurrentLanguageChapterName] = useState('');
  const [inputArabicChapterName, setInputArabicChapterName] = useState('');
  const [inputTransliteration, setInputTransliteration] = useState('');
  const [inputEnglishChaptername, setInputEnglishChaptername] = useState('');

  const languages = useMemo(() => location.state.languages, [props.currentUser]);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  // Fetch Chapter info by chapterId
  const fetchChapterInfoByChapterId = useCallback(async (chapterId: string) => {
    setIsLoading(true);

    return await bookService
      .getChapterInfoByChapterId(chapterId)
  }, [selectedChapter]);

  // Set cell data for table
  const configureTableData = useCallback(() => {
    const currentSubBook = activeBookInfo?.subBooks?.find(subBook => subBook.subBookId == selectedSubBook);
    let newHeaders: string[] = [];
    let newRows: TableRowType[] = [];
    const isSpecialBook = activeBookInfo?.bookTitle?.en == 'Qur\'an' || activeBookInfo?.bookTitle?.en == 'Zabur';

    if (selectedLanguage == 'en') {
      if (isSpecialBook) {
        newHeaders = ['SubBook_English', 'SubBook_Transliteration', 'Chapter_Number', 'Verse_Number', 'Verse_English'];
        newRows = verseInfos?.map(verseInfo => ({
          SubBook_English: currentSubBook?.subBookTitle?.en || '',
          SubBook_Transliteration: currentSubBook?.subBookTitle?.transliteration || '',
          Chapter_Number: activeChapterInfo?.chapterNumber?.toString() || '1',
          Verse_Number: verseInfo?.verseNumber?.toString() || '1',
          Verse_English: verseInfo?.verseText?.en || '',
        }));
      } else {
        newHeaders = ['SubBook_English', 'Chapter_Number', 'Verse_Number', 'Verse_English'];
        newRows = verseInfos?.map(verseInfo => ({
          SubBook_English: currentSubBook?.subBookTitle?.en || '',
          Chapter_Number: activeChapterInfo?.chapterNumber?.toString() || '1',
          Verse_Number: verseInfo?.verseNumber?.toString() || '1',
          Verse_English: verseInfo?.verseText?.en || '',
        }));
      }
    } else {
      const language = getLanguageFromLanguageCode(selectedLanguage);
      if (isSpecialBook) {
        newHeaders = ['SubBook_English', `SubBook_${language}`, 'SubBook_Transliteration', 'Chapter_Number', 'Verse_Number', `Verse_${language}`];
        newRows = verseInfos?.map(verseInfo => ({
          SubBook_English: currentSubBook?.subBookTitle?.en || '',
          [`SubBook_${language}`]: currentSubBook?.subBookTitle?.[selectedLanguage] || currentSubBook?.subBookTitle?.en || '',
          SubBook_Transliteration: isSpecialBook && currentSubBook?.subBookTitle?.transliteration || '',
          Chapter_Number: activeChapterInfo?.chapterNumber?.toString() || '1',
          Verse_Number: verseInfo?.verseNumber?.toString() || '1',
          [`Verse_${language}`]: verseInfo?.verseText?.[selectedLanguage] || verseInfo?.verseText?.en || '',
        }));
      } else {
        newHeaders = ['SubBook_English', `SubBook_${language}`, 'Chapter_Number', 'Verse_Number', `Verse_${language}`];
        newRows = verseInfos?.map(verseInfo => ({
          SubBook_English: currentSubBook?.subBookTitle?.en || '',
          [`SubBook_${language}`]: currentSubBook?.subBookTitle?.[selectedLanguage] || currentSubBook?.subBookTitle?.en || '',
          Chapter_Number: activeChapterInfo?.chapterNumber?.toString() || '1',
          Verse_Number: verseInfo?.verseNumber?.toString() || '1',
          [`Verse_${language}`]: verseInfo?.verseText?.[selectedLanguage] || verseInfo?.verseText?.en || '',
        }));
      }
    }

    setTableHeaders(newHeaders || []);
    setTableRows(newRows || []);
  }, [activeBookInfo, activeChapterInfo, verseInfos, selectedSubBook, selectedLanguage, isImport]);

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
  }, [tableRows, tableHeaders]);

  // Scroll to top when page is rendered
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  // Book Title Effect
  useEffect(() => {
    const loadBookAndConfigureTable = async () => {
      setIsLoading(true);
      try {
        // Check if book exists in Redux store
        const existingBook = props.bookInfos.find((bookInfo: BookType) => bookInfo.bookTitle.en == selectedBook);

        if (existingBook) {
          setActiveBookInfo(existingBook);

          // Update subbook options
          const uniqueSubBooks = Array.from(
            new Set(existingBook.subBooks.map(sb => sb.subBookId))
          ).map(id => existingBook.subBooks.find(sb => sb.subBookId === id)!);

          const newSubBookOptions = uniqueSubBooks.map((subBook: SubBookInfoType) => ({
            label: subBook.subBookTitle?.[selectedLanguage],
            value: subBook.subBookId
          }));

          setSubBookSelectOptions(newSubBookOptions);

          // Update selected subbook if needed
          if (!newSubBookOptions.some(opt => opt.value === selectedSubBook)) {
            setSelectedSubBook(newSubBookOptions[0]?.value || '');
          }
        }

        // Load chapter info if we have a selected chapter
        if (selectedChapter) {
          const existingChapterInfo = props.chapterInfos.find(
            chapterInfo => chapterInfo.chapterId == selectedChapter
          );

          if (existingChapterInfo) {
            setActiveChapterInfo(existingChapterInfo);
          } else {
            fetchChapterInfoByChapterId(selectedChapter)
              .then((result) => {
                setActiveChapterInfo(result);

                props.dispatch({
                  type: actionTypes.ADD_CHAPTERINFO,
                  payload: {
                    chapterInfo: result
                  }
                });

                setIsLoading(false);
              })
              .catch(() => {
                setIsLoading(false);
              });
          }
        }

        configureTableData();
      } catch (error) {
        toast.error('Failed to load book information', {
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

    loadBookAndConfigureTable();
  }, [selectedBook]);

  // Sub Book Effect
  useEffect(() => {
    const bookInfo = props.bookInfos.find(bookInfo => bookInfo?.bookTitle.en == props.currentBook);
    const subBookInfo = bookInfo?.subBooks.find(subBook => subBook.subBookId == selectedSubBook);

    subBookInfo && setActiveSubBook(subBookInfo);

    setInputCurrentLanguageChapterName(subBookInfo?.subBookTitle?.[selectedLanguage] || '');
    setInputArabicChapterName(subBookInfo?.subBookTitle?.ar || '');
    setInputEnglishChaptername(subBookInfo?.subBookTitle?.en || "");
    setInputTransliteration(subBookInfo?.subBookTitle?.transliteration || '');

    const newChapterOptions = subBookInfo?.chapterInfos?.map(chapterInfo => ({
      value: chapterInfo.chapterId,
      label: chapterInfo.chapterNumber.toString(),
    }));

    if (newChapterOptions && locationState.chapterId) {
      setChapterSelectOptions(newChapterOptions);
      setSelectedChapter(locationState.chapterId);
    } else if (newChapterOptions) {
      setChapterSelectOptions(newChapterOptions);
      setSelectedChapter(newChapterOptions[0].value);
    }

    configureTableData();
  }, [selectedSubBook, props.currentBook]);

  // Chapter Effect
  useEffect(() => {
    setTableHeaders([]);
    setTableRows([]);

    // Check if the chapter is existing in Redux store
    const existingChapterInfo = props.chapterInfos.find(chapterInfo => chapterInfo.chapterId == selectedChapter);
    if (existingChapterInfo) {
      setActiveChapterInfo(existingChapterInfo);
      setVerseInfos(existingChapterInfo?.verses || []);
    } else {
      fetchChapterInfoByChapterId(selectedChapter)
        .then((result) => {
          setActiveChapterInfo(result);
          setVerseInfos(result.verses || []);

          props.dispatch({
            type: actionTypes.ADD_CHAPTERINFO,
            payload: {
              chapterInfo: result
            }
          });

          setIsLoading(false);
        })
        .catch(() => {
          setTableHeaders([]);
          setTableRows([]);
          setTotalCountVerse(0);
          setLanguageCountVerse(0);
          setIsComplete(false);
          setIsPublish(false);

          toast.warning(`Chapter is empty. Click Import to add verses.`, {
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

    locationState.chapterId = ''

    configureTableData();
  }, [props.chapterInfos, selectedChapter]);

  // Set the default values when render the page first
  useEffect(() => {
    setLanguageCountVerse(0);
    configureTableData();

    const isCompleted = activeChapterInfo?.chapterIsCompleted?.[selectedLanguage] || false;
    const isPublished = activeChapterInfo?.chapterIsPublished?.[selectedLanguage] || false;
    setIsComplete(isCompleted);
    setIsPublish(isPublished);

    setTotalCountVerse(activeChapterInfo?.verses?.length || 0);
    activeChapterInfo.verses?.map(verse =>
      setLanguageCountVerse((prevLanguageCountVerse) => (verse?.verseText?.[selectedLanguage] ? prevLanguageCountVerse + 1 : prevLanguageCountVerse))
    );

    setInputCurrentLanguageChapterName(activeSubBook?.subBookTitle?.[selectedLanguage] || '');
    setInputArabicChapterName(activeSubBook?.subBookTitle?.ar || '');
    setInputEnglishChaptername(activeSubBook?.subBookTitle?.en || '');

    setSelectedChapter(activeChapterInfo.chapterId);
  }, [verseInfos, activeBookInfo, activeSubBook, activeChapterInfo, selectedLanguage]);

  useEffect(() => {
    if (!isImport)
      configureTableData()
  }, [isImport]);

  useEffect(() => {
    const file = fileInput?.target.files && fileInput?.target.files[0];
    file && setFile(file);
  }, [fileInput, isImport]);

  //  Effect hook to extract table header and data when parsed data is changed (new file is selcted)
  useEffect(() => {
    if (isImport) {
      setNecessaryParsedData([]);
      const firstData = parsedData[0];

      const languageLabel = languages.find((languageItem: SelectOptionType) => languageItem.value == selectedLanguage)?.label;

      if (languageLabel != 'English')
        setImportTableHeaders(prevHeaders => [...prevHeaders, 'SubBook_English']);
      firstData && Object.keys(firstData).forEach((key) => {
        if (key == 'SubBook_Transliteration')
          setImportTableHeaders(prevHeaders => [...prevHeaders, key]);
        if (languageLabel && key.includes(languageLabel))
          setImportTableHeaders(prevHeaders => [...prevHeaders, key]);
      });

      setImportTableHeaders(prevHeaders => [...prevHeaders, 'Chapter_Number', 'Verse_Number']);

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
    }
  }, [parsedData, selectedLanguage, isImport]);

  /**
   * Effect hook to handle file parsing when a new file is selected
   * - Checks if a file exists
   * - Determines the file type by its extension
   * - Calls appropriate parser (CSV or Excel)
   * - Shows error for unsupported file types
  */
  useEffect(() => {
    if (isImport) {
      setImportTableHeaders([]);
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
    }
  }, [file, selectedLanguage, isImport]);

  // Effect hook for error handling
  useEffect(() => {
    if (isImport) {
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
        const hasTransliteration = importTableHeaders.includes('SubBook_Transliteration');

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
      }

      // If no file selected
      if (parsedData.length == 0) {
        errorMsg = ERROR_EMPTY_FILE;
        setError(errorMsg)
      }
    }
  }, [tableRows, importTableHeaders, isImport, selectedLanguage, parsedData, necessaryParsedData]);

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
    setTableHeaders([]);
    setTableRows([]);

    props.dispatch({
      type: actionTypes.SET_CURRENT_LANGUAGE,
      payload: {
        language: value,
      }
    })
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
      verses: updatedChapterInfo.verses,
    }

    setActiveChapterInfo(newChapterInfo);

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
    });
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
  const handleExcelParse = useCallback(async (file: File) => {
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
  }, [file]);

  // Save book by calling API
  const saveBook = useCallback(() => {
    translatorService
      .saveBook({ bookInfos: necessaryParsedData, bookTitle: props.currentBook, language: getLanguageFromLanguageCode(selectedLanguage) })
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
      .catch(() => {
        toast.success('Failed to save book', {
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
  }, [selectedLanguage, necessaryParsedData]);

  // Log out
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

  const _renderImportHint = () => {
    return (
      isImport &&
      <StyledHintContainer>
        <Text color="red" fontFamily="'Baloo Da 2'" fontWeight="bold">
          {
            (selectedBook == BOOK_QURAN || selectedBook == BOOK_ZABUR) ?
              `For ${selectedBook} you can upload only one chapter at once` :
              `For ${selectedBook} you can upload multiple chapters of the same sub-book at once`
          }
        </Text>
      </StyledHintContainer>
    )
  }

  const _renderDetailSelector = () => {
    return (
      <StyledSelectContainer>
        <StyledBackContainer onClick={() => navigate('/admin/bookoverview')}>
          <KeyboardBackspaceIcon />
          <Text fontFamily="Inter" color="#155D74" fontWeight="500">overview</Text>
        </StyledBackContainer>

        {!isImport &&
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
        }
      </StyledSelectContainer>
    )
  };

  const _renderSummary = () => {
    return (
      !isImport &&
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

        handleComplete={(value: boolean) => handleTranslateComplete(value)}
        handlePublish={(value: boolean) => handleTranslatePublish(value)}
        handleCurrentChapterTitleChange={(value: string) => handleCurrentLanguageChapterNameChange(value)}
        handleArabicChapterTitleChange={(value: string) => handleArabicChapterNameChange(value)}
        handleTransliterationChapterTitleChange={(value: string) => setInputTransliteration(value)}
        handleEnglishChapterTitleChange={(value: string) => handleEnglishChapterNameChange(value)}
        handleUpdateChapterSummary={updateSummaryTitleInfos}
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
          {
            `${selectedBook} - 
            ${getLabelFromValueInDropdownOptions(selectedSubBook, subBookSelectOptions)} 
            ${(selectedBook == BOOK_INJIL || selectedBook == BOOK_TAWRAT) ? getLabelFromValueInDropdownOptions(selectedChapter, chapterSelectOptions) : ''}`
          }
        </Text>

        <StyledExportButtonContainer isdisable={!tableHeaders.length ? 'true' : 'false'}>
          <Button
            label="Export to Excel"
            disabled={!tableHeaders.length}
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
      <StyledTranslatorPortalContainer>
        <Uploader
          language={selectedLanguage}
          languageLabel={getLanguageFromLanguageCode(selectedLanguage)}
          languages={languages}
          file={file}
          parsedData={parsedData}
          headers={importTableHeaders}
          error={error}

          onChangeLanguage={(e) => setSelectedLanguage(e.target.value as string)}
          onChangeFile={(e: ChangeEvent<HTMLInputElement>) => setFileInput(e)}
          onUpload={saveBook}
        />
      </StyledTranslatorPortalContainer>
    );
  };

  const _renderBody = () => {
    return (
      <StyledChapterOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderToggle()}

        {_renderDetailSelector()}

        {_renderImportHint()}

        {_renderSummary()}

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
    chapterInfos: state.book.chapterInfos,
    currentBook: state.book.book,
    currentLanguage: state.book.language,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterOverview);
