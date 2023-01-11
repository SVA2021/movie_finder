import {createAsyncThunk} from '@reduxjs/toolkit';
import {movieFinderAPI} from './movieFinderAPI';
import {
  TAwardsRes,
  TFactsRes, TFiltersResponse, TFullCard, THomePageCurrent, TImagesRes, TMovieSimilarsRes, TSearch, TSearchResponse, TTopResponse, TVideosRes
} from "./movieFinderTypes";


export const getTopListAsync = createAsyncThunk<TTopResponse, THomePageCurrent, {rejectValue: string}>(
  'movieFinder/getTopList',
  async function ({type, page}: THomePageCurrent, {rejectWithValue}) {
    const response = await movieFinderAPI.getTopList(type, page);
    return response.status === 200 ? {...response.data, type, page, } : rejectWithValue('Server Error!');
  }
);

export const getMovieDataAsync = createAsyncThunk<TFullCard, number, {rejectValue: string}>(
  'movieFinder/getMovieData',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieData(id);
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMovieSimilarAsync = createAsyncThunk<TMovieSimilarsRes, number, {rejectValue: string}>(
  'movieFinder/getMovieSimilars',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieSimilars(id);
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMovieVideosAsync = createAsyncThunk<TVideosRes, number, {rejectValue: string}>(
  'movieFinder/getMovieVideos',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieExtra(id, 'videos');
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMovieImagesAsync = createAsyncThunk<TImagesRes, number, {rejectValue: string}>(
  'movieFinder/getMovieImages',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieExtra(id, 'images');
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMovieAwardsAsync = createAsyncThunk<TAwardsRes, number, {rejectValue: string}>(
  'movieFinder/getMovieAwards',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieExtra(id, 'awards');
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMovieFactsAsync = createAsyncThunk<TFactsRes, number, {rejectValue: string}>(
  'movieFinder/getMovieFacts',
  async function (id: number, {rejectWithValue}) {
    const response = await movieFinderAPI.getMovieExtra(id, 'facts');
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getMoviesByKeywordAsync = createAsyncThunk<TSearchResponse, TSearch, {rejectValue: string}>(
  'movieFinder/getMoviesByKeyword',
  async function ({search, extended}, {rejectWithValue}) {
    const response = await movieFinderAPI.getMoviesByKeyword(search, extended);
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);

export const getFiltersAsync = createAsyncThunk<TFiltersResponse, undefined, {rejectValue: string}>(
  'movieFinder/getFilters',
  async function (_, {rejectWithValue}) {
    const response = await movieFinderAPI.getFilters();
    return response.status === 200 ? response.data : rejectWithValue('Server Error!');
  }
);