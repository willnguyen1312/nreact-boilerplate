import { APIEntryPoint } from 'types/internal';

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

// article services
export const articleEntryPoint: APIEntryPoint = {
  url: '/posts',
  method: HTTPMethods.GET,
  auth: false,
};
