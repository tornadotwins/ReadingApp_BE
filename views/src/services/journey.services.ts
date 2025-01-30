import axios from 'axios';

import { API_URL } from '@/config';
import { JourneyCardType } from '@/pages/JourneyOverview/types';
import { SaveArticleRequestType } from './types';

class JourenyService {
  // Save Journey Stage (Journey Cards)
  saveJourneyStage = (data: JourneyCardType[]): Promise<JourneyCardType[]> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/journey/save-stage';
      axios
        .post(url, { journeyCards: data })
        .then((response) => {
          if(response.data) {
            resolve(response.data);
          } else {
            reject(response.data.error)
          }
        })
        .catch((error) => {
          reject(error);
        })
    })
  }

  // Save Article
  saveArticle = (data: SaveArticleRequestType) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/journey/save-article';
      axios
        .post(url, data)
        .then((response) => {
          if(response.data)
            resolve(response.data);
          else 
            reject(response.data.error);
        })
        .catch(error =>
          reject(error)
        )
    })
  }
}

const journeyService = new JourenyService();

export default journeyService;
