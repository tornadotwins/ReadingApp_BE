// Packages
import { useState, useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import useOrientation from "@/hooks/useOrientation";
import { toast, Bounce, ToastContainer } from "material-react-toastify";

// Components
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";
import {
  Text,
  SelectBox,
  LoadingOverlay
} from "@/components/Base";
import PageTerms from "@/components/PageTerms";

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
import { AppTextPageChangedType, AppTextPageStatusType, AppTextPageType, LanguageType } from "../types";

// Utils
import {
  getLanguageCodeFromLanguage,
  getLanguageFromLanguageCode
} from "@/utils";

// Constatns
import {
  ACCESS_TOKEN,
  BOOK_SELECTORS,
  BOOK_APP_TEXT,
} from "@/config";
import actionTypes from "@/actions/actionTypes";
import translatorService from "@/services/translator.services";

const TOOLS = [
  { toolName: 'Western', onClick: () => { } },
  { toolName: 'Arabic', onClick: () => { } }
];

function AppTextOverview(props: AppTextOverviewPropsType) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(BOOK_APP_TEXT);
  const [languages, setLanguages] = useState<LanguageType[]>([]);
  const [currentLanguage, setCurrentLanguage] = useState(props.currentLanguage);
  const [defaultLanguage, setDefaultLanguage] = useState('en');
  const [updatedTerms, setUpdatedTerms] = useState<AppTextPageType[]>(props.appTextPages);
  const [textChangedPageStatus, setTextChangedPageStatus] = useState<AppTextPageChangedType[]>([]);
  // const [appTextPageStatus, setAppTextPageStatus] = useState<AppTextPageStatusType[]>([]);

  const navigate = useNavigate();
  const isPortrait = useOrientation();

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

  // Fetch all terms and save it to redux store
  useEffect(() => {
    // Fetch all terms
    const fetchAppTexts = async () => {
      return await translatorService.getAllAppTexts();
    };

    if (props.appTextPages && props.appTextPages.length == 0) {
      setIsLoading(true);
      fetchAppTexts()
        .then(result => {
          props.dispatch({
            type: actionTypes.SET_APP_TEXT_PAGES,
            payload: {
              appTextPages: result
            }
          });

          result.map(page =>
            setTextChangedPageStatus(prevTextChangedPageStatus =>
              [
                ...prevTextChangedPageStatus,
                {
                  pageId: page.pageId,
                  isChanged: false
                }
              ]
            ))

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
    }
  }, []);

  useEffect(() => {
    setUpdatedTerms(props.appTextPages)
  }, [props.appTextPages]);

  // Handle changes in Input values
  const handleTermChange = (id: string, changedVal: string) => {
    setUpdatedTerms(prevTerms =>
      prevTerms.map(term => ({
        ...term, // Spread to keep other properties of `AppTextPageType`
        texts: term.texts.map(text =>
          text._id === id
            ? {
              ...text, // Spread to keep other properties of `AppTextType`
              text: {
                ...text.text, // Spread to keep other language texts
                [currentLanguage]: changedVal, // Update only the current language
              },
            }
            : text // If not the matching `text`, return it as-is
        ),
      }))
    );

    const changedPageId = updatedTerms.find(updatedTerm => updatedTerm.texts.find(text => text._id == id))?.pageId;

    setTextChangedPageStatus(prevTextChangePageStatuses =>
      prevTextChangePageStatuses.map(textChangedPageStatus =>
        textChangedPageStatus.pageId == changedPageId ?
          {
            ...textChangedPageStatus,
            isChanged: true
          } :
          textChangedPageStatus
      )
    );
  };

  // Handle changes in complete/publish switches
  const handlePageStatus = (newStatus: AppTextPageStatusType) => {
    setUpdatedTerms(prevTerms =>
      prevTerms.map(term =>
        term.pageId === newStatus.pageId
          ? {
            ...term,
            isCompleted: newStatus.isCompleted,
            isPublished: newStatus.isPublished,
          }
          : term
      )
    );

    // Change the status
    const data = {
      pageId: newStatus.pageId,
      updates: {
        isCompleted: newStatus.isCompleted,
        isPublished: newStatus.isPublished
      }
    }

    setIsLoading(true);

    translatorService
      .updateAppTextPage(data)
      .then(result => {
        toast.success("Successfully updated!", {
          position: 'top-right',
          draggable: true,
          theme: 'colored',
          transition: Bounce,
          closeOnClick: true,
          pauseOnHover: true,
          hideProgressBar: false,
          autoClose: 3000
        });

        const updatedAppTextPages = props.appTextPages.map(appTextPage =>
          appTextPage.pageId == newStatus.pageId ?
            {
              ...appTextPage,
              isCompleted: newStatus.isCompleted,
              isPublished: newStatus.isPublished,
            } :
            appTextPage
        );

        props.dispatch({
          type: actionTypes.SET_APP_TEXT_PAGES,
          payload: {
            appTextPages: updatedAppTextPages
          }
        })

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
      })
  };

  const handleSave = (id: string) => {
    // Get the changed texts
    const changedAppTextPage = updatedTerms.find(updatedTerm => updatedTerm.pageId == id);
    const data = {
      texts: changedAppTextPage?.texts || []
    };

    setIsLoading(true);

    translatorService
      .updateAppTexts(data)
      .then(result => {
        props.dispatch({
          type: actionTypes.SET_APP_TEXT_PAGES,
          payload: {
            appTextPages: updatedTerms
          }
        });

        setTextChangedPageStatus(prevTextChangePageStatuses =>
          prevTextChangePageStatuses.map(textChangedPageStatus =>
            textChangedPageStatus.pageId == id ?
              {
                ...textChangedPageStatus,
                isChanged: false
              } :
              textChangedPageStatus
          )
        )

        toast.success("Successfully updated!", {
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
  }

  const _renderTermEdit = () => {
    return (
      updatedTerms.map((appTextPage: AppTextPageType, index: number) => (
        <PageTerms
          key={index}
          pageName={appTextPage.pageTitle}
          defaultLanguage={defaultLanguage}
          languages={languages}
          currentLanguage={props.currentLanguage}
          currentLanguageLabel={getLanguageFromLanguageCode(currentLanguage)}
          currentUser={props.currentUser}
          pageId={appTextPage.pageId}
          terms={appTextPage.texts}
          isComplete={appTextPage.isCompleted}
          isPublish={appTextPage.isPublished}
          hasChangedText={textChangedPageStatus.find(changedStatus => changedStatus.pageId == appTextPage.pageId)?.isChanged || false}

          onChangeDefaultLanguage={(languageCode: string) => setDefaultLanguage(languageCode)}
          onChangeInput={(id: string, changedVal: string) => handleTermChange(id, changedVal)}
          onChangeAppTextPageStatus={(status: AppTextPageStatusType) => handlePageStatus(status)}
          onSave={(id: string) => handleSave(id)}
        />
      ))
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
    <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
      {_renderHeader()}

      {_renderBody()}

      {isLoading && <LoadingOverlay />}

      <ToastContainer />
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
    appTextPages: state.translator.appTextPages,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTextOverview);
