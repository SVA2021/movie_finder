import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {movieFinderAPI} from './movieFinderAPI';
import {
	TMovieDetails,
	TFullCard, THomePageCurrent, TSearchResponseData,
	TStatus, TTopData, TTopList, TTopResponse,
	 TMovieSimilarsRes, TVideosRes, TImagesRes, TAwardsRes, TFactsRes,
} from "./movieFinderTypes";

interface TMovieFinderState {
	status: TStatus
	detailsPage: TMovieDetails
	homePage: {[key in TTopList]: TTopData | null}
	movies: TSearchResponseData | null
	series: TSearchResponseData | null
	searchResult: TSearchResponseData
	error: string | null
}

export const initialState: TMovieFinderState = {
	status: 'idle',
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
	movies: null,
	series: null,
	searchResult: {
		total: null,
		totalPages: null,
		currentPage: 1,
		keyword: null,
		items: {},
	},
	error: null
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

export const movieFinderSlice = createSlice({
	name: 'movieFinder',
	initialState,

	reducers: {
		// setFullCard: (state, action: PayloadAction<null | TFullCard>) => {
		// 	state.fullCard = action.payload;
		// },
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
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.status = 'failed';
			});
	},
});

export const { } = movieFinderSlice.actions;

export const selectStatus = (state: RootState) => state.movieFinder.status;
export const selectHomePage = (state: RootState) => state.movieFinder.homePage;
export const selectDetails = (state: RootState) => state.movieFinder.detailsPage;
export const selectSearchResult = (state: RootState) => state.movieFinder.searchResult;

export default movieFinderSlice.reducer;

function isError(action: AnyAction) {
	return action.type.endsWith('rejected');
}