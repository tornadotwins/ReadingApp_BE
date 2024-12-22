import axios from 'axios';

import {API_URL} from '../config'
import {
  BookType,
  ChapterInfoType
} from '@/pages/BookOverview/types';
import { IntroRequestType, UpdateChapterRequestType, UpdateSubBookRequestType } from './types';
import { ChapterModelType, SubBookModelType } from '@/pages/ChapterOverview/types';

class BookService {
  // Get Book information by en title
  getBookInfoByTitle = (bookTitle: string): Promise<BookType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + `/books/${bookTitle}/bookInfoByTitle`;
      axios
        .get(url)
        .then((response) => {
          if(response.data) {
            resolve(response.data);
          }
          else
            reject(response.data.error)
        })
        .catch((error) => {
          reject(error);
        })
    })
  };

  // Get Chapter information by chapter id
  getChapterInfoByChapterId = (chapterId: string): Promise<ChapterInfoType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + `/books/${chapterId}/verses`;
      axios
        .get(url)
        .then((response) => {
          if(response.data) {
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  // Update Chapter Infomation
  updateChapterInfo = (data: UpdateChapterRequestType): Promise<ChapterModelType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/books/chapter';

      axios 
        .put(url, data)
        .then((response) => {
          if(response.data) {
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  // Update SubBook Information
  updateSubBookInfo = (data: UpdateSubBookRequestType): Promise<SubBookModelType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/books/subbook';

      axios
        .put(url, data)
        .then((response) => {
          if(response.data) {
            resolve(response.data);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  // Update Intro Information
  updateIntroData = (data: IntroRequestType) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/books/updateIntro';

      console.log({url, data})

      axios
        .put(url, data)
        .then((response) => {
          if(response.data) {
            resolve(response.data)
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
}

const bookService = new BookService();

export default bookService;
