import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

// const API_URL = 'http://localhost:5000';
const API_URL = 'https://readingapp-d5944320053c.herokuapp.com';
const APP_VERSION = "2.0.0";

const ACCESS_TOKEN = 'accessToken';
const CURRENT_USER = 'currentUser';

const title = 'React PWA';

const email = 'auther-email@gmail.com';

const repository = 'https://github.com/suren-atoyan/react-pwa';

const messages = {
  app: {
    crash: {
      title: 'Oooops... Sorry, I guess, something went wrong. You can:',
      options: {
        email: `contact with author by this email - ${email}`,
        reset: 'Press here to reset the application',
      },
    },
  },
  loader: {
    fail: 'Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea',
  },
  images: {
    failed: 'something went wrong during image loading :(',
  },
  404: 'Hey bro? What are you looking for?',
};

const dateFormat = 'MMMM DD, YYYY';

const notifications: Notifications = {
  options: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    autoHideDuration: 6000,
  },
  maxSnack: isMobile ? 3 : 4,
};

const loader = {
  // no more blinking in your app
  delay: 300, // if your asynchronous process is finished during 300 milliseconds you will not see the loader at all
  minimumLoading: 700, // but if it appears, it will stay for at least 700 milliseconds
};

const defaultMetaTags = {
  image: '/cover.png',
  description: 'Starter kit for modern web applications',
};
const giphy404 = 'https://giphy.com/embed/xTiN0L7EW5trfOvEk0';

const BOOK_INFO = "bookInfo";

const BOOK_APP_TEXT = 'App Text';
const BOOK_QURAN = 'Qur\'an';
const BOOK_INJIL = 'Injil';
const BOOK_ZABUR = 'Zabur';
const BOOK_TAWRAT = 'Tawrat';

const JOURNEY_QURAN = 'Qur\'an Journeys';
const JOURNEY_INJIL = 'Injil Journeys';
const JOURNEY_ZABUR = 'Zabur Journeys';
const JOURNEY_TAWRAT = 'Tawrat Journeys';

const USER_ROLE_NONE = 'none';
const USER_ROLE_TRANSLATOR = 'Translator';
const USER_ROLE_PUBLISHER = 'Publisher';

const TRANSLATION_STATUS_COMPLETE = 'Completed';
const TRANSLATION_STATUS_PUBLISH = 'Published';
const TRANSLATION_STATUS_NONE = 'None';
const CHAPTER_HAS_CONTENT = 'HasContent';

const DEFAULT_TEXT_SIZE = 14;
const THEME = {
  DEFAULT: 'Default',
  DARK: 'Dark',
  BLACK_AND_WHITE: 'BlackAndWhite',
  SAPPHIRE: 'Sapphire',
  EASY_SUNRISE: 'EasySunrise',
  EASY_OCEAN: 'EasyOcean',
};
const AYA_NUMBER_FORMAT = {
  BEFORE: 'before',
  AFTER: 'after',
};

const READING_CONTROLS_TYPE = {
  LEFT_HANDED: 'left_handed',
  RIGHT_HANDED: 'right_handed',
};

const PAGES_CONTROLS_TYPE = {
  RIGTH_TO_LEFT: 'right_to_left',
  LEFT_TO_RIGHT: 'left_to_right',
};

const REFERENCE_LANGUAGE = {
  ARABIC: 'ar',
  ENGLISH: 'en',
};

const READING_LANGUAGE = {
  ARABIC: 'ar',
  ENGLISH: 'en',
};

const DISPLAY_TYPE = {
  ONLY_TRNSLATION: 'only_translation',
  SPLIT_PANEL: 'split_panel',
  VERSE_BY_VERSE: 'verse_by_verse',
};

const DEFAULT_VOLUMN = 20;

const SOUND_LANGUAGE = {
  ORIGINAL: 'ar',
  TRANSLATION: 'en',
  OTHER: 'other',
};

const COLOR = {
  ORANGE: '#FFAA5D',
  PURPLE: '#8F71C6',
  LIGHT_BLUE: '#419DDF',
};

