import axios, {AxiosError} from "axios";

import { API_URL, ACCESS_TOKEN, } from "../config";
import { UserRequestType } from "./types";
import { UserType } from "@/pages/types";

class AuthService {
  login = (data: UserRequestType): Promise<UserType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/admin/auth/login';
      axios
        .post(url, data)
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.token);
            resolve(response.data.user as UserType);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(this.getErrorMessage(error));
        });
    });
  };
  
  logout = () => {
    this.setSession('');
  };

  fetchUsers = (): Promise<UserType[]> => {
    return new Promise ((resolve, reject) => {
      const url = API_URL + '/admin/auth/users';
      const token = this.getAccessToken();
      token && this.setSession(token);
      axios
        .get(url)
        .then((response) => {
          if(response.data.users) {
            resolve(response.data.users as UserType[]);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(this.getErrorMessage(error));
        });
    })
  };

  saveUser = (data: UserRequestType):Promise<UserType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/admin/auth/save-user';
      const token = this.getAccessToken();
      token && this.setSession(token);

      axios
        .post(url, data)
        .then((response) => {
          if(response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error)
          }
        })
        .catch((error) => {
          reject(this.getErrorMessage(error));
        });
    })
  }

  deleteUser = (id: string):Promise<UserType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + `/admin/auth/${id}`;
      const token = this.getAccessToken();
      token && this.setSession(token);

      axios
        .delete(url)
        .then((response) => {
          if(response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error)
          }
        })
        .catch((error) => {
          reject(this.getErrorMessage(error));
        });
    })
  }

  setSession = (accessToken: string) => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem(ACCESS_TOKEN);
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

  isValidToken = (accessToken: string) => {
    if (!accessToken) {
      return false;
    }

    return true;
  };

  isAuthenticated = () => !!this.getAccessToken();

  /////////////////////////////////////////////////////////////////////////
  /////////////////////////// Get Error Message ///////////////////////////
  /////////////////////////////////////////////////////////////////////////
  getErrorMessage(error: AxiosError): string {
    let message = error.message;
    if (error.response && error.response.data && typeof error.response.data === 'object') {
      const data = error.response.data as { message?: string };
      if (data.message) {
        message = data.message;
      }
    }
    return message;
  }
}

const authService = new AuthService();

export default authService;