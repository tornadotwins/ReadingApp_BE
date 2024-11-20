import axios from 'axios';

import {API_URL} from '../config'
import {
  BookType,
  ChapterInfoType
} from '@/pages/BookOverview/types';

class BookService {
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

  getVersesByChapterId = (chapterId: string): Promise<ChapterInfoType> => {
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
}

const bookService = new BookService();

export default bookService;