const LANGUAGE_CODE_TABLE = [
  { language: "Abkhazian", code: "ab" },
  { language: "Afar", code: "aa" },
  { language: "Afrikaans", code: "af" },
  { language: "Akan", code: "ak" },
  { language: "Albanian", code: "sq" },
  { language: "Amharic", code: "am" },
  { language: "Arabic", code: "ar" },
  { language: "Aragonese", code: "an" },
  { language: "Armenian", code: "hy" },
  { language: "Assamese", code: "as" },
  { language: "Avaric", code: "av" },
  { language: "Aymara", code: "ay" },
  { language: "Azerbaijani", code: "az" },
  { language: "Bashkir", code: "ba" },
  { language: "Basque", code: "eu" },
  { language: "Belarusian", code: "be" },
  { language: "Bengali", code: "bn" },
  { language: "Bihari languages", code: "bh" },
  { language: "Bislama", code: "bi" },
  { language: "Bosnian", code: "bs" },
  { language: "Breton", code: "br" },
  { language: "Bulgarian", code: "bg" },
  { language: "Burmese", code: "my" },
  { language: "Catalan", code: "ca" },
  { language: "Chamorro", code: "ch" },
  { language: "Chechen", code: "ce" },
  { language: "Chichewa", code: "ny" },
  { language: "Chinese", code: "zh" },
  { language: "Chuvash", code: "cv" },
  { language: "Cornish", code: "kw" },
  { language: "Corsican", code: "co" },
  { language: "Cree", code: "cr" },
  { language: "Croatian", code: "hr" },
  { language: "Czech", code: "cs" },
  { language: "Danish", code: "da" },
  { language: "Divehi", code: "dv" },
  { language: "Dutch", code: "nl" },
  { language: "Dzongkha", code: "dz" },
  { language: "English", code: "en" },
  { language: "Esperanto", code: "eo" },
  { language: "Estonian", code: "et" },
  { language: "Ewe", code: "ee" },
  { language: "Fijian", code: "fj" },
  { language: "Finnish", code: "fi" },
  { language: "French", code: "fr" },
  { language: "Fulah", code: "ff" },
  { language: "Georgian", code: "ka" },
  { language: "German", code: "de" },
  { language: "Greek", code: "el" },
  { language: "Guarani", code: "gn" },
  { language: "Gujarati", code: "gu" },
  { language: "Haitian Creole", code: "ht" },
  { language: "Hausa", code: "ha" },
  { language: "Hebrew", code: "he" },
  { language: "Hindi", code: "hi" },
  { language: "Hmong", code: "hm" },
  { language: "Hungarian", code: "hu" },
  { language: "Icelandic", code: "is" },
  { language: "Igbo", code: "ig" },
  { language: "Indonesian", code: "id" },
  { language: "Inuktitut", code: "iu" },
  { language: "Irish", code: "ga" },
  { language: "Italian", code: "it" },
  { language: "Japanese", code: "ja" },
  { language: "Javanese", code: "jv" },
  { language: "Kalaallisut", code: "kl" },
  { language: "Kannada", code: "kn" },
  { language: "Kanuri", code: "kr" },
  { language: "Kashmiri", code: "ks" },
  { language: "Kazakh", code: "kk" },
  { language: "Khmer", code: "km" },
  { language: "Kinyarwanda", code: "rw" },
  { language: "Kirghiz", code: "ky" },
  { language: "Korean", code: "ko" },
  { language: "Kurdish", code: "ku" },
  { language: "Kyrgyz", code: "ky" },
  { language: "Lao", code: "lo" },
  { language: "Latin", code: "la" },
  { language: "Latvian", code: "lv" },
  { language: "Lingala", code: "ln" },
  { language: "Lithuanian", code: "lt" },
  { language: "Luxembourgish", code: "lb" },
  { language: "Macedonian", code: "mk" },
  { language: "Malagasy", code: "mg" },
  { language: "Malay", code: "ms" },
  { language: "Malayalam", code: "ml" },
  { language: "Maltese", code: "mt" },
  { language: "Maori", code: "mi" },
  { language: "Marathi", code: "mr" },
  { language: "Mongolian", code: "mn" },
  { language: "Nepali", code: "ne" },
  { language: "Norwegian", code: "no" },
  { language: "Nyanja", code: "ny" },
  { language: "Occitan", code: "oc" },
  { language: "Oromo", code: "om" },
  { language: "Ossetian", code: "os" },
  { language: "Panjabi", code: "pa" },
  { language: "Pashto", code: "ps" },
  { language: "Persian", code: "fa" },
  { language: "Polish", code: "pl" },
  { language: "Portuguese", code: "pt" },
  { language: "Quechua", code: "qu" },
  { language: "Romanian", code: "ro" },
  { language: "Russian", code: "ru" },
  { language: "Samoan", code: "sm" },
  { language: "Scots Gaelic", code: "gd" },
  { language: "Serbian", code: "sr" },
  { language: "Shona", code: "sn" },
  { language: "Sindhi", code: "sd" },
  { language: "Sinhalese", code: "si" },
  { language: "Slovak", code: "sk" },
  { language: "Slovenian", code: "sl" },
  { language: "Somali", code: "so" },
  { language: "Spanish", code: "es" },
  { language: "Sundanese", code: "su" },
  { language: "Swahili", code: "sw" },
  { language: "Swedish", code: "sv" },
  { language: "Tagalog", code: "tlg" },
  { language: "Tajik", code: "tg" },
  { language: "Tamil", code: "ta" },
  { language: "Tatar", code: "tt" },
  { language: "Telugu", code: "te" },
  { language: "Thai", code: "th" },
  { language: "Tigrinya", code: "ti" },
  { language: "Tonga", code: "to" },
  { language: "Turkish", code: "tr" },
  { language: "Turkmen", code: "tk" },
  { language: "Twi", code: "tw" },
  { language: "Ukrainian", code: "uk" },
  { language: "Urdu", code: "ur" },
  { language: "Uyghur", code: "ug" },
  { language: "Uzbek", code: "uz" },
  { language: "Vietnamese", code: "vi" },
  { language: "Welsh", code: "cy" },
  { language: "Xhosa", code: "xh" },
  { language: "Yiddish", code: "yi" },
  { language: "Yoruba", code: "yo" },
  { language: "Zulu", code: "zu" }
];

