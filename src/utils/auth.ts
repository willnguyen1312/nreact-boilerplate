import { USER_TOKEN } from 'constant';

export const getAuthTOken = () => {
  return localStorage.getItem(USER_TOKEN);
};
