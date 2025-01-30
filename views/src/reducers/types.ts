import { BookType, ChapterInfoType, SubBookInfoType } from "@/pages/BookOverview/types";
import { ChapterType } from "@/pages/Translator/types";
import { JourneyCardType } from "@/pages/JourneyOverview/types";
import { AppTextPageType, UserType } from "@/pages/types";

type StateType = {
  currentUser: UserType | null;
  bookInfos: BookType[] | [];
  chapterInfos: ChapterInfoType[] | [];
  language: string | '';
  appTextPages: AppTextPageType[] | [];
  currentAudioHandler: string | '';
}

type BookStateType = {
  bookInfos: BookType[] | [];
  subBookInfos: SubBookInfoType[] | [];
  chapterInfos: ChapterInfoType[] | [];  
}

type UserActionType = {
  type: string,
  payload: {
    user: UserType,
  }
}

type BookActionType = {
  type: string,
  payload: {
    bookTitle: string,
  }
}

type BooksActionType = {
  type: string,
  payload: {
    bookInfos: BookType[]
  }
}

type BookInfoActionType = {
  type: string,
  payload: {
    bookInfo: BookType
  }
}

type SubBooksActionType = {
  type: string,
  payload: {
    subBookInfos: SubBookInfoType[]
  }
}

type SubBookInfoActionType = {
  type: string,
  payload: {
    subBookInfo: SubBookInfoType
  }
}

type SubBookIdActionType = {
  type: string,
  payload: {
    subBookId: string
  }
}

type ChapterActionType = {
  type: string,
  payload: {
    chapterInfo: ChapterInfoType
  }
}

type ChapterUpdateActionType = {
  type: string,
  payload: {
    newChapter: object
  }
}

type LanguageActionType = {
  type: string,
  payload: {
    language: string
  }
}

type AppTextPagesActionType = {
  type: string,
  payload: {
    appTextPages: AppTextPageType[]
  }
}

type AppTextPageActionType = {
  type: string,
  payload: {
    appTextPage: AppTextPageType
  }
}

type CurrentAudioHandlerActionType = {
  type: string,
  payload: {
    currentAudioHandler: string
  }
}

type AppStateType = {
  user: {
    currentUser: UserType | null;
  },
  book: {
    bookInfos: BookType[] | [];
    chapterInfos: ChapterType[] | [];
    book: string;
    language: string,
  },
  translator: {
    currentAudioHandler: string;
    appTextPages: AppTextPageType[];
  }
  journeys: {
    journeyTitle: string;
    parentId: string;
    parentJourneyTitle: string;
    journeyBookImage: string;
  }
};

type JourneyBookStateType = {
  journeyCardInfos: JourneyCardType[] | [];
}

type JourneyBookActionType = {
  type: string;
  payload: {
    journeyTitle: string;
  }
}

type JourneyBookMarkActionType = {
  type: string;
  payload: {
    image: string
  }
}

type JourneyParentActionType = {
  type: string;
  payload: {
    parentId: string;
  }
}

type JourneyBookImageActionType = {
  type: string;
  payload: {
    image: string;
  }
}

type JourneyParentTitleActionType = {
  type: string;
  payload: {
    title: string;
  }
}

type JourneyDepthActionType = {
  type: string;
  payload: {
    depth: number;
  }
}

export type {
  StateType,
  BookStateType,
  UserActionType,
  BookActionType,
  BooksActionType,
  BookInfoActionType,
  SubBooksActionType,
  SubBookInfoActionType,
  SubBookIdActionType,
  ChapterActionType,
  ChapterUpdateActionType,
  LanguageActionType,
  AppTextPagesActionType,
  AppTextPageActionType,
  CurrentAudioHandlerActionType,
  AppStateType,
  JourneyBookStateType,
  JourneyBookActionType,
  JourneyBookMarkActionType,
  JourneyParentActionType,
  JourneyBookImageActionType,
  JourneyParentTitleActionType,
  JourneyDepthActionType,
}