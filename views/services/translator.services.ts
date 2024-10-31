import axios from 'axios';

import {API_URL} from '../config'
import { ParseDataType } from '@/pages/Translator/types';

class TranslatorService {
  saveBook = (data: ParseDataType[]) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/books/saveBookByFile';
      axios
        .post(url, data)
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
