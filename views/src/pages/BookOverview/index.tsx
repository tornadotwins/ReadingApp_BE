import { useState } from "react";
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
import useOrientation from "@/hooks/useOrientation";
import ChapterTextOverview from "@/components/ChapterTextOverview";
import { getLanguageFromLanguageCode } from "@/utils";

const BookOverview = () => {
  const [selectedBook, setSelectedBook] = useState('Qur\'an');
  const [currentLanguage, setCurrentLanguage] = useState('id');

  const toolsProps = [
    {
      toolName: 'Western',
      onClick: () => { },
    },
    {
      toolName: 'Arabic',
      onClick: () => { },
    }
  ]

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


  const languages = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'Arabic' },
    { value: 'id', label: 'Indonesian' },
  ];

  const isPortrait = useOrientation();

  const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string;
    setCurrentLanguage(value);
  };

  return (
    <StyledContainer flexDirection={isPortrait ? 'column' : 'row'}>
      <Header header="Translation Portal" isLoggedIn={true} />

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

        <ChapterTextOverview bookTitle={selectedBook} language={getLanguageFromLanguageCode(currentLanguage, languages)} />
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