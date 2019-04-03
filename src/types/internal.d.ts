import { CancelToken } from 'axios';

interface Map<T> {
  [key: string]: T;
}

interface APIEntryPoint {
  url: string;
  method: string;
  auth: boolean;
}

interface RequestOption {
  entryPoint: APIEntryPoint;
  params?: Map<number | string | boolean>;
  urlParam?: string;
  cancelToken?: CancelToken;
}
