import axios from 'axios';

import {API_URL} from '../config'
import { TranslatorRequestType } from './types';

class TranslatorService {
  saveBook = (data: TranslatorRequestType) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      const url = API_URL + '/books/saveBookByFile';
      axios
        .post(url, {data})
        .then((result) => {
          resolve(result.data)
        })
        .catch((error) => {
          reject(error);
        })
    })
  }
}

const translatorService = new TranslatorService();

export default translatorService;
