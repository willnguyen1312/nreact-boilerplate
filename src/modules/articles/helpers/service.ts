import { request } from 'service/api';
import { articleEntryPoint } from 'service/apiEntries';
import { RequestOption } from 'types/internal';
import { ArticleType } from '../types';

export async function fetchArticlesService() {
  const requestOption: RequestOption = {
    entryPoint: articleEntryPoint,
  };

  const response: ArticleType[] = await request(requestOption);
  return response;
}
