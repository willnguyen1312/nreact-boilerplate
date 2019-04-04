import axios, { AxiosAdapter } from 'axios';
import {
  cacheAdapterEnhancer,
  throttleAdapterEnhancer,
} from 'axios-extensions';
import { SERVER_URL_BASE } from 'config';
import { HTTPMethods } from 'service/api/apiEntries';
import { RequestOption } from 'types/internal';
import { getAuthToken } from 'utils/auth';
import { logError } from 'utils/logs';

const baseURL = `${SERVER_URL_BASE}/api`;

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: { 'Cache-Control': 'no-cache' },
  adapter: throttleAdapterEnhancer(
    cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter)
  ),
});

const queryUrlWithParam = (url: string, urlParam: string) => {
  let result = url;
  if (Boolean(urlParam)) {
    result = result.replace(/(:\w+)/, `${urlParam}`);
  }
  return result;
};

export const request = async ({
  entryPoint,
  params = {},
  urlParam = '',
  cancelToken,
}: RequestOption) => {
  const { url, method, auth } = entryPoint;
  const authToken = getAuthToken();

  let response;
  const headers = auth
    ? {
        Authorization: `Bearer ${authToken}`,
      }
    : {};

  const defaultRequestOption = {
    method,
    headers,
    cancelToken,
  };

  try {
    if (entryPoint.method === HTTPMethods.GET) {
      response = await axiosInstance.request({
        ...defaultRequestOption,
        url: queryUrlWithParam(url, urlParam),
        params: {
          ...params,
        },
      });
    } else if (entryPoint.method === HTTPMethods.DELETE) {
      response = await axiosInstance.request({
        ...defaultRequestOption,
        url,
      });
    } else {
      // For POST, PUT and PATCH methods
      response = await axiosInstance.request({
        ...defaultRequestOption,
        url,
        data: params,
      });
    }
  } catch (error) {
    if (!axios.isCancel(error)) {
      logError(error);
      return error;
    }
  }

  const { data: result } = response;

  return result;
};
