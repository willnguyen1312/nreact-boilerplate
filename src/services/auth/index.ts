import { USER_PROFILE, USER_TOKEN } from 'consts';
import { request } from 'services/api';
import { authenEntryPoint } from 'services/api/apiEntries';
import { RequestOption } from 'types/internal';

class AuthService {
  public login = async (email: string, password: string) => {
    const requestOption: RequestOption = {
      entryPoint: authenEntryPoint,
      params: {
        email,
        password,
      },
    };

    const { token, user }: any = await request(requestOption);
    this.setToken(token);
    this.setProfile(user);
    return user;
  };

  public loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const isTokenAvailable = Boolean(this.getToken());
    // Call API to check isTokenExpired - /api/me?
    // const isTokenValid = ...
    // return isTokenAvailable && isTokenValid;
    return isTokenAvailable;
  };

  public setProfile = profile => {
    // Saves profile data to localStorage
    localStorage.setItem(USER_PROFILE, JSON.stringify(profile));
  };

  public getProfile = () => {
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem(USER_PROFILE);
    return profile ? JSON.parse(localStorage.profile) : {};
  };

  public setToken = idToken => {
    // Saves user token to localStorage
    localStorage.setItem(USER_TOKEN, idToken);
  };

  public getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem(USER_TOKEN);
  };

  public logout = () => {
    localStorage.removeItem(USER_TOKEN);
    localStorage.removeItem(USER_PROFILE);
  };
}

export default new AuthService();
