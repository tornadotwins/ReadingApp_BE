// Packages
import { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';

// Components
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import {
  Text,
  SelectBox
} from "@/components/Base";

// Styles
import {
  StyledContainer,
  StyledBodyContainer,
  StyledBookSelectorContainer,
  StyledLanguageSelectorContainer,
} from "./styles";

// Types
import { AppStateType } from '@/reducers/types';
import { AppTextOverviewPropsType } from "./types";
import { LanguageType } from "../types";

// Utils
import { getLanguageCodeFromLanguage, getLanguageFromLanguageCode } from "@/utils";

// Constatns
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
  BOOK_APP_TEXT,
} from "@/config";
import actionTypes from "@/actions/actionTypes";
import PageTerms from "@/components/PageTerms";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function AppTextOverview(props: AppTextOverviewPropsType) {
  const [selectedBook, setSelectedBook] = useState(BOOK_APP_TEXT);
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState('');

  // page complete/publish
  const [isWelcomeComplete, setIsWelcomeComplete] = useState(false);
  const [isWelcomePublish, setIsWelcomePublish] = useState(false);

  const navigate = useNavigate();

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

  const _renderHeader = () => {
    return (
      <Header
        isLoggedIn={true}
        username={props.currentUser.username}
        isAdmin={props.currentUser.isAdmin}
        onLogOut={onLogout}
      />
    )
  };

  const handleSelectedBook = (bookTitle: string) => {
    setSelectedBook(bookTitle);

    props.dispatch({
      type: actionTypes.SET_BOOK,
      payload: {
        bookTitle
      }
    });

    navigate('/admin/bookoverview');
  }

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

  // Memoized language processing
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

    if (!props.currentLanguage)
      props.dispatch({
        type: actionTypes.SET_CURRENT_LANGUAGE,
        payload: {
          language: uniqueLanguages[0].value
        }
      })

    return uniqueLanguages;
  }, [props.currentUser]);

  // Languages effect
  useEffect(() => {
    const processedLanguages = processLanguages();
    setLanguages(processedLanguages);

    if (processedLanguages.length > 0 && !processedLanguages.some(lang => lang.value === currentLanguage)) {
      setCurrentLanguage(processedLanguages[0].value);
    }
  }, [props.currentUser, currentLanguage, processLanguages]);

  // Event Handlers
  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);

    props.dispatch({
      type: actionTypes.SET_CURRENT_LANGUAGE,
      payload: {
        language: value,
      }
    });
  };

  const _renderLanguageSelector = () => {
    return (
      <StyledLanguageSelectorContainer>
        <Text color="#155D74" fontWeight="700" fontFamily="'Baloo Da 2'">
          App text:
        </Text>

        <SelectBox
          label=""
          options={languages}
          value={currentLanguage}
          backgroundColor="#fff"
          textColor="#155D74"
          onChange={handleLanguageChange}
        />
      </StyledLanguageSelectorContainer>
    )
  };

  const handleWelcomeStatus = (isCompleted: boolean, isPublished: boolean) => {
    setIsWelcomeComplete(isCompleted);
    setIsWelcomePublish(isPublished);
  }

  const _renderTermEdit = () => {
    return (
      <PageTerms
        pageName="Welcome Page"
        languageCode={currentLanguage}
        languageLabel={getLanguageFromLanguageCode(currentLanguage)}
        languages={languages}
        currentLanguage={getLanguageFromLanguageCode(props.currentLanguage)}
        currentUser={props.currentUser}
        disable
        isComplete={isWelcomeComplete}
        isPublish={isWelcomePublish}

        terms={[
          {
            variable: 'Welcome',
            defaultTerm: 'Welcome default',
            currentTerm: 'Welcome Edit',
          },
          {
            variable: 'LogIn',
            defaultTerm: 'Log In',
            currentTerm: 'Log In Edit',
          }
        ]}

        onChangeStatus={(complete: boolean, publish: boolean) => handleWelcomeStatus(complete, publish)}
      />
    )
  };

  const _renderBody = () => {
    return (
      <StyledBodyContainer>
        <Tools tools={TOOLS} />

        {_renderBookSelector()}

        {_renderLanguageSelector()}

        {_renderTermEdit()}
      </StyledBodyContainer>
    )
  };

  return (
    <StyledContainer>
      {_renderHeader()}

      {_renderBody()}
    </StyledContainer>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return { dispatch };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
    bookInfos: state.book.bookInfos,
    currentLanguage: state.book.language,
    currentBook: state.book.book,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTextOverview);