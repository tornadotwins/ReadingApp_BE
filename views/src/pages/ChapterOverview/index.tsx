import { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "@/reducers/types";
import useOrientation from "@/hooks/useOrientation";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, Bounce } from "material-react-toastify";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import { LoadingOverlay, TablePanel, Text } from "@/components/Base";

import {
  StyledContainer,
  StyledChapterOverviewContainer,
  StyledBookSelectorContainer,
  StyledTableContainer,
  StyledBackContainer,
} from "./styles";
import { ChapterOverviewPropsType } from "./types";
import Header from "@/components/Header";

import {
  ACCESS_TOKEN,
  BOOK_QURAN,
  BOOK_INJIL,
  BOOK_ZABUR,
  BOOK_TAWRAT,
} from "@/config";
import actionTypes from "@/actions/actionTypes";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import { BookType, ChapterInfoType, SubBookInfoType, VerseType } from "../BookOverview/types";

import bookService from "../../../services/book.services";
import { TableRowType } from "@/components/Base/TablePanel/types";
import { StyledSelectContainer } from "../BookOverview/styles";

// Constants
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
  const [selectedBook, setSelectedBook] = useState('Qur\'an');
  const [isLoading, setIsLoading] = useState(false);
  const [chapterInfo, setChapterInfo] = useState<ChapterInfoType | null>(null);
  const [subBookInfo, setSubBookInfo] = useState<SubBookInfoType | null>(null);
  const [verseInfos, setVerseInfos] = useState<VerseType[]>([]);
  const [tableRows, setTableRows] = useState<TableRowType[]>([]);

  const isPortrait = useOrientation();
  const navigate = useNavigate();
  const location = useLocation();
  const data = useMemo(() => location.state, [location]);

  // Get chapter information from data passed from the previous page
  useEffect(() => {
    const bookTitle = data.bookTitle;
    // get chapter information by chapter id
    const chapterId = data.chapterId;
    const bookInfo = props.bookInfos.find((bookInfo: BookType) => bookInfo.bookTitle.en == bookTitle);
    const subBookInfo = bookInfo?.subBooks.find(
      (subBook: SubBookInfoType) => subBook.chapterInfos.find(
        (chapterInfo: ChapterInfoType) => chapterInfo.chapterId == chapterId
      )
    );

    const chapterInfo = subBookInfo?.chapterInfos.find((chapterInfo: ChapterInfoType) => chapterInfo?.chapterId == chapterId);

    subBookInfo && setSubBookInfo(subBookInfo);
    chapterInfo && setChapterInfo(chapterInfo);
  }, [data, props.bookInfos]);

  // Fetch Verses by chapterId
  useEffect(() => {
    const fetchVersesInfo = async () => {
      setIsLoading(true);

      try {
        const chapterInfo: ChapterInfoType = await bookService.getVersesByChapterId(data.chapterId);
        chapterInfo.verses.map((verse: VerseType) => {
          setTableRows((prevTableRows) =>
            [
              ...prevTableRows,
              {
                SubBook_English: subBookInfo?.subBookTitle?.en || '',
                Chapter_Number: chapterInfo.chapterNumber.toString() || '',
                Verse_Number: verse.verseNumber.toString() || '',
                Verse_English: verse.verseText.en || ''
              }
            ]
          )
        });

        setVerseInfos(chapterInfo.verses);

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
      }
    };

    fetchVersesInfo();
  }, [data]);

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

          <StyledSelectContainer onClick={() => navigate('/admin/bookoverview')}>
            <StyledBackContainer>
              <KeyboardBackspaceIcon />
              <Text fontFamily="Inter" color="#155D74" fontWeight="500">overview</Text>
            </StyledBackContainer>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterOverview);
