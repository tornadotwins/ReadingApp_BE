module.exports = {
  BASE_URL: 'http://localhost:5000',
  // BASE_URL: 'https://readingapp-d5944320053c.herokuapp.com',
  VERIFY_EMAIL_TIME: '3h',
  ACCESS_TOKEN_TIME: '5h',

  // Settings.
  DEFAULT_TEXT_SIZE: 14,
  THEME: {
    DEFAULT: 'Default',
    DARK: 'Dark',
    BLACK_AND_WHITE: 'BlackAndWhite',
    SAPPHIRE: 'Sapphire',
    EASY_OCEAN: 'EasyOcean',
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

  LANGUAGE_CODE_TABLES: [
    {
      language: 'English',
      code: 'en',
    },
    {
      language: 'Arabic',
      code: 'ar',
    },
  ],
};
