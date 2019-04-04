import { APIEntryPoint } from 'types/internal';

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

// authentication service
export const authenEntryPoint: APIEntryPoint = {
  url: '/login',
  method: HTTPMethods.POST,
  auth: false,
};

// article service
export const articleEntryPoint: APIEntryPoint = {
  url: '/posts',
  method: HTTPMethods.GET,
  auth: false,
};
