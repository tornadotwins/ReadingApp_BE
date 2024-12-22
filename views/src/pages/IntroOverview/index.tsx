import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {
  Button,
  LoadingOverlay,
  SelectBox,
  Switch
} from "@/components/Base";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import TitleBlock from "@/components/IntroBlock/TitleBlock";
import TextBlock from "@/components/IntroBlock/TextBlock";
import ImageBlock from "@/components/IntroBlock/ImageBlock";
import CollapsibleBlock from "@/components/IntroBlock/CollapsibleBlock";
import useOrientation from "@/hooks/useOrientation";

import { AppStateType } from "@/reducers/types";
import { SubBookInfoType } from "../BookOverview/types";
import {
  BlockType,
  CollapsibleValType,
  ImageValType,
  IntroOverviewPropsType,
  IntroType,
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
import bookService from "@/services/book.services";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function IntroOverview(props: IntroOverviewPropsType) {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const [selectedBook, setSelectedBook] = useState(props.currentBook);
  const [selectedSubBook, setSelectedSubBook] = useState('');
  const [currentChapter, setCurrentChapter] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(props.currentLanguage);

  const [subBookSelectOptions, setSubBookSelectOptions] = useState<SelectOptionType[]>([]);

  const [isCompleted, setIsCompleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const [showPreview, setShowPreview] = useState(false);

  const [blocks, setBlocks] = useState<BlockType[]>([]);

  const [enableSaveBtn, setEnableSaveBtn] = useState(false);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const languages = useMemo(() => location.state.languages, [location]);

  // Get current intro chapter info
  useEffect(() => {
    const currentBookInfo = props.bookInfos.find(book => book.bookTitle.en == props.currentBook);
    const currentSubBookInfo = currentBookInfo?.subBooks?.find(subBook => subBook.subBookId == selectedSubBook);
    const currentChapterId = currentSubBookInfo?.chapterInfos[0]?.chapterId || '';

    setCurrentChapter(currentChapterId);
  }, [selectedSubBook]);

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

  const handleSave = useCallback(() => {
    setIsLoading(true);
    const introResult: IntroType[] = [];

    blocks.map((block, index) => {
      switch (block.type) {
        case 'title': {
          const title = block.value as string;
          const introObj: IntroType = {
            chapter: currentChapter,
            title: {
              [selectedLanguage]: title,
            },
            text: {},
            image: {},
            number: index + 1,
            isCollapse: false,
            content: []
          }

          introResult.push(introObj);

          break;
        }

        case 'text': {
          const text = block.value as string;
          const introObj: IntroType = {
            chapter: currentChapter,
            title: {},
            text: {
              [selectedLanguage]: text,
            },
            image: {},
            number: index + 1,
            isCollapse: false,
            content: [],
          };

          introResult.push(introObj);

          break;
        }

        case 'image': {
          const imageObj = block.value as ImageValType;
          const imageUrl = imageObj.image;
          const imageAlt = imageObj.alt;

          const introObj: IntroType = {
            chapter: currentChapter,
            title: {},
            text: {},
            image: {
              url: imageUrl,
              alt: imageAlt,
            },
            number: index + 1,
            isCollapse: false,
            content: [],
          };

          introResult.push(introObj);

          break;
        }

        case 'collapsible': {
          let introObj: IntroType = {
            chapter: currentChapter,
            title: {},
            text: {},
            image: {},
            number: index + 1,
            isCollapse: true,
            content: [],
          }
          const collapseResult = [];
          const collapseObj = block.value as CollapsibleValType;

          const collapseTitle = collapseObj['0'].value;
          introObj = {
            ...introObj,
            title:
            {
              [selectedLanguage]:
                collapseTitle
            }
          };

          for (const key in collapseObj) {
            const contentObj = collapseObj[key];
            if (contentObj.type == 'text') {
              const obj = {
                [selectedLanguage]: contentObj.value
              };

              collapseResult.push(obj);
            } else if (contentObj.type == 'image') {
              const imageVal = contentObj.value as ImageValType;
              const obj = {
                image: imageVal.image,
                alt: imageVal.alt,
              };

              collapseResult.push(obj);
            }
          }

          introObj = {
            ...introObj,
            content: collapseResult
          }

          introResult.push(introObj);

          break;
        }
      }
    });

    const requestData = {
      languageCode: selectedLanguage,
      subBookId: selectedSubBook,
      chapterId: currentChapter,
      isCompleted: {
        [selectedLanguage]: isCompleted,
      },
      isPublished: {
        [selectedLanguage]: isPublished,
      },
      verses: introResult
    };

    bookService
      .updateIntroData(requestData)
      .then(result => {
        console.log(result);

        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);

        setIsLoading(false);
      });
  }, [blocks]);

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

        <StyledButtonContainer isdisable={!enableSaveBtn ? 'true' : 'false'}>
          <Button
            label="Save Changes"
            disabled={!enableSaveBtn}

            onClick={handleSave}
          />
        </StyledButtonContainer>
      </StyledStatusManagerContainer>
    )
  }

  // Add Block
  const handleAddBlock = (type: 'title' | 'text' | 'image' | 'collapsible') => {
    const id = `${type}-${Date.now()}`;
    const newBlock: BlockType = {
      id,
      blockIndex: blocks.length,
      type: type,
      value: type == 'image' ? { image: '', alt: '' } : ''
    };

    setEnableSaveBtn(true);
    setBlocks([...blocks, newBlock]);
  }

  // Delete a block
  const handleDeleteBlock = (id: string) => {
    const newBlocks = blocks.filter(block => block.id !== id);

    setEnableSaveBtn(true);
    setBlocks(newBlocks);
  }

  // Render Intro Controller Button Group
  const _renderIntroControlButtonGroup = () => {
    return (
      <StyledIntroControlButtonGroup>
        <StyledButtonGroupContainer>
          <StyledIntroControlButtonContainer>
            <Button
              label="Add Title"
              onClick={() => handleAddBlock('title')}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Text"
              onClick={() => handleAddBlock('text')}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Image"
              onClick={() => handleAddBlock('image')}
            />
          </StyledIntroControlButtonContainer>

          <StyledIntroControlButtonContainer>
            <Button
              label="Add Collapsible"
              onClick={() => handleAddBlock('collapsible')}
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

  const handleInputChange = (id: string, value: string) => {
    setEnableSaveBtn(true);
    setBlocks(blocks.map(block => block.id == id ? { ...block, value } : block));
  }

  const handleUpdateImageBlock = (id: string, newData: object) => {
    setEnableSaveBtn(true);
    setBlocks((prevBlocks) =>
      prevBlocks.map((block) =>
        block.id === id ?
          {
            ...block,
            value: { ...(block.value as ImageValType), ...newData }
          } :
          block
      )
    );
  };

  const handleCollapsibleBlockChange = (id: string, newValue: object) => {
    setEnableSaveBtn(true);
    setBlocks((prevBlocks) =>
      prevBlocks.map(block =>
        block.id == id ? { ...block, value: { ...block.value as CollapsibleValType, ...newValue } } : block
      )
    )
  }

  const handleReorderBlocks = (index: number, direction: 'up' | 'down') => {
    setEnableSaveBtn(true);
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      if (direction === "up" && index > 0) {
        [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      }
      if (direction === "down" && index < newBlocks.length - 1) {
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      }
      return newBlocks;
    });
  }

  const _renderBlocks = () => {
    return (
      <StyledBlockGroup>
        {blocks.map((block, index) => {
          switch (block.type) {
            case 'title':
              return (
                <TitleBlock
                  key={block.id}
                  language={getLanguageFromLanguageCode(selectedLanguage)}
                  inputVal={block.value as string}
                  blockIndex={index}

                  onInputChange={(val) => handleInputChange(block.id, val)}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );

            case 'text':
              return (
                <TextBlock
                  key={block.id}
                  language={getLanguageFromLanguageCode(selectedLanguage)}
                  inputVal={block.value as string}
                  blockIndex={index}

                  onInputChange={(val) => handleInputChange(block.id, val)}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );

            case 'image':
              return (
                <ImageBlock
                  key={block.id}
                  image={((block.value) as ImageValType).image}
                  alt={((block.value) as ImageValType).alt}
                  blockIndex={index}

                  onImageInputChange={(val) => handleUpdateImageBlock(block.id, { image: val })}
                  onAltInputChange={(val) => handleUpdateImageBlock(block.id, { alt: val })}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );

            case 'collapsible':
              return (
                <CollapsibleBlock
                  key={block.id}
                  language={getLanguageFromLanguageCode(selectedLanguage)}
                  blockIndex={index}

                  onChange={(val) => handleCollapsibleBlockChange(block.id, val)}
                  onDelete={() => handleDeleteBlock(block.id)}
                  onMoveUp={() => handleReorderBlocks(index, "up")}
                  onMoveDown={() => handleReorderBlocks(index, "down")}
                />
              );

            default:
              return null;
          }
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(IntroOverview);