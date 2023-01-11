import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {getFiltersAsync, getMovieAwardsAsync, getMovieDataAsync, getMovieFactsAsync, getMovieImagesAsync, getMoviesByKeywordAsync, getMovieSimilarAsync, getMovieVideosAsync, getTopListAsync} from './movieFinderThunks';
import {TFiltersResponse, TMovieDetails, TSearchForm, TSearchRequest, TSearchResponse, TStatus, TTopData, TTopList, TTopResponse} from "./movieFinderTypes";

interface TMovieFinderState {
  status: TStatus
  error: string | null
  detailsPage: TMovieDetails
  homePage: {[key in TTopList]: TTopData | null}
  searchRequest: TSearchRequest | null,
  searchExtended: TSearchForm | null,
  searchResult: TSearchResponse | null,
  filters: TFiltersResponse | null
}

export const initialState: TMovieFinderState = {
  status: 'idle',
  error: null,
  detailsPage: {
    movie: null,
    similars: null,
    videos: null,
    images: null,
    awards: null,
    facts: null,
  },
  homePage: {
    TOP_250_BEST_FILMS: null,
    TOP_100_POPULAR_FILMS: null,
    TOP_AWAIT_FILMS: null,
  },
  searchExtended: null,
  searchRequest: null,
  searchResult: null,
  filters: null,
};

export const movieFinderSlice = createSlice({
  name: 'movieFinder',
  initialState,

  reducers: {
    setSearchRequest: (state, action: PayloadAction<null | TSearchRequest>) => {
      state.searchRequest = action.payload;
    },
    setSearchExtended: (state, action: PayloadAction<null | TSearchForm>) => {
      state.searchExtended = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<null | TSearchResponse>) => {
      state.searchResult = action.payload;
    },
    setFilters: (state, action: PayloadAction<null | TFiltersResponse>) => {
      state.filters = action.payload;
    },
    setError: (state, action: PayloadAction<null | string>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTopListAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getTopListAsync.fulfilled, (state, action: PayloadAction<TTopResponse>) => {
        state.status = 'idle';
        state.homePage[action.payload.type] = {
          page: action.payload.page,
          pagesCount: action.payload.pagesCount,
          data: (state.homePage[action.payload.type] === null || action.payload.page === 1)
            ? action.payload.films.map((v) => ({...v, id: v.filmId}))
            : [...state.homePage[action.payload.type]!.data, ...action.payload.films.map((v) => ({...v, id: v.filmId}))],
        }
      })
      .addCase(getMovieDataAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.movie = action.payload;
      })
      .addCase(getMovieSimilarAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieSimilarAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.similars = {
          total: action.payload.total,
          data: action.payload.items.map((v) => ({...v, id: v.filmId}))
        };
      })
      .addCase(getMovieVideosAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieVideosAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.videos = action.payload;
      })
      .addCase(getMovieImagesAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieImagesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.images = action.payload;
      })
      .addCase(getMovieAwardsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieAwardsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.awards = action.payload;
      })
      .addCase(getMovieFactsAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMovieFactsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailsPage.facts = action.payload;
      })
      .addCase(getMoviesByKeywordAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMoviesByKeywordAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResult = action.payload;
      })
      .addCase(getFiltersAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getFiltersAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.filters = action.payload;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.status = 'failed';
      });
  },
});

export const {
  setSearchRequest, setSearchResult, setFilters, setSearchExtended, setError,
} = movieFinderSlice.actions;

export const selectError = (state: RootState) => state.movieFinder.error;
export const selectStatus = (state: RootState) => state.movieFinder.status;
export const selectHomePage = (state: RootState) => state.movieFinder.homePage;
export const selectDetails = (state: RootState) => state.movieFinder.detailsPage;
export const selectSearchRequest = (state: RootState) => state.movieFinder.searchRequest;
export const selectSearchResult = (state: RootState) => state.movieFinder.searchResult;
export const selectSearchExtended = (state: RootState) => state.movieFinder.searchExtended;
export const selectFilters = (state: RootState) => state.movieFinder.filters;

export default movieFinderSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}