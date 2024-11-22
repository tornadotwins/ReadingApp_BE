import axios from 'axios';

import {API_URL} from '../config'
import {
  BookType,
  ChapterInfoType
} from '@/pages/BookOverview/types';
import { UpdateChapterInfoType } from './types';

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
  updateChapterInfo = (data: UpdateChapterInfoType): Promise<ChapterInfoType> => {
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
}

const bookService = new BookService();

export default bookService;
