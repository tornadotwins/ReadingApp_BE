import isMobile from '@/utils/is-mobile';

import type { Notifications } from './types';

const API_URL = 'http://localhost:5000';

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

export {
  API_URL,
  loader,
  notifications,
  dateFormat,
  messages,
  repository,
  email,
  title,
  defaultMetaTags,
  giphy404,

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
};
