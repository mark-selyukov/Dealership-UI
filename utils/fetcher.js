//Fetcher for making calls out to apis
import fetch from "node-fetch";
import * as apiCalls from "../pages/api/index";
import routes from "../utils/routes";

const baseUrl = process.env.VERCEL_URL;

const inAppFetcher = async (url) => {
  if (baseUrl) {
    const apiCall = apiCalls[url];
    const item = await apiCall();
    return item;
  }
  if (url) {
    return fetch("/api/" + url);
  }
  return { errorMessage: `There was an error with the url: ${url}` };
};

//First parameter is the actual api that needs to be called
//Second parameter is the route to the api that needs to be called
const fetcher = async (api, route) => {
  const url = routes(api) + route;
  const response = await fetchHelper(url);

  return response;
};

const fetchHelper = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("error");
  }
};

export { fetcher, inAppFetcher };
