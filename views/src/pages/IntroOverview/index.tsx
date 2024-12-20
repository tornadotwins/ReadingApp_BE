import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  Button,
  SelectBox,
  Switch
} from "@/components/Base";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import TitleBlock from "@/components/IntroBlock/TitleBlock";
import TextBlock from "@/components/IntroBlock/TextBlock";
import ImageBlock from "@/components/IntroBlock/ImageBlock";
import useOrientation from "@/hooks/useOrientation";

import { AppStateType } from "@/reducers/types";
import { SubBookInfoType } from "../BookOverview/types";
import {
  IntroOverviewPropsType,
  SelectOptionType,
} from "./types";

import actionTypes from "@/actions/actionTypes";
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
  BOOK_INJIL,
  BOOK_TAWRAT,
} from "@/config";
import {
  StyledContainer,
  StyledIntroOverviewContainer,
  StyledBookSelectorContainer,
  StyledSelectContainer,
  StyledSelectGroupContainer,
  StyledStatusManagerContainer,
  StyledButtonContainer,
  StyledIntroControlButtonGroup,
  StyledButtonGroupContainer,
  StyledIntroControlButtonContainer,
  StyledPreviewControlButtonContainer,
  StyledBlockGroup,
} from "./styles";
import { getLanguageFromLanguageCode } from "@/utils";
import CollapsibleBlock from "@/components/IntroBlock/CollapsibleBlock";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function IntroOverview(props: IntroOverviewPropsType) {
  const location = useLocation();
  const [selectedBook, setSelectedBook] = useState(props.currentBook);
  const [selectedSubBook, setSelectedSubBook] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState(props.currentLanguage);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const [showPreview, setShowPreview] = useState(false);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const languages = useMemo(() => location.state.languages, [location]);

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

  // Render Header
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

  // Render book selector
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

  // Get sub book options
  useEffect(() => {
    const currentBookInfo = props.bookInfos.find(bookInfo => bookInfo.bookTitle.en == props.currentBook);

    // Update subbook options
    if (currentBookInfo) {
      const uniqueSubBooks = Array.from(
        new Set(currentBookInfo.subBooks.map(sb => sb.subBookId))
      ).map(id => currentBookInfo.subBooks.find(sb => sb.subBookId === id)!);

      const newSubBookOptions = uniqueSubBooks.map((subBook: SubBookInfoType) => ({
        label: subBook.subBookTitle?.[selectedLanguage],
        value: subBook.subBookId
      }));

      setSubBookSelectOptions(newSubBookOptions);
      setSelectedSubBook(newSubBookOptions[0].value);
    }
  }, [props.currentBook]);

  const handleSelectSubBookChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedSubBook(value);
  }

  const handleSelectLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
  }

  // Render Detailed Select box (language & sub book)
  const _renderDetailSelector = () => {
    return (
      <StyledSelectContainer>
        <StyledSelectGroupContainer>
          {
            (selectedBook == BOOK_INJIL || selectedBook == BOOK_TAWRAT) &&
            <SelectBox
              label=""
              options={subBookSelectOptions}
              value={subBookSelectOptions.find(option => option.value === selectedSubBook) ? selectedSubBook : ''}
              backgroundColor="#fff"
              textColor="#155D74"

              onChange={handleSelectSubBookChange}
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
  }

  // Render Status Manager component
  const _renderStatusManager = () => {
    return (
      <StyledStatusManagerContainer>
        <Switch
          label="Complete"
          value={isCompleted}
          onChange={() => setIsCompleted(!isCompleted)}
        />

        <Switch
          label="Publish"
          value={isPublished}
          onChange={() => setIsPublished(!isPublished)}
        />

        <StyledButtonContainer isdisable={"false"}>
          <Button
            label="Save Changes"
            onClick={() => { }}
          />
        </StyledButtonContainer>
      </StyledStatusManagerContainer>
    )
  }

  // Render Intro Controller Button Group
  const _renderIntroControlButtonGroup = () => {
    return (
      <StyledIntroControlButtonGroup>
        <StyledButtonGroupContainer>
          <StyledIntroControlButtonContainer>
            <Button
              label="Add Text"
              onClick={() => { }}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Title"
              onClick={() => { }}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Image"
              onClick={() => { }}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Collapsible"
              onClick={() => { }}
            />
          </StyledIntroControlButtonContainer>
        </StyledButtonGroupContainer>

        <StyledPreviewControlButtonContainer>
          <Button
            label={showPreview ? 'Hide Preview' : 'Show Preview'}
            onClick={() => setShowPreview(!showPreview)}
          />
        </StyledPreviewControlButtonContainer>
      </StyledIntroControlButtonGroup>
    )
  }

  const _renderBlocks = () => {
    return (
      <StyledBlockGroup>
        <TitleBlock
          language={getLanguageFromLanguageCode(selectedLanguage)}
          inputVal=""

          onInputChange={() => { }}
          onDelete={() => { }}
        />

        <TextBlock
          language={getLanguageFromLanguageCode(selectedLanguage)}
          inputVal=""

          onInputChange={() => { }}
          onDelete={() => { }}
        />

        <ImageBlock
          image=""
          alt=""

          onImageInputChange={() => { }}
          onAltInputChange={() => { }}
          onDelete={() => { }}
        />

        <CollapsibleBlock
          language={getLanguageFromLanguageCode(selectedLanguage)}
          
          onDelete={() => { }}
        />
      </StyledBlockGroup>
    )
  }

  const _renderBody = () => {
    return (
      <StyledIntroOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderDetailSelector()}

        {_renderStatusManager()}

        {_renderIntroControlButtonGroup()}

        {_renderBlocks()}
      </StyledIntroOverviewContainer>
    )
  }

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderHeader()}

        {_renderBody()}
      </StyledContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroOverview);