import { request } from 'service/api';
import { photosEntryPoint } from 'service/api/entryPoints';
import { IRequestOption } from 'types/internal';
import { IPhotos } from '../types';

export async function fetchPhotosService() {
  const requestOption: IRequestOption = {
    entryPoint: photosEntryPoint,
  };

  const response: IPhotos[] = await request(requestOption);
  return response;
}
