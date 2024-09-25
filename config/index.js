const Config = {
  BASE_URL: 'http://localhost:3000',
  VERIFY_EMAIL_TIME: '3h',
  ACCESS_TOKEN_TIME: '5h',

  // Settings.
  DEFAULT_TEXT_SIZE: 14,
  THEME: {
    DEFAULT: 'Default',
    DARK: 'Dark',
    BLACK_AND_WHITE: 'BlackAndWhite',
    SAPPHIRE: 'Sapphire',
    EASY_OCEAN: 'EasyOcean'
  },
  AYA_NUMBER_FORMAT: {
    BEFORE: 'before',
    AFTER: 'after',
  },
  DISPLAY_TYPE: {
    ONLY_TRNSLATION: 'only_translation',
    SPLIT_PANEL: 'split_panel',
    VERSE_BY_VERSE: 'verse_by_verse',
  },
  READING_CONTROLS_TYPE: {
    LEFT_HANDED: 'left_handed',
    RIGHT_HANDED: 'right_handed',
  },
  REFERENCE_LANGUAGE: {
    ARABIC: 'ar',
    ENGLISH: 'en',
  },
  READING_LANGUAGE: {
    ARABIC: 'ar',
    ENGLISH: 'en',
  },
  PAGES_CONTROLS_TYPE: {
    RIGTH_TO_LEFT: 'right_to_left',
    LEFT_TO_RIGHT: 'left_to_right',
  },
  SOUND_LANGUAGE: {
    ORIGINAL: 'ar',
    TRANSLATION: 'en',
    OTHER: 'other',
  },
};

export default Config;