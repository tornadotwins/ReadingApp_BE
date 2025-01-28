import { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

import {
  JOURNEY_QURAN,
  ACCESS_TOKEN,
  JOURNEY_SELECTORS
} from "@/config";
import { getLanguageCodeFromLanguage } from "@/utils";
import actionTypes from "@/actions/actionTypes";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import { Button, LoadingOverlay, Text } from "@/components/Base";
import { ToastContainer } from "material-react-toastify";
import BookSelector from "@/components/BookSelector";
import JourneyPreferenceSelector from "@/components/JourneyPreferenceSelector";
import JourneyBlock from "@/components/JourneyBlock/JourneyBlock";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function JourneyOverview(props: JourneyOverviewPropsType) {
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLanguage, setCurrnetLanguage] = useState('');
  const [selectedBook, setSelectedBook] = useState(props.currentJourneyTitle || JOURNEY_QURAN);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [enableSaveBtn, setEnableSaveBtn] = useState(false);

  const [journeyBlocks, setJourneyBlocks] = useState<JourneyBlockType[]>([]);

  const isPortrait = useOrientation();

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
        isJourneyPage
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

  const handleCompleteChange = () => {
    setIsCompleted(!isCompleted);
  }

  const handlePublishChange = () => {
    setIsPublished(!isPublished);
  }

  const handleSavePreference = () => {
    setIsLoading(true);

    console.log('Clicked "Save Changes" button');

    setIsLoading(false);
  }

  const _renderJourneyPreferenceSelector = () => {
    return (
      <StyledPreferenceSelectorContainer>
        <JourneyPreferenceSelector
          availableLanguages={languages}
          currentLanguage={currentLanguage}
          isCompleted={isCompleted}
          isPublished={isPublished}
          enableComplete
          enablePublish
          enableSaveBtn={enableSaveBtn}

          handleLanguageChange={handleLanguageChange}
          handleCompleteChange={handleCompleteChange}
          handlePublishChange={handlePublishChange}
          handleSavePreference={handleSavePreference}
        />
      </StyledPreferenceSelectorContainer>
    )
  }

  const handleJourneyCard = (isArticle: boolean) => {
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

  const _renderJourneyControlButtonGroup = () => {
    return (
      <StyledDirectoryControlButtonGroupContainer>
        <StyledButtonContainer>
          <Button
            label="Add Article"
            onClick={() => handleJourneyCard(true)}
          />
        </StyledButtonContainer>

        <StyledButtonContainer>
          <Button
            label="Add Directory"
            onClick={() => handleJourneyCard(false)}
          />
        </StyledButtonContainer>
      </StyledDirectoryControlButtonGroupContainer>
    )
  }

  const _renderDynamicJourneyBlocks = () => {
    return (
      <StyledDynamicJourneyContainer>
        <StyledBackButtonContainer>
          <ArrowBackIcon />
          <Text
            color="#155D74"
            fontFamily="Inter"
            fontWeight="500"
            fontSize={16}
            lineHeight={24}
          >
            {`Back to overview`}
          </Text>
        </StyledBackButtonContainer>

        <StyledDynamicJourneyBlockGroupContainer>
          {
            journeyBlocks.map((block: JourneyBlockType, index: number) => {
              return (
                <JourneyBlock
                  key={block.id}
                  isArticle={block.type == 'article' ? true : false}
                  blockIndex={index}
                  language={currentLanguage}
                  title=""
                  seriesTitle=""
                  seriesLogo=""
                  seriesLogoOptions={[]}

                  onTitleChange={() => { }}
                  onSeriesTitle={() => { }}
                  onSeriesLogoChange={() => { }}
                  onDelete={() => { }}
                  onMoveUp={() => { }}
                  onMoveDown={() => { }}
                  onOpen={() => { }}
                />
              )
            })
          }
        </StyledDynamicJourneyBlockGroupContainer>
      </StyledDynamicJourneyContainer>
    )
  }

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
          aser
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
    currentJourneyTitle: state.journeys.journeyTitle
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JourneyOverview);
