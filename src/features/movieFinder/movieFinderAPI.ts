import axios from "axios";
import {convertSearchFilter} from "../../utils";
import {TMovieExtraType, TSearchForm, TSearchRequest, TTopList} from "./movieFinderTypes";

export const BASE_URL = 'https://kinopoiskapiunofficial.tech/';
const API_OFFICIAL = process.env.REACT_APP_API_KEY ?? '';
const API_FILMS = 'api/v2.2/films';

const movieFinderInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': API_OFFICIAL,
    'Content-Type': 'application/json',
  },
});

export const movieFinderAPI = {

  getTopList(type: TTopList = 'TOP_250_BEST_FILMS', page: number = 1) {
    let query = `${API_FILMS}/top`;
    return movieFinderInstance.get(query, {params: {type, page}})
      .then(response => response)
      .catch(e => e);
  },

  getMovieData(id: number = 1) {
    let query = `${API_FILMS}/${id}`;
    return movieFinderInstance.get(query)
      .then(response => response)
      .catch(e => e);
  },

  getMovieSimilars(id: number = 1) {
    let query = `${API_FILMS}/${id}/similars`;
    return movieFinderInstance.get(query)
      .then(response => response)
      .catch(e => e);
  },

  getMovieExtra(id: number = 1, type: TMovieExtraType = 'videos') {
    let query = `${API_FILMS}/${id}/${type}`;
    return movieFinderInstance.get(query)
      .then(response => response)
      .catch(e => e);
  },

  getMoviesByKeyword(search: TSearchRequest, extended: TSearchForm | null) {
    let query = `${API_FILMS}`;
    const params = !extended ? {...search} : {...search, ...convertSearchFilter(extended)};
    return movieFinderInstance.get(query, {params})
      .then(response => response)
      .catch(e => e);
  },

  getSeries(page: number = 1) {
    let query = `${API_FILMS}`;
    return movieFinderInstance.get(query, {params: {type: 'TV_SERIES', page}})
      .then(response => response)
      .catch(e => e);
  },

  getFilters() {
    let query = `${API_FILMS}/filters`;
    return movieFinderInstance.get(query)
      .then(response => response)
      .catch(e => e);
  },
}