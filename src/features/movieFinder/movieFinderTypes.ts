//********** BASIC CONSTANTS *************************/

export const PRODUCTION_STATUS = ['FILMING', 'PRE_PRODUCTION', 'COMPLETED', 'ANNOUNCED', 'UNKNOWN', 'POST_PRODUCTION'] as const;
export const FILM_TYPE = ['FILM', 'VIDEO', 'TV_SERIES', 'MINI_SERIES', 'TV_SHOW'] as const;
export const TOP_FILMS_TYPE = ['TOP_250_BEST_FILMS', 'TOP_100_POPULAR_FILMS', 'TOP_AWAIT_FILMS'] as const;

//********** BASIC TYPES *************************/

export type TCountry = {country: string}
export type TGenre = {genre: string}
export type TProductionStatus = typeof PRODUCTION_STATUS[number];
export type TFilmType = typeof FILM_TYPE[number];
export type TTopList = typeof TOP_FILMS_TYPE[number];
export type TUser = {user: string, password: string} | null;
export type TStatus = 'idle' | 'loading' | 'failed';

//********** ITEM TYPES *************************/

export interface TSmallCard {
  id: number
  nameRu: string | null
  nameEn: string | null
  year: string | number | null
  filmLength: string | number | null
  rating: string | null
  posterUrlPreview: string
}

export interface Film {
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
}

export interface TTopFilm {
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
  type: TFilmType
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

export type TSearchItem = Pick<TFullCard, 'kinopoiskId' | 'imdbId' | 'nameRu' | 'nameEn' | 'nameOriginal'
  | 'countries' | 'genres' | 'ratingKinopoisk' | 'ratingImdb' | 'year' | 'type' | 'posterUrl' | 'posterUrlPreview'>;

//********** RESPONSE TYPES *************************/

export interface TSearchResponse {
  total: number
  totalPages: number
  items: TSearchItem[]
}

export interface TSearchResponseData {
  total: number | null
  totalPages: number | null
  currentPage: number
  keyword: string | null
  items: {[key: number]: TSearchItem[]}
}

export interface TTopResponse {
  pagesCount: number
  films: TTopFilm[]
  type: TTopList
  page: number
}

export interface TTopData {
  pagesCount: number
  page: number
  data: TSmallCard[]
}

export interface THomePageCurrent {
  type: TTopList
  page: number
}

export interface TMovieDetails {
  movie: TFullCard | null
  similars: TSimilarsData | null
  videos: TVideosRes | null
  images: TImagesRes | null
  awards: TAwardsRes | null
  facts: TFactsRes | null
}

// export type TMovieExtraType = 'similars' | 'videos' | 'images' | 'awards' | 'facts'
export type TMovieExtraType = 'videos' | 'images' | 'awards' | 'facts'
export type TVideoItemType = 'YOUTUBE' | 'KINOPOISK_WIDGET' | 'UNKNOWN'

export interface TMovieSimilarsRes {
  total: number
  items: Film[]
}

export interface TSimilarsData {
  total: number
  data: TSmallCard[]
}

export interface TVideoItem {
  url: string
  name: string
  site: TVideoItemType
}

export interface TImageItem {
  imageUrl: string
  previewUrl: string
}

export interface TVideosRes {
  total: number
  items: TVideoItem[]
}

export interface TImagesRes {
  total: number
  totalPages: number
  items: TImageItem[]
}

export interface TAwardsItem {
  name: string
  win: boolean
  imageUrl: string
  nominationName: string
  year: number
}

export interface TAwardsRes {
  total: number
  items: TAwardsItem[]
}

export interface TFactsItem {
  text: string
  spoiler: boolean
  type: 'FACT' | 'BLOOPER'
}

export interface TFactsRes {
  total: number
  items: TFactsItem[]
}

export interface TMovieExtraProps {
  id: number
}

export interface TSearchRequest {
  keyword: string | null
  page: number
  // extended: TSearchExtended | null
}

export const ORDERS = ['RATING', 'NUM_VOTE', 'YEAR'] as const;
export type TOrder = typeof ORDERS[number];
// export type TOrder = 'RATING' | 'NUM_VOTE' | 'YEAR'
export type TFilterGenre = {id: number, genre: string}
export type TFilterCountry = {id: number, country: string}

export interface TFiltersResponse {
  genres: TFilterGenre[]
  countries: TFilterCountry[]
}

export interface TSearchForm {
  countries: number | 'default'
  genres: number | 'default'
  order: TOrder
  rating: [number, number]
  year: [number, number]
}

export interface TSearchExtended {
  countries: number[] | null
  genres: number[] | null
  order: TOrder
  ratingFrom: number
  ratingTo: number
  yearFrom: number
  yearTo: number
}

export interface TSearch {
  search: TSearchRequest
  extended: TSearchForm | null
}