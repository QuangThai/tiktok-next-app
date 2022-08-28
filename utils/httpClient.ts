import axios from "axios";
import * as http from "http";
import * as https from "https";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();

/**
 * DEFAULT CONFIG
 */

const httpClient = axios.create({
  // baseURL: API_BASEURL,
  timeout: serverRuntimeConfig.API_TIMEOUT,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
});

httpClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (typeof window === "undefined") {
    config.baseURL = serverRuntimeConfig.API_DOMAIN;
    config.url = config.url?.replace("/proxy/", "/") || config.url;
  }
  // console.log("axiosConfig", config);
  return config;
});

export default httpClient;
