import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toast, Bounce, ToastContainer } from "material-react-toastify";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

import useOrientation from "@/hooks/useOrientation";

import {
  StyledBackButtonContainer,
  StyledBookSelectorContainer,
  StyledButtonContainer,
  StyledContainer,
  StyledDirectoryControlButtonGroupContainer,
  StyledDynamicJourneyBlockGroupContainer,
  StyledDynamicJourneyContainer,
  StyledJourneyOverviewContainer,
  StyledPagePreviewContainer,
  StyledPreferenceSelectorContainer,
  StyledPreviewBlockContainer,
  StyledPreviewTitleContainer,
  StyledJourneyContentContainer,
} from "./styled";
import { JourneyBlockType, JourneyOverviewPropsType } from "./types";
import { LanguageType } from "../types";
import { AppStateType } from "@/reducers/types";

import { getLanguageCodeFromLanguage } from "@/utils";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import { Button, LoadingOverlay, Text } from "@/components/Base";
import BookSelector from "@/components/BookSelector";
import JourneyPreferenceSelector from "@/components/JourneyPreferenceSelector";
import JourneyBlock from "@/components/JourneyBlock/JourneyBlock";

import bookService from "@/services/book.services";
import journeyService from "@/services/journey.services";

import actionTypes from "@/actions/actionTypes";
import {
  JOURNEY_QURAN,
  ACCESS_TOKEN,
  JOURNEY_SELECTORS,
  SERIES_LOGO_IMAGE_SELECT_OPTIONS
} from "@/config";
import JourneyPreview from "@/components/JourneyPreview/JourneyPreview";
import { PreviewJourneyCardType } from "@/components/JourneyPreview/types";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function JourneyOverview(props: JourneyOverviewPropsType) {
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLanguage, setCurrnetLanguage] = useState('');
  const [selectedBook, setSelectedBook] = useState(props.currentJourneyTitle || JOURNEY_QURAN);
  const [enableSaveBtn, setEnableSaveBtn] = useState(false);

  const [journeyBlocks, setJourneyBlocks] = useState<JourneyBlockType[]>([]);
  const [previewBlocks, setPreviewBlocks] = useState<PreviewJourneyCardType[]>([]);

  const [depth, setDepth] = useState(1);

  const isPortrait = useOrientation();
  const navigate = useNavigate();

  // Memorized language processing
  const processLanguages = useCallback(() => {
    if (!props.currentUser?.roles) return [];

    const uniqueLanguages = props.currentUser.roles.reduce<LanguageType[]>((acc, role) => {
      if (role.role !== 'none') {
        const languageCode = getLanguageCodeFromLanguage(role.language);
        const exists = acc.some(item => item.value === languageCode);

        if (!exists) {
          acc.push({ value: languageCode, label: role.language });
        }
      }

      return acc;
    }, []);

    if (!props.currentLanguage) {
      props.dispatch({
        type: actionTypes.SET_CURRENT_LANGUAGE,
        payload: {
          language: uniqueLanguages[0].value
        }
      })
    }

    return uniqueLanguages;
  }, [props.currentUser]);

  useEffect(() => {
    const processedLanguages = processLanguages();
    setLanguages(processedLanguages);

    if (processedLanguages.length > 0 && !processedLanguages.some(lang => lang.value === currentLanguage))
      setCurrnetLanguage(processedLanguages[0].value);
  }, [props.currentUser, currentLanguage, processLanguages]);

  const onLogOut = () => {
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
  }

  const _renderJourneyHeader = () => {
    return (
      <Header
        isLoggedIn
        username={props.currentUser.username}
        isAdmin={props.currentUser.isAdmin}
        onLogOut={onLogOut}
      />
    )
  }

  const handleSelectedBook = (journeyTitle: string) => {
    setSelectedBook(journeyTitle);

    props.dispatch({
      type: actionTypes.SET_JOURNEY_BOOK,
      payload: {
        journeyTitle
      }
    })

    props.dispatch({
      type: actionTypes.SET_JOURNEY_DEPTH,
      payload: {
        depth: 1
      }
    });

    setDepth(1);
  }

  const _renderJourneySelector = () => {
    return (
      <StyledBookSelectorContainer>
        <BookSelector
          books={JOURNEY_SELECTORS.map(book => ({
            bookTitle: book.bookTitle,
            onClick: () => handleSelectedBook(book.value)
          }))}
          selectedBook={selectedBook}
        />
      </StyledBookSelectorContainer>
    )
  }

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrnetLanguage(value);
  }

  // Save journey blocks
  const handleSave = () => {
    setIsLoading(true);
    const blocksToSave = journeyBlocks.map(block => ({
      id: block.id,
      number: block.blockIndex,
      parent: props.parentJourneyId,
      parentModel: depth == 1 ? 'Book' : 'Journey',
      depth: depth,
      isArticle: block.type == 'article' ? true : false,
      image: { url: block.seriesLogo, alt: "Series Logo" },
      seriesTitle: { [currentLanguage]: block.seriesTitle },
      title: { [currentLanguage]: block.title },
    }));

    const dataToSave = {
      languageCode: currentLanguage,
      journeyCards: blocksToSave
    };

    journeyService
      .saveJourneyStage(dataToSave)
      .then(res => {
        const updatedJourneyBlocks: JourneyBlockType[] = res.map(card => ({
          id: card._id || `${card.isArticle ? 'article' : 'directory'}-${Date.now()}`,
          blockIndex: card.number,
          type: card.isArticle ? 'article' : 'directory',
          title: card.title?.[currentLanguage] as string,
          seriesTitle: card.seriesTitle?.[currentLanguage] as string,
          seriesLogo: card.image.url as string,
        }));

        props.dispatch({
          type: actionTypes.UPDATE_JOURNEY_CARDS,
          payload: {
            journeyCards: res
          }
        });

        setJourneyBlocks(updatedJourneyBlocks);

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
        toast.error(error, {
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

  const _renderJourneyPreferenceSelector = () => {
    return (
      <StyledPreferenceSelectorContainer>
        <JourneyPreferenceSelector
          availableLanguages={languages}
          currentLanguage={currentLanguage}
          // enableComplete
          // enablePublish
          enableSaveBtn={enableSaveBtn}

          handleLanguageChange={handleLanguageChange}
          // handleCompleteChange={handleCompleteChange}
          // handlePublishChange={handlePublishChange}
          handleSavePreference={handleSave}
        />
      </StyledPreferenceSelectorContainer>
    )
  }

  const addJourneyCard = (isArticle: boolean) => {
    const id = `${isArticle ? 'article' : 'directory'}-${Date.now()}`;
    const newBlock: JourneyBlockType = {
      id,
      blockIndex: journeyBlocks.length,
      type: isArticle ? 'article' : 'directory',
      title: '',
      seriesTitle: '',
      seriesLogo: ''
    }

    setEnableSaveBtn(true);
    setJourneyBlocks([...journeyBlocks, newBlock]);
  }

  const deleteJourneyCard = (id: string) => {
    const newBlocks = journeyBlocks
      .filter(block => block.id !== id)
      .map((block, index) => ({ ...block, blockIndex: index }));

    setEnableSaveBtn(true);
    setJourneyBlocks(newBlocks);
  }

  // Enable/Disable Save button
  useEffect(() => {
    journeyBlocks.length > 0 ?
      setEnableSaveBtn(true) :
      setEnableSaveBtn(false);
  }, [journeyBlocks]);

  // Reorder journey cards
  const reorderJourneyCards = (index: number, direction: 'up' | 'down') => {
    setEnableSaveBtn(true);
    setJourneyBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];

      if (direction === "up" && index > 0) {
        [newBlocks[index], newBlocks[index - 1]] = [newBlocks[index - 1], newBlocks[index]];
      } else if (direction === "down" && index < newBlocks.length - 1) {
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
      }

      console.log(newBlocks.map((block, i) => ({ ...block, blockIndex: i })))

      // Reassign blockIndex based on new order
      return newBlocks.map((block, i) => ({ ...block, blockIndex: i }));
    });
  };

  // Handle change in title in block
  const handleTitleChange = (id: string, value: string) => {
    setEnableSaveBtn(true);
    setJourneyBlocks(journeyBlocks.map(block => block.id == id ? { ...block, title: value } : block));
  }

  // Handle change in series title in block
  const handleSeriesTitleChange = (id: string, value: string) => {
    setEnableSaveBtn(true);
    setJourneyBlocks(journeyBlocks.map(block => block.id == id ? { ...block, seriesTitle: value } : block));
  }

  // Handle change in series logo in block
  const handleSeriesLogoChange = (id: string, value: string) => {
    setEnableSaveBtn(true);
    setJourneyBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === id ? { ...block, seriesLogo: value } : block
      )
    );
  }

  // When the page is navigated from library page, set depth 1
  useEffect(() => {
    if (!props.parentJourneyId)
      setDepth(1);
  }, []);

  // Open block (navigate to Articles page / open next stage's journey cards)
  const handleOpen = (blockId: string, blockTitle: string, isArticle: boolean) => {
    props.dispatch({
      type: actionTypes.SET_JOURNEY_PARENT_ID,
      payload: {
        parentId: blockId
      }
    });

    props.dispatch({
      type: actionTypes.SET_JOUREY_PARENT_TITLE,
      payload: {
        title: blockTitle
      }
    });

    if (isArticle) {
      navigate('/admin/articleoverview');
      props.dispatch({
        type: actionTypes.SET_JOURNEY_DEPTH,
        payload: {
          depth: depth
        }
      })
    } else {
      setDepth(prevDepth => prevDepth + 1);
    }
  }

  // Render "Add Article"/"Add Directory" buttons
  const _renderJourneyControlButtonGroup = () => {
    return (
      <StyledDirectoryControlButtonGroupContainer>
        <StyledButtonContainer>
          <Button
            label="Add Article"
            onClick={() => addJourneyCard(true)}
          />
        </StyledButtonContainer>

        <StyledButtonContainer>
          <Button
            label="Add Directory"
            onClick={() => addJourneyCard(false)}
          />
        </StyledButtonContainer>
      </StyledDirectoryControlButtonGroupContainer>
    )
  }

  // Set Journey Book Information when hit different journey book tab in order to get book id(for parent id) and journey book image
  useEffect(() => {
    const fetchJourneyBookInfo = async () => {
      setIsLoading(true);
      try {
        const result = await bookService.getBookInfoByTitle(selectedBook);
        props.dispatch({
          type: actionTypes.SET_JOURNEY_PARENT_ID,
          payload: {
            parentId: result.bookId,
          }
        });

        props.dispatch({
          type: actionTypes.SET_JOURNEY_IMAGE,
          payload: {
            image: result.markImage
          }
        })
      } catch (error) {
        toast.error('Failed to fetch journey book information', {
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
    }

    fetchJourneyBookInfo();
  }, [selectedBook]);

  // Whenever open page, fetch card infos
  useEffect(() => {
    setIsLoading(true);

    journeyService
      .getJourneyStage(props.parentJourneyId)
      .then(res => {
        if (res.cards && res.cards.length > 0) {
          const journeyCards = res.cards;
          const updatedJourneyBlocks: JourneyBlockType[] = journeyCards.map(card => ({
            id: card._id || `${card.isArticle ? 'article' : 'directory'}-${Date.now()}`,
            blockIndex: card.number || 1,
            type: card.isArticle ? 'article' : 'directory',
            title: (card.title?.[currentLanguage] || "") as string,
            seriesTitle: (card.seriesTitle?.[currentLanguage] || "") as string,
            seriesLogo: card.image.url as string || '',
          }));

          props.dispatch({
            type: actionTypes.UPDATE_JOURNEY_CARDS,
            payload: {
              journeyCards: journeyCards
            }
          });

          setJourneyBlocks(updatedJourneyBlocks);
        } else {
          setJourneyBlocks([]);
        }

        setIsLoading(false);
      })
      .catch(error => {
        toast.error(error, {
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
  }, [props.parentJourneyId, currentLanguage]);

  const goBack = () => {

  }

  const _renderDynamicJourneyBlocks = () => {
    return (
      <StyledDynamicJourneyContainer>
        {
          depth > 1 &&
          <StyledBackButtonContainer onClick={goBack}>
            <ArrowBackIcon />
            <Text
              color="#155D74"
              fontFamily="Inter"
              fontWeight="500"
              fontSize={16}
              lineHeight={24}
            >
              Back
            </Text>
          </StyledBackButtonContainer>
        }

        <StyledDynamicJourneyBlockGroupContainer>
          {
            journeyBlocks.map((block: JourneyBlockType, index: number) => {
              return (
                <JourneyBlock
                  key={block.id}
                  blockId={block.id}
                  isArticle={block.type == 'article' ? true : false}
                  blockIndex={index}
                  language={currentLanguage}
                  title={block.title}
                  seriesTitle={block.seriesTitle}
                  seriesLogo={block.seriesLogo}
                  seriesLogoOptions={SERIES_LOGO_IMAGE_SELECT_OPTIONS}
                  disableOpen={block.id.startsWith('directory') || block.id.startsWith('article')}

                  onTitleChange={(val) => handleTitleChange(block.id, val)}
                  onSeriesTitleChange={(val) => handleSeriesTitleChange(block.id, val)}
                  onSeriesLogoChange={(val) => handleSeriesLogoChange(block.id, val.target.value as string)}
                  onDelete={() => deleteJourneyCard(block.id)}
                  onMoveUp={() => reorderJourneyCards(index, 'up')}
                  onMoveDown={() => reorderJourneyCards(index, 'down')}
                  onOpen={() => handleOpen(block.id, block.title || block.seriesTitle, block.type === 'article' ? true : false)}
                />
              )
            })
          }
        </StyledDynamicJourneyBlockGroupContainer>
      </StyledDynamicJourneyContainer>
    )
  }

  // Change preview blocks whenever journey blocks are changed
  useEffect(() => {
    const previewJourneyCards = journeyBlocks.map((block: JourneyBlockType) => ({
      title: block.title,
      seriesTitle: block.seriesTitle,
      logo: block.seriesLogo,
    }));

    setPreviewBlocks(previewJourneyCards);
  }, [journeyBlocks]);

  const _renderPreviewBlock = () => {
    return (
      <StyledPreviewBlockContainer>
        <StyledPreviewTitleContainer>
          <Text
            color="#155D74"
            fontFamily="Inter"
            fontWeight="500"
            fontSize={16}
            lineHeight={24}
          >
            {`Journey Preview`}
          </Text>
        </StyledPreviewTitleContainer>

        <StyledPagePreviewContainer>
          <JourneyPreview
            markImg={props.journeyBookImage}
            markTitle={selectedBook}
            journeyItems={previewBlocks}
            language={currentLanguage}
          />
        </StyledPagePreviewContainer>
      </StyledPreviewBlockContainer>
    )
  }

  const _renderJourneyContent = () => {
    return (
      <StyledJourneyContentContainer>
        {_renderDynamicJourneyBlocks()}

        {_renderPreviewBlock()}
      </StyledJourneyContentContainer>
    )
  }

  const _renderBody = () => {
    return (
      <StyledJourneyOverviewContainer>
        <Tools tools={TOOLS} />

        {_renderJourneySelector()}

        {_renderJourneyPreferenceSelector()}

        {_renderJourneyControlButtonGroup()}

        {_renderJourneyContent()}
      </StyledJourneyOverviewContainer>
    )
  }

  return (
    <>
      <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
        {_renderJourneyHeader()}

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
    currentLanguage: state.book.language,
    currentJourneyTitle: state.journeys.journeyTitle,
    parentJourneyId: state.journeys.parentId,
    parentJourneyTitle: state.journeys.parentJourneyTitle,
    journeyBookImage: state.journeys.journeyBookImage,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneyOverview);
