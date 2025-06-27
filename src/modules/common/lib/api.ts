type FetchParams = Parameters<typeof fetch>;
type RequestInit = FetchParams[1];

export class Api {
  static options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  };

  getJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  getOptions(options: RequestInit = {}): RequestInit {
    const {headers = {}} = options;

    return {
      ...Api.options,
      headers: {...Api.options.headers, ...headers},
      ...options,
    };
  }

  request<T>(url = '', options?: RequestInit): Promise<T> {
    return this.fetch<T>(url, options);
  }

  fetch<T>(url = '', options = {}): Promise<T> {
    return fetch(url, this.getOptions(options)).then<T>(this.getJSON);
  }

  requestLocal<T>(url = ''): Promise<T> {
    return this.fetch(`/foos-rating/local${url}`);
  }
}

export const api = new Api();
