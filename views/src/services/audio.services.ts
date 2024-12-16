import axios from "axios";

import {
  SaveMarkerRequestType,
} from './types'
import { API_URL } from "../config";

class AudioService {
  uploadAudio = (data: FormData) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/audio/uploadAudio';

      axios
        .post(url, data)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        })
    })
  }

  saveMarker = (data: SaveMarkerRequestType) => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/audio/saveMarker';

      axios
        .post(url, data)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

const audioService = new AudioService();

export default audioService;