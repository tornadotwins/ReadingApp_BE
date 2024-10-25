import React, { useState } from 'react';
import {
  DEFAULT_TEXT_SIZE,
  THEME,
  AYA_NUMBER_FORMAT,
  DISPLAY_TYPE,
  READING_CONTROLS_TYPE,
  PAGES_CONTROLS_TYPE,
  REFERENCE_LANGUAGE,
  READING_LANGUAGE,
  DEFAULT_VOLUMN,
  SOUND_LANGUAGE,
} from '@/config';

interface SettingsContextProps {
  // Style
  textSize: number;
  setTextSize: (value: number) => void;
  theme: string;
  setTheme: (value: string) => void;

  // Ayas (verses)
  startAyasOnNewLine: boolean;
  setStartAyasOnNewLine: (value: boolean) => void;
  showAyasNumbers: boolean;
  setShowAyasNumbers: (value: boolean) => void;
  ayasNumberDisplayFormat: string;
  setAyasNumberDisplayFormat: (value: string) => void;

  // Study
  showQuranReferences: boolean;
  setShowQuranReferences: (value: boolean) => void;

  // Languages
  displayType: string;
  setDisplayType: (value: string) => void;
  referenceLanguage: string;
  setReferenceLanguage: (value: string) => void;
  readingLanguage: string;
  setReadingLanguage: (value: string) => void;

  // Navigation
  readingControls: string;
  setReadingControls: (value: string) => void;
  pageControl: string;
  setPageControl: (value: string) => void;

  // Audio Settings.
  volume: number;
  setVolume: (value: number) => void;
  autoScrollText: boolean;
  setAutoScrollText: (value: boolean) => void;
  audioLanguage: string;
  setAudioLanguage: (value: string) => void;
  audioOtherLanguage: string;
  setAudioOtherLanguage: (value: string) => void;
}

export const SettingsContext = React.createContext<SettingsContextProps>(null!);

export function SettingsProvider({ children }: any) {
  const [textSize, setTextSize] = useState(DEFAULT_TEXT_SIZE);
  const [theme, setTheme] = useState(THEME.DEFAULT);

  const [startAyasOnNewLine, setStartAyasOnNewLine] = useState(true);
  const [showAyasNumbers, setShowAyasNumbers] = useState(false);
  const [ayasNumberDisplayFormat, setAyasNumberDisplayFormat] = useState(AYA_NUMBER_FORMAT.BEFORE);

  const [showQuranReferences, setShowQuranReferences] = useState(false);

  const [displayType, setDisplayType] = useState(DISPLAY_TYPE.SPLIT_PANEL);
  const [referenceLanguage, setReferenceLanguage] = useState(REFERENCE_LANGUAGE.ARABIC);
  const [readingLanguage, setReadingLanguage] = useState(READING_LANGUAGE.ENGLISH);

  const [readingControls, setReadingControls] = useState(READING_CONTROLS_TYPE.LEFT_HANDED);
  const [pageControl, setPageControl] = useState(PAGES_CONTROLS_TYPE.LEFT_TO_RIGHT);

  const [volume, setVolume] = useState(DEFAULT_VOLUMN);
  const [autoScrollText, setAutoScrollText] = useState(true);
  const [audioLanguage, setAudioLanguage] = useState(SOUND_LANGUAGE.TRANSLATION);
  const [audioOtherLanguage, setAudioOtherLanguage] = useState(READING_LANGUAGE.ENGLISH);

  return (
    <SettingsContext.Provider
      value={{
        textSize,
        setTextSize,
        theme,
        setTheme,
        startAyasOnNewLine,
        setStartAyasOnNewLine,
        showAyasNumbers,
        setShowAyasNumbers,
        ayasNumberDisplayFormat,
        setAyasNumberDisplayFormat,
        showQuranReferences,
        setShowQuranReferences,
        displayType,
        setDisplayType,
        referenceLanguage,
        setReferenceLanguage,
        readingLanguage,
        setReadingLanguage,
        readingControls,
        setReadingControls,
        pageControl,
        setPageControl,
        volume,
        setVolume,
        autoScrollText,
        setAutoScrollText,
        audioLanguage,
        setAudioLanguage,
        audioOtherLanguage,
        setAudioOtherLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
