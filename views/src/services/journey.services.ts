import axios from 'axios';

import { API_URL } from '@/config';
import { JourneyCardType } from '@/pages/JourneyOverview/types';
import {
  SaveJourneyRequestType,
  GetJourneyStageResponseType,
  SaveArticleRequestType,
  GetArticleResponseType,
} from './types';

class JourenyService {
  // Save Journey Stage (Journey Cards)
  saveJourneyStage = (data: SaveJourneyRequestType): Promise<JourneyCardType[]> => {
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

  // Get Journey Stage (Journey Cards)
  getJourneyStage = (parentId: string): Promise<GetJourneyStageResponseType> => {
    return new Promise ((resolve, reject) => {
      const url = API_URL + `/journey/${parentId}/journeys`;
      axios
        .get(url)
        .then((response) => {
          if(response.data)
            resolve(response.data);
          else
            reject(response.data.error);
        })
        .catch(error =>
          reject(error.response.data.message)
        )
    })
  }

  // Get Article
  getArticle = (articleId: string): Promise<GetArticleResponseType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + `/journey/${articleId}/article`;
      axios
        .get(url)
        .then(response => {
          if(response.data)
            resolve(response.data);
          else
            reject(response.data.error);
        })
        .catch(error =>
          reject(error.response.data.message)
        )
    })
  }
}

const journeyService = new JourenyService();

export default journeyService;
