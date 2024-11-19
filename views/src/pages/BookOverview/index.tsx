import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppStateType } from '@/reducers/types';

import { SelectBox, Text } from "@/components/Base";
import Header from "@/components/Header";
import Tools from "@/components/Tools";
import BookSelector from "@/components/BookSelector";

import {
  StyledContainer,
  StyledBookOverviewContainer,
  StyledLanguageContainer,
  StyledBookSelectorContainer
} from "./styles";
import { BookOverviewPropsType } from "./types";
import { LanguageType } from "../types";
import { ACCESS_TOKEN } from "@/config";
import actionTypes from "@/actions/actionTypes";
import useOrientation from "@/hooks/useOrientation";
import ChapterTextOverview from "@/components/ChapterTextOverview";
import { getLanguageCodeFromLanguage, getLanguageFromLanguageCode } from "@/utils";
import {
  TRANSLATION_STATUS_COMPLETE,
  TRANSLATION_STATUS_NONE,
  TRANSLATION_STATUS_PUBLISH
} from "@/config";

const BookOverview = (props: BookOverviewPropsType) => {
  const [selectedBook, setSelectedBook] = useState('Qur\'an');
  const [currentLanguage, setCurrentLanguage] = useState('id');
  const [languages, setLanguages] = useState<LanguageType[]>([]);

  const navigate = useNavigate();

  const toolsProps = [
    {
      toolName: 'Western',
      onClick: () => { },
    },
    {
      toolName: 'Arabic',
      onClick: () => { },
    }
  ];

  const bookSelectors = [
    {
      bookTitle: "App Text",
      onClick: () => setSelectedBook("App Text"),
    },
    {
      bookTitle: "Qur'an",
      onClick: () => setSelectedBook("Qur'an"),
    },
    {
      bookTitle: "Injil",
      onClick: () => setSelectedBook("Injil"),
    },
    {
      bookTitle: "Zabur",
      onClick: () => setSelectedBook("Zabur"),
    },
    {
      bookTitle: "Tawrat",
      onClick: () => setSelectedBook("Tawrat"),
    },
  ];

  // const languages = [
  //   { value: 'en', label: 'English' },
  //   { value: 'ar', label: 'Arabic' },
  //   { value: 'id', label: 'Indonesian' },
  // ];

  const chapters = [
    {
      chapterNumber: 0,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 1,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 2,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 3,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 4,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 5,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 6,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 7,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 8,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 9,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 10,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 11,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 12,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 13,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 14,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 15,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 16,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 17,
      status: TRANSLATION_STATUS_PUBLISH,
    },
    {
      chapterNumber: 18,
      status: TRANSLATION_STATUS_COMPLETE,
    },
    {
      chapterNumber: 19,
      status: TRANSLATION_STATUS_NONE,
    },
    {
      chapterNumber: 20,
      status: TRANSLATION_STATUS_NONE,
    },
  ];

  useEffect(() => {
    if (!props.currentUser?.roles) return;

    // Convert roles to language objects and remove duplicates
    const uniqueLanguages = props.currentUser.roles.reduce<LanguageType[]>((acc, role) => {
      const permission = role.role;

      if (permission != 'none') {
        const language = role.language;
        const languageCode = getLanguageCodeFromLanguage(language);

        // Check if this language is already in the accumulator
        const exists = acc.some(item => item.value === languageCode);

        if (!exists) {
          acc.push({ value: languageCode, label: language });
        }
      }

      return acc;
    }, []);

    setLanguages(uniqueLanguages);

    // Set default language if current language isn't in the list
    if (uniqueLanguages.length > 0 && !uniqueLanguages.some(lang => lang.value === currentLanguage)) {
      setCurrentLanguage(uniqueLanguages[0].value);
    }
  }, [props.currentUser, currentLanguage]);



  const isPortrait = useOrientation();

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);
  };

  // Navigate to Login page
  const onLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);

    props.dispatch({
      type: actionTypes.SET_CURRENT_USER,
      payload: {
        user: null,
      },
    });

    navigate('/admin');
  };

  return (
    <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
      <Header isLoggedIn={true} username={props.currentUser.username} isAdmin={props.currentUser.isAdmin} onLogOut={onLogout} />

      <StyledBookOverviewContainer>
        <Tools tools={toolsProps} />

        <StyledBookSelectorContainer>
          <BookSelector
            books={bookSelectors}
            selectedBook={selectedBook}
          />
        </StyledBookSelectorContainer>

        <StyledLanguageContainer>
          <Text color="#155D74" fontWeight="700" fontFamily="'Baloo Da 2'">
            {selectedBook + ' overview'}
          </Text>

          <SelectBox
            label=""
            options={languages}
            value={currentLanguage}
            backgroundColor="#fff"
            textColor="#155D74"
            onChange={handleLanguageChange}
          />
        </StyledLanguageContainer>

        <ChapterTextOverview bookTitle={selectedBook} language={getLanguageFromLanguageCode(currentLanguage)} chapters={chapters} />
      </StyledBookOverviewContainer>
    </StyledContainer>
  )
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

function mapStateToProps(state: AppStateType) {
  return {
    currentUser: state.user.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookOverview);