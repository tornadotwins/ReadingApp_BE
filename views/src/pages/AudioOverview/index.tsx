import { useState, useEffect, useMemo, ChangeEvent, useCallback, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate, useLocation } from "react-router-dom";
import { toast, Bounce, ToastContainer } from "material-react-toastify";

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import Summary from "@/components/Summary";
import Header from "@/components/Header";
import BookSelector from "@/components/BookSelector";
import { Text, SelectBox, LoadingOverlay, FilePicker, Button, TablePanel } from "@/components/Base";

import bookService from "@/services/book.services";

import useOrientation from "@/hooks/useOrientation";
import { AppStateType } from "@/reducers/types";
import {
  AudioOverviewPropsType,
  SelectOptionType,
  SubBookModelType,
  ChapterModelType,
  MarkerType,
} from "./types";
import {
  BookType,
  SubBookInfoType,
  ChapterInfoType,
  VerseType,
} from "../BookOverview/types";
import {
  StyledContainer,
  StyledBookSelectorContainer,
  StyledAudioOverviewContainer,
  StyledSelectContainer,
  StyledToggleContainer,
  StyledToggleItemContainer,
  StyledBackContainer,
  StyledSelectGroupContainer,
  StyledFileImporterContainer,
  StyledButtonGroupContainer,
  StyledButton,
  StyledUploadButtonGroupContainer,
  StyledAudioPlayerContainer,
  StyledAudioPlayer,
  StyledMarkTableContainer,
} from "./styles";

