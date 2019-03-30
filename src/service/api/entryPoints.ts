import { IAPIEntryPoint } from 'types/internal';

export const HTTPMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

// article services
export const articleEntryPoint: IAPIEntryPoint = {
  url: '/posts',
  method: HTTPMethods.GET,
  auth: false,
};

// photos services
export const photosEntryPoint: IAPIEntryPoint = {
  url: '/photos',
  method: HTTPMethods.GET,
  auth: false,
};
