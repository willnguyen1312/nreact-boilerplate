import { USER_TOKEN } from 'consts';

export const getAuthToken = () => {
  return localStorage.getItem(USER_TOKEN);
};
