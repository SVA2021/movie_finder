import axios from "axios";
import { API_OFFICIAL } from "../../private/key";
import { TTopList } from "./movieFinderTypes";

export const BASE_URL = 'https://kinopoiskapiunofficial.tech/';
const FILMS = 'api/v2.2/films/';
const TOP = 'top/';

const movieFinderInstance = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-API-KEY': API_OFFICIAL,
		'Content-Type': 'application/json',
	},
});

export const movieFinderAPI = {

	getTopList(topList: TTopList = 'TOP_250_BEST_FILMS', page: number = 1) {
		let query = `${FILMS}${TOP}?page=${page}`;
		return movieFinderInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getMovieData(id: number = 1) {
		let query = `${FILMS}${id}`;
		return movieFinderInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getMoviesByKeyword(keyword: string | undefined, page: number = 1) {
		let query = `${FILMS}?keyword=${keyword}&page=${page}`;
		return movieFinderInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},

	getSeries(page: number = 1) {
		let query = `${FILMS}?type=TV_SERIES&page=${page}`;
		return movieFinderInstance.get(query)
			.then(response => {
				console.log(response);
				return response;
			})
			.catch(e => {
				console.log(e);
				return e;
			});
	},
}
