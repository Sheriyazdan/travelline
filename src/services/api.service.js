const commonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json, text/plain, */*",
  "X-TravelLine-ApiKey": "ec36326b2ebf73789050fa91fbe041b6",
};
export class ApiService {
  constructor(baseURL) {
    this.baseURL = "https://ibe.tlintegration.com/" + baseURL;
    this.defaultHeaders = commonHeaders;
  }

  async get(path, headers = {}) {
    const url = `${this.baseURL}${path}`;
    const mergedHeaders = { ...this.defaultHeaders, ...headers };

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: mergedHeaders,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  async post(path, body = {}) {
    const url = `${this.baseURL}${path}`;
    const mergedHeaders = { ...this.defaultHeaders };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: mergedHeaders,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }
}
