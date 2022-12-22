import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {movieFinderAPI} from './movieFinderAPI';
import {
    TMovieDetails,
    TFullCard, THomePageCurrent, TSearchResponseData,
    TStatus, TTopData, TTopList, TTopResponse,
    TMovieSimilarsRes, TVideosRes, TImagesRes, TAwardsRes,
    TFactsRes, TSearchResponse, TSearchRequest, TFiltersResponse,
} from "./movieFinderTypes";

interface TMovieFinderState {
    status: TStatus
    error: string | null
    detailsPage: TMovieDetails
    homePage: {[key in TTopList]: TTopData | null}
    search: {
        request: TSearchRequest | null,
        result: TSearchResponse | null,
    }
    filters: TFiltersResponse | null

    movies: TSearchResponseData | null
    series: TSearchResponseData | null
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
    search: {
        request: null,
        result: null,
    },
    filters: null,
    movies: null,
    series: null,
};

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

export const getMoviesByKeywordAsync = createAsyncThunk<TSearchResponse, TSearchRequest, {rejectValue: string}>(
    'movieFinder/getMoviesByKeyword',
    async function ({keyword, page}, {rejectWithValue}) {
        const response = await movieFinderAPI.getMoviesByKeyword(keyword, page);
        return response.status === 200 ? response.data : rejectWithValue('Server Error!');
    }
);

export const getFiltersAsync = createAsyncThunk<TFiltersResponse, undefined, {rejectValue: string}>(
    'movieFinder/getMovieFacts',
    async function (_, {rejectWithValue}) {
        const response = await movieFinderAPI.getFilters();
        return response.status === 200 ? response.data : rejectWithValue('Server Error!');
    }
);

export const movieFinderSlice = createSlice({
    name: 'movieFinder',
    initialState,

    reducers: {
        setSearchKeyword: (state, action: PayloadAction<null | TSearchRequest>) => {
            state.search.request = action.payload;
        },
        setSearchResult: (state, action: PayloadAction<null | TSearchResponse>) => {
            state.search.result = action.payload;
        },
        setFilters: (state, action: PayloadAction<null | TFiltersResponse>) => {
            state.filters = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTopListAsync.pending, (state) => {
                state.status = 'loading';
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
            })
            .addCase(getMovieDataAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detailsPage.movie = action.payload;
            })
            .addCase(getMovieSimilarAsync.pending, (state) => {
                state.status = 'loading';
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
            })
            .addCase(getMovieVideosAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detailsPage.videos = action.payload;
            })
            .addCase(getMovieImagesAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovieImagesAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detailsPage.images = action.payload;
            })
            .addCase(getMovieAwardsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovieAwardsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detailsPage.awards = action.payload;
            })
            .addCase(getMovieFactsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMovieFactsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.detailsPage.facts = action.payload;
            })
            .addCase(getMoviesByKeywordAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getMoviesByKeywordAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.search.result = action.payload;
            })
            .addCase(getFiltersAsync.pending, (state) => {
                state.status = 'loading';
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

export const {setSearchKeyword, setSearchResult, setFilters, } = movieFinderSlice.actions;

export const selectStatus = (state: RootState) => state.movieFinder.status;
export const selectHomePage = (state: RootState) => state.movieFinder.homePage;
export const selectDetails = (state: RootState) => state.movieFinder.detailsPage;
export const selectSearch = (state: RootState) => state.movieFinder.search;
export const selectFilters = (state: RootState) => state.movieFinder.filters;

export default movieFinderSlice.reducer;

function isError(action: AnyAction) {
    return action.type.endsWith('rejected');
}