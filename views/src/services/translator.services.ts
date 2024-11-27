import axios from 'axios';

import {API_URL} from '../config'
import { 
  TranslatorRequestType,
  UpdateAppTextPageRequestType,
  UpdateAppTextRequestType
} from './types';
import { AppTextPageType } from '@/pages/types';

class TranslatorService {
  saveBook = (data: TranslatorRequestType) => {
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

  getAllAppTexts = (): Promise<AppTextPageType[]> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/translator/appTexts';
      axios
        .get(url)
        .then((result) => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  updateAppTextPage = (data: UpdateAppTextPageRequestType): Promise<AppTextPageType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/translator/appTextPage';
      axios
        .put(url, data)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  updateAppTexts = (data: UpdateAppTextRequestType) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/translator/appTexts';
      axios
        .put(url, data)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const translatorService = new TranslatorService();

export default translatorService;
