import axios from "axios";

import { API_URL } from "../config";

class AudioService {
  uploadAudio = (data: string) => {
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
}

const audioService = new AudioService();

export default audioService;