import actionTypes from "@/actions/actionTypes";
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
  BOOK_INJIL,
  BOOK_TAWRAT,
  BOOK_QURAN,
  BOOK_ZABUR,
  API_URL
} from "@/config";
import { ERROR_SOMETHING_WRONG_FOR_SUBBOOK } from "@/config/error-messages";
import Tools from "@/components/Tools";
import audioService from "@/services/audio.services";
import { TableRowType } from "@/components/Base/TablePanel/types";
import AudioPlayer from "@/components/AudioPlayer";
import TimeLine from "@/components/TimeLine";

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
  const [isImport, setIsImport] = useState(false);

  const [activeBookInfo, setActiveBookInfo] = useState<BookType | null>(null);
  const [activeSubBook, setActiveSubBook] = useState<SubBookInfoType>(locationState?.subBookInfo);
  const [activeChapterInfo, setActiveChapterInfo] = useState<ChapterInfoType>(locationState?.chapterInfo);
  const [verseInfos, setVerseInfos] = useState<VerseType[]>([]);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);
  const [chapterSelectOptions, setChapterSelectOptions] = useState<SelectOptionType[]>([]);

  const [selectedBook, setSelectedBook] = useState(props.currentBook);
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
  const [audioSrc, setAudioSrc] = useState('');
  const [edlFile, setEdlFile] = useState<File | null>(null);
  const [csvData, setCsvData] = useState<string>('');
  const [jsonMarkerData, setJsonMarkerdata] = useState<MarkerType[]>([]);

  const [tableRows, setTableRows] = useState<TableRowType[]>([]);

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  const navigate = useNavigate();
  const isPortrait = useOrientation();

  const languages = useMemo(() => location?.state?.languages, [props.currentUser]);

  // Scroll to top when page is rendered
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, []);

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

  useEffect(() => {
    setTableRows([]);
    setAudioSrc('');
    setEdlFile(null);
    setAudioFile(null);
    setJsonMarkerdata([]);
    setCsvData('');
    setStartTime(0);
    setEndTime(0);
    setAudioCurrentTime(0);
    setAudioDuration(0);
    setIsAudioPlaying(false);
  }, [isImport]);

  // Fetch Chapter info by chapterId
  const fetchChapterInfoByChapterId = useCallback(async (chapterId: string) => {
    setIsLoading(true);

    return await bookService.getChapterInfoByChapterId(chapterId)
  }, [selectedChapter]);

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
      label: chapterInfo.chapterNumber == 0 ? 'Introduction' : chapterInfo.chapterNumber.toString(),
    }));

    if (newChapterOptions && locationState.chapterId) {
      setChapterSelectOptions(newChapterOptions);
      setSelectedChapter(locationState.chapterId);
    } else if (newChapterOptions) {
      setChapterSelectOptions(newChapterOptions);
      setSelectedChapter(newChapterOptions[0].value);
    }
  }, [selectedSubBook, props.currentBook]);

  // Chapter Effect
  useEffect(() => {
    // Check if the chapter is existing in Redux store
    const existingChapterInfo = props.chapterInfos.find(chapterInfo => chapterInfo.chapterId == selectedChapter);
    if (existingChapterInfo) {
      setActiveChapterInfo(existingChapterInfo);
      setVerseInfos(existingChapterInfo?.verses || []);

      // set Audio path and Marker in database mode
      if (!isImport) {
        // Set Audio Path
        const audios = existingChapterInfo.chapterAudio;
        const audioObj = audios.find(audio => audio.language == selectedLanguage);
        const audioSrc = audioObj?.audio;
        audioSrc && setAudioSrc(API_URL + '/' + audioSrc);

        const newRows: TableRowType[] = [];

        if (existingChapterInfo.verses && existingChapterInfo.verses.length >= 1) {
          for (let index = 0; index < (existingChapterInfo?.verses?.length || 1); index++) {
            const verse = existingChapterInfo.verses[index];
            const nextVerse = existingChapterInfo.verses[index + 1];
            const newRow = {
              'Verse': verse?.verseText?.[selectedLanguage],
              'Marker Name': audioObj?.marker || '',
              'Marker Time': verse.verseAudioStart?.[selectedLanguage]?.toString() || '',
              'Action': (
                <StyledButton isdisable={(audioFile || audioSrc) && (edlFile || tableRows) ? 'false' : 'true'}>
                  <Button
                    label="Play"
                    disabled={!(audioFile || audioSrc) || !(edlFile || tableRows)}
                    onClick={() => {
                      handleAudioPlay(
                        (verse.verseAudioStart?.[selectedLanguage] || 0).toString(),
                        nextVerse ? nextVerse.verseAudioStart?.[selectedLanguage].toString() : ''
                      );
                      handleCurrentAudioHandler('Time Line')
                    }}
                  />
                </StyledButton>
              ),
            };

            verse.verseAudioStart?.[selectedLanguage] && newRows.push(newRow);
          }

          setTableRows(newRows);
          setJsonMarkerdata(newRows as MarkerType[]);
        }
      }
    } else {
      fetchChapterInfoByChapterId(selectedChapter)
        .then((result) => {
          setActiveChapterInfo(result);
          setVerseInfos(result.verses || []);

          // set Audio path and Marker in database mode
          if (!isImport) {
            // Set Audio Path
            const audios = result.chapterAudio;
            const audioObj = audios.find(audio => audio.language == selectedLanguage);
            const audioSrc = audioObj?.audio;
            audioSrc && setAudioSrc(API_URL + audioSrc);

            const newRows: TableRowType[] = [];

            if (result.verses && result.verses.length >= 1) {
              for (let index = 0; index < (result?.verses?.length || 1); index++) {
                const verse = result.verses[index];
                const nextVerse = result.verses[index + 1];
                const newRow = {
                  'Verse': verseInfos[index]?.verseText?.[selectedLanguage],
                  'Marker Name': audioObj?.marker || '',
                  'Marker Time': verse.verseAudioStart?.[selectedLanguage].toString(),
                  'Action': (
                    <StyledButton isdisable={audioFile && edlFile ? 'false' : 'true'}>
                      <Button
                        label="Play"
                        disabled={!audioFile || !edlFile}
                        onClick={() => {
                          handleAudioPlay(
                            (verse.verseAudioStart?.[selectedLanguage] || 0).toString(),
                            nextVerse ? nextVerse.verseAudioStart?.[selectedLanguage].toString() : ''
                          );
                          handleCurrentAudioHandler('Time Line')
                        }}
                      />
                    </StyledButton>
                  ),
                };

                verse.verseAudioStart?.[selectedLanguage] && newRows.push(newRow);
              }

              setJsonMarkerdata(newRows as MarkerType[]);
              setTableRows(newRows);
            }
          }

          props.dispatch({
            type: actionTypes.ADD_CHAPTERINFO,
            payload: {
              chapterInfo: result
            }
          });

          setIsLoading(false);
        })
        .catch(() => {
          setTotalCountVerse(0);
          setLanguageCountVerse(0);
          setIsComplete(false);
          setIsPublish(false);

          toast.warning(`Chapter is empty.`, {
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

    locationState.chapterId = '';
  }, [selectedChapter, isImport]);

  // Set the default values when render the page first
  useEffect(() => {
    setLanguageCountVerse(0);

    const audioInfo = activeChapterInfo?.chapterAudio?.find(audio => audio.language == selectedLanguage);

    const isCompleted = audioInfo?.isCompleted || false;
    const isPublished = audioInfo?.isPublished || false;
    setIsComplete(isCompleted);
    setIsPublish(isPublished);

    setTotalCountVerse(activeChapterInfo?.verses?.length || 0);

    activeChapterInfo.verses?.map(verse =>
      setLanguageCountVerse((prevLanguageCountVerse) => (verse?.verseAudioStart?.[selectedLanguage] ? prevLanguageCountVerse + 1 : prevLanguageCountVerse))
    );

    setInputCurrentLanguageChapterName(activeSubBook?.subBookTitle?.[selectedLanguage] || '');
    setInputArabicChapterName(activeSubBook?.subBookTitle?.ar || '');
    setInputEnglishChaptername(activeSubBook?.subBookTitle?.en || '');

    setSelectedChapter(activeChapterInfo.chapterId);
  }, [verseInfos, activeBookInfo, activeSubBook, activeChapterInfo, selectedLanguage]);

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

  // Handle Toggle (Database/Import)
  const handleToggle = (value: boolean) => {
    setIsImport(value);
    setTableRows([]);
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
  const handleAudioComplete = async (isAudioCompleted: boolean) => {
    const currentChapterInfo = props.chapterInfos?.find(chapter => chapter.chapterId == selectedChapter);

    const isAudioExists = currentChapterInfo?.chapterAudio?.some(audio => audio.language == selectedLanguage);

    if (currentChapterInfo && isAudioExists) {
      setIsComplete(isAudioCompleted);
      setIsPublish(isAudioCompleted && isPublish);
      setIsLoading(true);

      const chapterAudio = currentChapterInfo?.chapterAudio;

      const updatedChapterAudio = chapterAudio.map(audio => {
        if (audio.language == selectedLanguage) {
          return { ...audio, isCompleted: !isComplete, isPublished: isAudioCompleted && isPublish }
        } else
          return audio;
      });

      const newChapter = {
        chapterNumber: currentChapterInfo.chapterNumber || 1,
        subBook: currentChapterInfo.subBookId || '',
        audio: updatedChapterAudio,
        isTranslated: currentChapterInfo.chapterTranslated,
        isCompleted: currentChapterInfo.chapterIsCompleted,
        isPublished: currentChapterInfo.chapterIsPublished
      };

      bookService
        .updateChapterInfo({
          chapterId: selectedChapter,
          newChapterInfo: newChapter
        })
        .then(result => {
          const updatedChapterInfo = {
            chapterId: result._id,
            chapterNumber: result.chapterNumber,
            chapterTranslated: result.isTranslated,
            chapterAudio: result.audio,
            subBookId: result.subBook,
            chapterIsCompleted: result.isCompleted,
            chapterIsPublished: result.isPublished,
            verses: result.verses
          }

          updateReduxBookInfoWithChapter(result);
          updateReduxChapterInfos(updatedChapterInfo);

          toast.success(`Success to ${isAudioCompleted ? 'complete' : 'incomplete'} the audio`, {
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
        .catch(() => {
          toast.error('Failed to complete the audio', {
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
    } else {
      toast.error('Failed to complete the chapter because of no audio', {
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

  // Update chapter with isPublished
  const handleAudioPublish = async (isAudioPublished: boolean) => {
    const currentChapterInfo = props.chapterInfos?.find(chapter => chapter.chapterId == selectedChapter);

    const isAudioExists = currentChapterInfo?.chapterAudio?.some(audio => audio.language == selectedLanguage);

    if (currentChapterInfo && isAudioExists && isComplete) {
      setIsPublish(isAudioPublished);
      setIsLoading(true);

      const chapterAudio = currentChapterInfo?.chapterAudio;

      const updatedChapterAudio = chapterAudio.map(audio => {
        if (audio.language == selectedLanguage) {
          return { ...audio, isPublished: !isPublish }
        } else
          return audio;
      });

      const newChapter = {
        chapterNumber: currentChapterInfo.chapterNumber || 1,
        subBook: currentChapterInfo.subBookId || '',
        audio: updatedChapterAudio,
        isTranslated: currentChapterInfo.chapterTranslated,
        isCompleted: currentChapterInfo.chapterIsCompleted,
        isPublished: currentChapterInfo.chapterIsPublished
      };

      bookService
        .updateChapterInfo({
          chapterId: selectedChapter,
          newChapterInfo: newChapter
        })
        .then(result => {
          const updatedChapterInfo = {
            chapterId: result._id,
            chapterNumber: result.chapterNumber,
            chapterTranslated: result.isTranslated,
            chapterAudio: result.audio,
            subBookId: result.subBook,
            chapterIsCompleted: result.isCompleted,
            chapterIsPublished: result.isPublished,
            verses: result.verses
          }

          updateReduxBookInfoWithChapter(result)
          updateReduxChapterInfos(updatedChapterInfo);

          toast.success(`Success to ${isAudioPublished ? 'publish' : 'withhold'} the audio`, {
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
        .catch(() => {
          toast.error('Failed to publish the audio', {
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
    } else {
      toast.error('Failed to publish the chapter because of no audio', {
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

        translateComplete={(value: boolean) => handleAudioComplete(value)}
        translatePublish={(value: boolean) => handleAudioPublish(value)}
        handleCurrentChapterTitleChange={(value: string) => handleCurrentLanguageChapterNameChange(value)}
        handleArabicChapterTitleChange={(value: string) => handleArabicChapterNameChange(value)}
        handleTransliterationChapterTitleChange={(value: string) => setInputTransliteration(value)}
        handleEnglishChapterTitleChange={(value: string) => handleEnglishChapterNameChange(value)}
        handleUpdateChapterSummary={updateSummaryTitleInfos}
      />
    )
  };

  useEffect(() => {
    if (audioFile) {
      const url = URL.createObjectURL(audioFile);
      setAudioSrc(url);
      setIsAudioPlaying(false);
    }
  }, [audioFile]);

  const _renderAudioImporter = () => {
    return (
      isImport &&
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

  const convertTimecode2Seconds = (timecode: string): number => {
    const parts = timecode.split(":");
    if (parts.length !== 4) throw new Error(`Invalid timecode format: ${timecode}`);

    const hours = parseInt(parts[0], 10) || 0;
    const minutes = parseInt(parts[1], 10) || 0;
    const seconds = parseInt(parts[2], 10) || 0;
    const frames = parseInt(parts[3], 10) || 0;

    const frameRate = 25; // Modify if needed
    return hours * 3600 + minutes * 60 + seconds + frames / frameRate;
  };

  const convertEdl2Csv = (edlContent: string): string => {
    const lines = edlContent.split("\n");
    const markers: { name: string; time: string }[] = [];

    let lastTime: string | null = null;

    lines.forEach((line) => {
      // Match timecode
      const timeMatch = line.match(/(\d{2}:\d{2}:\d{2}:\d{2})/);
      if (timeMatch) {
        lastTime = timeMatch[1]; // Correctly assign the full match (not undefined)
      }

      // Match marker name
      const markerMatch = line.match(/\|M:(.*?)(\s|$)/); // Handle end of line
      if (markerMatch && lastTime) {
        const markerName = markerMatch[1].trim();
        const markerSeconds = convertTimecode2Seconds(lastTime) - 3600; // Adjust for offset
        markers.push({ name: markerName, time: markerSeconds.toFixed(2) });
      }
    });

    // Create CSV content
    const csvHeader = "Verse Number, Marker Name, Marker Time";
    const csvRows = markers.map((marker, index) => `${index + 1}, ${marker.name},${marker.time}`);
    return [csvHeader, ...csvRows].join("\n");
  };

  const downloadCSV = () => {
    const blob = new Blob([csvData], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    const fileName = `${Date.now()}_${edlFile?.name?.split('.edl')[0]}.csv`
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertCsv2Json = (csv: string): object[] => {
    const rows = csv.split("\n").filter((row) => row.trim() !== ""); // Split rows and filter out empty lines
    const headers = rows[0].split(",").map((header) => header.trim()); // Extract headers

    const json = rows.slice(1).map((row) => {
      const values = row.split(",").map((value) => value.trim());
      return headers.reduce((acc, header, index) => {
        acc[header] = values[index]; // Map values to headers
        return acc;
      }, {} as Record<string, string>);
    });

    return json;
  };

  const handleAudioPlay = (startTime: string, endTime: string) => {
    setStartTime(Number(startTime));
    endTime ? setEndTime(Number(endTime)) : setEndTime(0);
    setIsAudioPlaying(true)
  }

  useEffect(() => {
    if (!edlFile)
      return;

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        const edlContent = reader.result.toString();
        const csv = convertEdl2Csv(edlContent);
        const jsonCsv = convertCsv2Json(csv) as MarkerType[];
        setJsonMarkerdata(jsonCsv);

        const newRows: TableRowType[] = [];

        for (let index = 0; index < jsonCsv.length; index++) {
          const newRow = {
            'Verse': verseInfos[index]?.verseText?.[selectedLanguage],
            'Marker Name': jsonCsv[index]['Marker Name'],
            'Marker Time': jsonCsv[index]['Marker Time'],
            'Action': (
              <StyledButton isdisable={audioFile && edlFile ? 'false' : 'true'}>
                <Button
                  label="Play"
                  disabled={!audioFile || !edlFile}
                  onClick={() => {
                    handleAudioPlay(jsonCsv[index]['Marker Time'], index < jsonCsv.length - 1 ? jsonCsv[index + 1]['Marker Time'] : '');
                    handleCurrentAudioHandler('Time Line')
                  }}
                />
              </StyledButton>
            ),
          };

          newRows.push(newRow);
        }

        setTableRows(newRows || []);

        setCsvData(csv);
      }
    }
    reader.readAsText(edlFile);
  }, [edlFile, selectedChapter]);

  const _renderEDLImporter = () => {
    return (
      isImport &&
      <StyledFileImporterContainer>
        <Text color="#155D74" fontFamily="'Baloo Da 2'">
          Select EDL File:
        </Text>

        <FilePicker
          type=".edl"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEdlFile(e.target.files ? e.target.files[0] : null)}
        />
      </StyledFileImporterContainer>
    )
  }

  const updateReduxChapterInfos = (chapterInfo: ChapterInfoType) => {
    // Check if the chapter information is existing in redux store
    if (props.chapterInfos?.some(chapter => chapter.chapterId == chapterInfo.chapterId)) {
      props.dispatch({
        type: actionTypes.UPDATE_CHAPTERINFOS,
        payload: {
          chapterInfo
        }
      });
    } else {
      console.log('No Chapter Info');
    }
  }

  const handleUploadAudio = useCallback(() => {
    const audioData = new FormData();
    if (audioFile) {
      setIsLoading(true);
      audioData.append('file', audioFile, `${Date.now()}_${audioFile.name}`);
      audioData.append('chapterId', selectedChapter);
      audioData.append('languageCode', selectedLanguage);
      audioData.append('isCompleted', isComplete ? 'true' : 'false');
      audioData.append('isPublished', isPublish ? 'true' : 'false');

      audioService
        .uploadAudio(audioData)
        .then(res => {
          updateReduxChapterInfos(res);
          setActiveChapterInfo(res);

          toast.success('Success to complete the audio', {
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
        .catch(error => {
          console.log(error);
          setIsLoading(false);
        })
    }
  }, [audioFile, selectedLanguage, selectedSubBook, selectedChapter]);

  const handleUploadMarkers = useCallback(() => {
    audioService
      .saveMarker({
        chapterId: selectedChapter,
        languageCode: selectedLanguage,
        markerData: jsonMarkerData
      })
      .then(result => {
        console.log(result)
        setLanguageCountVerse(jsonMarkerData.length);
        toast.success('Success to set time marker', {
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
      )
      .catch(error => console.log(error))
  }, [jsonMarkerData, selectedChapter, selectedLanguage]);

  const _renderButtonGroup = () => {
    return (
      isImport &&
      <StyledButtonGroupContainer>
        <StyledButton isdisable={edlFile ? 'false' : 'true'}>
          <Button
            label="Download CSV"
            disabled={!edlFile}
            onClick={downloadCSV}
          />
        </StyledButton>

        <StyledUploadButtonGroupContainer>
          <StyledButton isdisable={edlFile ? 'false' : 'true'}>
            <Button
              label="Save Markers"
              disabled={!edlFile}
              onClick={handleUploadMarkers}
            />
          </StyledButton>

          <StyledButton isdisable={audioFile ? 'false' : 'true'}>
            <Button
              label="Upload Audio"
              disabled={!audioFile}
              onClick={handleUploadAudio}
            />
          </StyledButton>
        </StyledUploadButtonGroupContainer>
      </StyledButtonGroupContainer>
    )
  };

  const handleTimeChange = (newTime: number) => {
    audioRef.current.currentTime = newTime;
    setAudioCurrentTime(newTime);
  };

  const handleCurrentAudioHandler = (handler: string) => {
    props.dispatch({
      type: actionTypes.SET_CURRENT_AUDIO_HANDLER,
      payload: {
        currentAudioHandler: handler
      }
    })
  };

  const _renderAudioPlayer = () => {
    return (
      (audioFile || audioSrc) &&
      <StyledAudioPlayerContainer>
        <StyledAudioPlayer>
          <AudioPlayer
            src={audioSrc}
            startTime={startTime}
            endTime={endTime}
            currentTime={audioCurrentTime}
            isPlaying={isAudioPlaying}

            setCurrentTime={(val: number) => setAudioCurrentTime(val)}
            setStartTime={(val: number) => setStartTime(val)}
            setEndTime={(val: number) => setEndTime(val)}
            setIsPlaying={(val: boolean) => setIsAudioPlaying(val)}
            setAudioDuration={(val: number) => setAudioDuration(val)}
            setCurrentAudioHandler={(val: string) => handleCurrentAudioHandler(val)}
            onTimeChange={(val: number) => handleTimeChange(val)}
          />
        </StyledAudioPlayer>
      </StyledAudioPlayerContainer>
    )
  };

  useEffect(() => {
    // Get the next marker's time
    const index = jsonMarkerData.findIndex(marker => Number(marker["Marker Time"]) >= startTime);
    let endTime = 0;
    if (index < jsonMarkerData.length - 1 && props.currentAudioHandler == 'Time Line')
      endTime = Number(jsonMarkerData[index + 1]["Marker Time"]);
    else
      endTime = audioDuration;

    setEndTime(endTime);
    setIsAudioPlaying(true);
  }, [startTime, endTime]);

  const _renderTimeLineProgress = () => {
    if (!jsonMarkerData || jsonMarkerData.length === 0) {
      return null;
    }

    return (
      <TimeLine
        startTimes={jsonMarkerData.map(marker => Number(marker["Marker Time"]))}
        duration={audioDuration}
        activeStartTime={startTime}

        setCurrentAudioHandler={(val) => handleCurrentAudioHandler(val)}
        setAudioStartTime={(val) => setStartTime(val)}
      />
    );
  };

  const _renderMarkTable = () => {
    return (
      (edlFile || (tableRows && tableRows.length > 0)) &&
      <StyledMarkTableContainer>
        <TablePanel
          headers={["Verse", "Marker Name", "Marker Time", "Action"]}
          rows={tableRows}
        />
      </StyledMarkTableContainer>
    )
  };

  const _renderBody = () => {
    return (
      <StyledAudioOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderToggle()}

        {_renderDetailSelector()}

        {_renderSummary()}

        {_renderAudioImporter()}

        {_renderEDLImporter()}

        {_renderButtonGroup()}

        {_renderAudioPlayer()}

        {_renderTimeLineProgress()}

        {_renderMarkTable()}
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
    chapterInfos: state.book.chapterInfos,
    currentLanguage: state.book.language,
    currentBook: state.book.book,
    currentAudioHandler: state.translator.currentAudioHandler,
    appTextPages: state.translator.appTextPages,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AudioOverview);