const BOOK_SELECTORS = [
  { bookTitle: "App Text", value: "App Text" },
  { bookTitle: BOOK_QURAN, value: BOOK_QURAN },
  { bookTitle: BOOK_INJIL, value: BOOK_INJIL },
  { bookTitle: BOOK_ZABUR, value: BOOK_ZABUR },
  { bookTitle: BOOK_TAWRAT, value: BOOK_TAWRAT },
];

const JOURNEY_SELECTORS = [
  { bookTitle: JOURNEY_QURAN, value: JOURNEY_QURAN },
  { bookTitle: JOURNEY_INJIL, value: JOURNEY_INJIL },
  { bookTitle: JOURNEY_ZABUR, value: JOURNEY_ZABUR },
  { bookTitle: JOURNEY_TAWRAT, value: JOURNEY_TAWRAT }
];

const SERIES_LOGO_IMAGE_SELECT_OPTIONS = [
  { label: 'Questionmark', value: '/images/icon_journey_help.svg' },
  { label: 'Path', value: '/images/icon_journey_path.svg' },
]

export {
  API_URL,
  APP_VERSION,
  CURRENT_USER,
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,

  ACCESS_TOKEN,
  BOOK_INFO,

  BOOK_APP_TEXT,
  BOOK_QURAN,
  BOOK_INJIL,
  BOOK_ZABUR,
  BOOK_TAWRAT,

  JOURNEY_QURAN,
  JOURNEY_INJIL,
  JOURNEY_ZABUR,
  JOURNEY_TAWRAT,

  USER_ROLE_NONE,
  USER_ROLE_TRANSLATOR,
  USER_ROLE_PUBLISHER,

  TRANSLATION_STATUS_COMPLETE,
  TRANSLATION_STATUS_NONE,
  CHAPTER_HAS_CONTENT,
  TRANSLATION_STATUS_PUBLISH,

  DEFAULT_TEXT_SIZE,
  THEME,
  AYA_NUMBER_FORMAT,
  DISPLAY_TYPE,
  REFERENCE_LANGUAGE,
  READING_LANGUAGE,
  READING_CONTROLS_TYPE,
  PAGES_CONTROLS_TYPE,
  DEFAULT_VOLUMN,
  SOUND_LANGUAGE,
  COLOR,
  LANGUAGE_CODE_TABLE,
  BOOK_SELECTORS,
  JOURNEY_SELECTORS,
  SERIES_LOGO_IMAGE_SELECT_OPTIONS,
};
