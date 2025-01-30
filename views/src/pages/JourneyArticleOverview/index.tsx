import { useCallback, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toast, Bounce, ToastContainer } from "material-react-toastify";

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
import {
  BlockType,
  CollapsibleValType,
  ImageValType,
  ArticleOverviewPropsType,
  IntroType,
} from "./types";

import actionTypes from "@/actions/actionTypes";
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
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
  StyledDynamicBlockGroup,
  StyledBlockGroupContainer,
} from "./styles";
import { getLanguageFromLanguageCode } from "@/utils";

import journeyService from "@/services/journey.services";
import { ArticleVerseType, JourneyCardType } from "../JourneyOverview/types";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function JourneyArticleOverview(props: ArticleOverviewPropsType) {
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);

  const [selectedJourneyBook, setSelectedJourneyBook] = useState(props.currentJourneyBook || "");
  const [selectedLanguage, setSelectedLanguage] = useState(props.currentLanguage);

  const [isCompleted, setIsCompleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  const [blocks, setBlocks] = useState<BlockType[]>([]);

  const [enableSaveBtn, setEnableSaveBtn] = useState(false);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  const languages = useMemo(() => location.state.languages, [location]);

  // Get Intro verses
  // useEffect(() => {
  //   setIsLoading(true);
  //   setBlocks([]);
  //   journey
  //     .getIntroVerses(currentChapter)
  //     .then(result => {
  //       // Set complete/publish
  //       setIsCompleted(result.isCompleted?.[selectedLanguage] || false);
  //       setIsPublished(result.isPublished?.[selectedLanguage] || false);

  //       const blocks: BlockType[] = [];
  //       if (result.verses && result.verses.length > 0) {
  //         result.verses?.map((verse: IntroType) => {
  //           const verseNumber = verse.number;
  //           if (!verse.isCollapse && verse.title) {
  //             const block: BlockType = {
  //               id: verse.id || `title-${Date.now()}-${Math.random()}`,
  //               type: 'title',
  //               blockIndex: verseNumber,
  //               value: verse.title?.[selectedLanguage]
  //             };

  //             blocks.push(block);
  //           } else if (!verse.isCollapse && verse.text) {
  //             const block: BlockType = {
  //               id: verse.id || `text-${Date.now()}-${Math.random()}`,
  //               type: 'text',
  //               blockIndex: verseNumber,
  //               value: verse.text?.[selectedLanguage]
  //             };

  //             blocks.push(block);
  //           } else if (!verse.isCollapse && verse.image) {
  //             const block: BlockType = {
  //               id: verse.id || `image-${Date.now()}-${Math.random()}`,
  //               type: 'image',
  //               blockIndex: verseNumber,
  //               value: verse.image as ImageValType
  //             };

  //             blocks.push(block);
  //           } else if (verse.isCollapse) {
  //             const block: BlockType = {
  //               id: verse.id || `collapsible-${Date.now()}-${Math.random()}`,
  //               type: 'collapsible',
  //               blockIndex: verseNumber,
  //               value: verse
  //             };

  //             blocks.push(block);
  //           }
  //         });
  //       }

  //       setBlocks(blocks);
  //       setIsLoading(false);
  //     })
  //     .catch(error => {
  //       console.log('warning/error while getting intro information: \n', error);
  //       toast.warning('No introduction information for the chapter.', {
  //         position: 'top-right',
  //         draggable: true,
  //         theme: 'colored',
  //         transition: Bounce,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         hideProgressBar: false,
  //         autoClose: 3000
  //       });
  //       setIsLoading(false);
  //     })
  // }, [currentChapter, selectedLanguage]);

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

  const handleSelectedBook = (journeyBookTitle: string) => {
    setSelectedJourneyBook(journeyBookTitle);
    navigate('/admin/journeyoverview')

    props.dispatch({
      type: actionTypes.SET_JOURNEY_BOOK,
      payload: {
        journeyBookTitle
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
          selectedBook={selectedJourneyBook}
        />
      </StyledBookSelectorContainer>
    )
  };

  const handleSelectLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setSelectedLanguage(value);
  };

  // Render Detailed Select box (language & sub book)
  const _renderDetailSelector = () => {
    return (
      <StyledSelectContainer>
        <StyledSelectGroupContainer>
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

  // handle complete/publish switch
  const handleChapterStatus = (isCompleted: boolean, isPublished: boolean) => {
    setIsCompleted(isCompleted);
    isCompleted && setIsPublished(isPublished);
    !isCompleted && setIsPublished(false);
    setEnableSaveBtn(true);
  };

  const updateReduxBookInfoWithChapter = (updatedArticleInfo: JourneyCardType) => {
    // const newChapterInfo: ChapterInfoType = {
    //   chapterAudio: updatedChapterInfo.audio,
    //   chapterId: updatedChapterInfo._id,
    //   chapterNumber: updatedChapterInfo.chapterNumber,
    //   chapterTranslated: updatedChapterInfo.isTranslated,
    //   chapterIsCompleted: updatedChapterInfo.isCompleted,
    //   chapterIsPublished: updatedChapterInfo.isPublished,
    //   subBookId: updatedChapterInfo.subBook,
    // }
    console.log(updatedArticleInfo);

    ////need to be updated
  };

  const handleSave = useCallback(() => {
    setIsLoading(true);
    const articleVerses: ArticleVerseType[] = [];

    blocks.map((block, index) => {
      switch (block.type) {
        case 'title': {
          const title = block.value as string;
          const articleObj: ArticleVerseType = {
            article: props.currentArticleId,
            title: {
              [selectedLanguage]: title,
            },
            text: {},
            image: {},
            number: index + 1,
            isCollapse: false,
            content: []
          }

          articleVerses.push(articleObj);

          break;
        }

        case 'text': {
          const text = block.value as string;
          const articleObj: ArticleVerseType = {
            article: props.currentArticleId,
            title: {},
            text: {
              [selectedLanguage]: text,
            },
            image: {},
            number: index + 1,
            isCollapse: false,
            content: [],
          };

          articleVerses.push(articleObj);

          break;
        }

        case 'image': {
          const imageObj = block.value as ImageValType;
          const imageUrl = imageObj.url;
          const imageAlt = imageObj.alt;

          const articleObj: ArticleVerseType = {
            article: props.currentArticleId,
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

          articleVerses.push(articleObj);

          break;
        }

        case 'collapsible': {
          let articleObj: ArticleVerseType = {
            article: props.currentArticleId,
            title: {},
            text: {},
            image: {},
            number: index + 1,
            isCollapse: true,
            content: [],
          }
          const collapseResult = [];
          const collapseObj = block.value as CollapsibleValType;

          const collapseTitle = collapseObj['0']?.value;
          articleObj = {
            ...articleObj,
            title:
            {
              [selectedLanguage]: collapseTitle as string
            }
          };

          for (const key of Object.keys(collapseObj).slice(1)) {
            const contentObj = collapseObj[key];
            if (contentObj.type == 'title') {
              const obj = {
                [selectedLanguage]: contentObj.value,
                isTitle: true,
              };

              collapseResult.push(obj);
            } else if (contentObj.type == 'text') {
              const obj = {
                [selectedLanguage]: contentObj.value,
                isTitle: false,
              };

              collapseResult.push(obj);
            } else if (contentObj.type == 'image') {
              const imageVal = contentObj.value as ImageValType;
              const obj = {
                url: imageVal.url,
                alt: imageVal.alt,
              };

              collapseResult.push(obj);
            }
          }

          articleObj = {
            ...articleObj,
            content: collapseResult
          }

          articleVerses.push(articleObj);

          break;
        }
      }
    });

    const requestData = {
      parentId: props.currentArticleId,
      languageCode: selectedLanguage,
      isCompleted: {
        [selectedLanguage]: isCompleted,
      },
      isPublished: {
        [selectedLanguage]: isPublished,
      },
      verses: articleVerses
    };

    journeyService
      .saveArticle(requestData)
      .then(result => {
        console.log(result);

        toast.success('Successfully saved.', {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000,
        });

        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error.message, {
          position: 'top-right',
          draggable: true,
          theme: "colored",
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000,
        });

        setIsLoading(false);
      });
  }, [blocks, isCompleted, isPublished]);

  // Render Status Manager component
  const _renderStatusManager = () => {
    return (
      <StyledStatusManagerContainer>
        <Switch
          label="Complete"
          value={isCompleted}
          disable={blocks.length == 0}
          onChange={() => handleChapterStatus(!isCompleted, isPublished)}
        />

        <Switch
          label="Publish"
          value={isPublished}
          disable={!isCompleted}
          onChange={() => handleChapterStatus(isCompleted, !isPublished)}
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
  };

  // Add Block
  const handleAddBlock = (type: 'title' | 'text' | 'image' | 'collapsible') => {
    const id = `${type}-${Date.now()}`;
    const newBlock: BlockType = {
      id,
      blockIndex: blocks.length,
      type: type,
      value: type == 'image' ? { url: '', alt: '' } : ''
    };

    setEnableSaveBtn(true);
    setBlocks([...blocks, newBlock]);
  };

  // Delete a block
  const handleDeleteBlock = (id: string) => {
    const newBlocks = blocks.filter(block => block.id !== id);

    setEnableSaveBtn(true);
    setBlocks(newBlocks);
  };

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
      </StyledIntroControlButtonGroup>
    )
  };

  const handleInputChange = (id: string, value: string) => {
    setEnableSaveBtn(true);
    setBlocks(blocks.map(block => block.id == id ? { ...block, value } : block));
  };

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

    // Disable Save button when collapsible title is blank
    if (!Object.values(newValue)[0]?.value)
      setEnableSaveBtn(false)

    setBlocks((prevBlocks) =>
      prevBlocks.map(block =>
        block.id == id ? { ...block, value: { ...block.value as CollapsibleValType, ...newValue } } : block
      )
    )
  };

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
  };

  const _renderDynamicBlocks = () => {
    return (
      <StyledDynamicBlockGroup>
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
                  url={((block.value) as ImageValType).url}
                  alt={((block.value) as ImageValType).alt}
                  blockIndex={index}

                  onImageInputChange={(val) => handleUpdateImageBlock(block.id, { url: val })}
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
                  value={block.value as IntroType}

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
      </StyledDynamicBlockGroup>
    )
  };

  const _renderBlockGroup = () => {
    return (
      <StyledBlockGroupContainer>
        {_renderDynamicBlocks()}
      </StyledBlockGroupContainer>
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

        {_renderBlockGroup()}
      </StyledIntroOverviewContainer>
    )
  };

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderHeader()}

        {_renderBody()}
      </StyledContainer>

      {isLoading && <LoadingOverlay />}
      <ToastContainer />
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
    currentJourneyBook: state.journeys.journeyTitle,
    articleId: state.journeys.parentId,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneyArticleOverview);