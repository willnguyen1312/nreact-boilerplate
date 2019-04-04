import { USER_TOKEN } from 'constant';

export const getAuthToken = () => {
  return localStorage.getItem(USER_TOKEN);
};
