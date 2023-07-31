import axios from 'axios';

const DEFAULT_TIMEOUT = 1500;

import { RequestData, RequestParams, RequestHeaders, Response } from '../types';

interface RequestOptions {
  data?: RequestData;
  params?: RequestParams;
  headers?: RequestHeaders;
  method?: string;
}

class HTTPClient {
  private host: string;
  private timeout: number;
  private headers: RequestHeaders;

  constructor(host: string, timeout?: number, headers?: RequestHeaders) {
    this.host = host;
    this.timeout = timeout || DEFAULT_TIMEOUT;
    this.headers = headers || {};
  }

  request(url: string, options: RequestOptions): Response {
    const { headers } = options;
    const cancelTokenSource = axios.CancelToken.source();
    const responsePromise = axios({
      ...options,
      baseURL: this.host,
      url,
      headers: {
        ...this.headers,
        ...headers,
      },
      timeout: this.timeout,
      cancelToken: cancelTokenSource.token,
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    return responsePromise;
  }

  static isCancel(err: Error): boolean {
    return axios.isCancel(err);
  }

  get(
    url: string,
    params?: { [key: string]: any },
    options?: RequestOptions
  ): Response {
    return this.request(url, {
      ...options,
      params,
      method: 'GET',
    });
  }

  post(url: string, data?: RequestData, options?: RequestOptions): Response {
    return this.request(url, {
      ...options,
      data,
      method: 'POST',
    });
  }

  put(url: string, data?: RequestData, options?: RequestOptions): Response {
    return this.request(url, {
      ...options,
      data,
      method: 'PUT',
    });
  }

  delete(url: string, data?: RequestData, options?: RequestOptions): Response {
    return this.request(url, {
      ...options,
      data,
      method: 'DELETE',
    });
  }

  patch(url: string, data?: RequestData, options?: RequestOptions): Response {
    return this.request(url, {
      ...options,
      data,
      method: 'PATCH',
    });
  }
}

export default HTTPClient;
