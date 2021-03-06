//********** BASIC CONSTANTS *************************/

export const PRODUCTION_STATUS = ['FILMING', 'PRE_PRODUCTION', 'COMPLETED', 'ANNOUNCED', 'UNKNOWN', 'POST_PRODUCTION'] as const;
export const FILM_TYPE = ['FILM', 'VIDEO', 'TV_SERIES', 'MINI_SERIES', 'TV_SHOW'] as const;
export const TOP_FILMS_TYPE = ['TOP_250_BEST_FILMS', 'TOP_100_POPULAR_FILMS', 'TOP_AWAIT_FILMS'] as const;


//********** BASIC TYPES *************************/

export type TCountry = { country: string }
export type TGenre = { genre: string }
export type TProductionStatus = typeof PRODUCTION_STATUS[number];
export type TFilm = typeof FILM_TYPE[number];
export type TTopList = typeof TOP_FILMS_TYPE[number];
export type TUser = { user: string, password: string } | null;
export type TStatus = 'idle' | 'loading' | 'failed';

//********** ITEM TYPES *************************/

export interface TFullCard {
	kinopoiskId: number
	imdbId: string | null
	nameRu: string | null
	nameEn: string | null
	nameOriginal: string | null
	posterUrl: string
	posterUrlPreview: string
	coverUrl: string | null
	logoUrl: string | null
	reviewsCount: number
	ratingGoodReview: number | null
	ratingGoodReviewVoteCount: number | null
	ratingKinopoisk: number | null
	ratingKinopoiskVoteCount: number | null
	ratingImdb: number | null
	ratingImdbVoteCount: number | null
	ratingFilmCritics: number | null
	ratingFilmCriticsVoteCount: number | null
	ratingAwait: number | null
	ratingAwaitCount: number | null
	ratingRfCritics: number | null
	ratingRfCriticsVoteCount: number | null
	webUrl: string
	year: number | null
	filmLength: number | null
	slogan: string | null
	description: string | null
	shortDescription: string | null
	editorAnnotation: string | null
	isTicketsAvailable: boolean
	productionStatus: TProductionStatus | null
	type: TFilm
	ratingMpaa: string | null
	ratingAgeLimits: string | null
	countries: TCountry[]
	genres: TGenre[]
	startYear?: number | null
	endYear?: number | null
	serial?: boolean | null
	shortFilm?: boolean | null
	completed?: boolean | null
	hasImax?: boolean | null
	has3D?: boolean | null
	lastSync?: string
}

export interface TSmallCard {
	filmId: number
	nameRu: string | null
	nameEn: string | null
	year: string | null
	filmLength: string | null
	countries: TCountry[]
	genres: TGenre[]
	rating: string | null
	ratingVoteCount: number | null
	posterUrl: string
	posterUrlPreview: string
	ratingChange?: null | any
}

export type TSearchItem = Pick<TFullCard, 'kinopoiskId' | 'imdbId' | 'nameRu' | 'nameEn' | 'nameOriginal'
	| 'countries' | 'genres' | 'ratingKinopoisk' | 'ratingImdb' | 'year' | 'type' | 'posterUrl' | 'posterUrlPreview'>;

//********** RESPONSE TYPES *************************/

export interface TSearchResponse {
	total: number
	totalPages: number
	items: TSearchItem[]
}

export interface TSearchResponseData {
	total: number
	totalPages: number
	items: { [key: number]: TSearchItem[] }
}

export interface TTopResponse {
	pagesCount: number
	films: TSmallCard[]
}

export interface TTopData {
	pagesCount: number
	data: { [key: number]: TSmallCard[] }
}

//********** SLICER TYPES *************************/

export interface TMovieFinderState {
	isAuth: boolean
	user: TUser | null
	status: TStatus
	fullCard: TFullCard | null
	fullCardExtraInfo: null
	home: { [key in TTopList]: TTopData | null } | null
	movies: TSearchResponseData | null
	series: TSearchResponseData | null
	searchResult: TSearchResponseData | null
}