import axios from "axios";
import { API_URL, ACCESS_TOKEN, } from "../config";
import { LoginType } from "./types";
import { UserType } from "@/pages/types";

class AuthService {
  login = (data: LoginType): Promise<UserType> => {
    return new Promise((resolve, reject) => {
      const url = API_URL + '/admin/auth/login';
      axios
        .post(url, data)
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.token);
            resolve(response.data.user as UserType); // Explicitly cast to UserType
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

  fetchUsers = () => {
    return new Promise ((resolve, reject) => {
      const url = API_URL + '/admin/auth/users';
      axios
        .get(url)
        .then((response) => {
          if(response.data.users) {
            console.log('fetch successfully users', response.data.users);
            resolve(response.data.users);
          } else {
            console.log('fetch failed', response.data.error);
            reject(response.data.error);
          }
        })
    })
  };

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
  getErrorMessage(error: any): string {
    let message = error.message;
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }
    return message;
  }
}

const authService = new AuthService();

export default authService;