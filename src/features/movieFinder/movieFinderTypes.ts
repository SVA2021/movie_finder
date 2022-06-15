//********** BASIC TYPES *************************/

export type TCountry = { country: string }
export type TGenre = { genre: string }
export type TProductionStatus = 'FILMING' | 'PRE_PRODUCTION' | 'COMPLETED' | 'ANNOUNCED' | 'UNKNOWN' | 'POST_PRODUCTION'
export type TFilm = 'FILM' | 'VIDEO' | 'TV_SERIES' | 'MINI_SERIES' | 'TV_SHOW'
export type TTop = 'TOP_250_BEST_FILMS' | 'TOP_100_POPULAR_FILMS' | 'TOP_AWAIT_FILMS'

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
	productionStatus: TProductionStatus
	type: TFilm
	ratingMpaa: string | null
	ratingAgeLimits: string | null
	hasImax: boolean | null
	has3D: boolean | null
	lastSync: string
	countries: TCountry[]
	genres: TGenre[]
	startYear?: number | null
	endYear?: number | null
	serial?: boolean | null
	shortFilm?: boolean | null
	completed?: boolean | null
}

export type TMovieShort = { filmId: number, rating: string, ratingVoteCount: string } & Pick<TFullCard, 'nameRu' | 'nameEn' | 'type' | 'year' | 'description' | 'filmLength' | 'countries' | 'genres' | 'posterUrl' | 'posterUrlPreview'>

export interface TSmallCard extends TMovieShort {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type TMovieSimilar = { filmId: number, relationType: string } & Pick<TFullCard, 'nameEn' | 'nameRu' | 'nameOriginal' | 'posterUrl' | 'posterUrlPreview'>

//********** RESPONSE TYPES *************************/

export interface TSearchResponse {
	keyword: string
	pagesCount: number
	searchFilmsCountResult: number
	films: TMovieShort[]
}

export type TSearchTops = Pick<TSearchResponse, 'films' | 'pagesCount'>