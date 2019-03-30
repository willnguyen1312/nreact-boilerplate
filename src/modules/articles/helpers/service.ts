import { request } from 'service/api';
import { articleEntryPoint } from 'service/apiEntries';
import { IRequestOption } from 'types/internal';
import { IArticle } from '../types';

export async function fetchArticlesService() {
  const requestOption: IRequestOption = {
    entryPoint: articleEntryPoint,
  };

  const response: IArticle[] = await request(requestOption);
  return response;
}
