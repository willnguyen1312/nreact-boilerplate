import { CancelToken } from 'axios';

interface Map<T> {
  [key: string]: T;
}

interface IAPIEntryPoint {
  url: string;
  method: string;
  auth: boolean;
}

interface IRequestOption {
  entryPoint: IAPIEntryPoint;
  params?: Map<number | string | boolean>;
  urlParam?: string;
  cancelToken?: CancelToken;
}
