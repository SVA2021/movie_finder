import {AnyAction, createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {movieFinderAPI} from './movieFinderAPI';
import {
	TMovieDetails,
	TFullCard, THomePageCurrent, TSearchResponseData,
	TStatus, TTopData, TTopList, TTopResponse, TUser
} from "./movieFinderTypes";

interface TMovieFinderState {
	isAuth: boolean
	user: TUser | null
	status: TStatus
	detailsPage: TMovieDetails
	fullCard: TFullCard | null
	fullCardExtraInfo: null
	homePage: {[key in TTopList]: TTopData | null}
	movies: TSearchResponseData | null
	series: TSearchResponseData | null
	searchResult: TSearchResponseData
	error: string | null
}

export const initialState: TMovieFinderState = {
	isAuth: false,
	user: null,
	status: 'idle',
	detailsPage: {
		movie: null,
	},
	fullCard: null,
	fullCardExtraInfo: null,
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
		if (response.status === 200) {
			return {...response.data, type, page, }
		} else {
			return rejectWithValue('Server Error!');
		}
	}
);

export const getMovieDataAsync = createAsyncThunk<TFullCard, number, {rejectValue: string}>(
	'movieFinder/getMovieData',
	async function (id: number, {rejectWithValue}) {
		const response = await movieFinderAPI.getMovieData(id);
		if (response.status === 200) {
			return response.data
		} else {
			return rejectWithValue('Server Error!');
		}
	}
);

export const movieFinderSlice = createSlice({
	name: 'movieFinder',
	initialState,

	reducers: {
		setIsAuth: (state, action: PayloadAction<boolean>) => {
			state.isAuth = action.payload;
		},
		setFullCard: (state, action: PayloadAction<null | TFullCard>) => {
			state.fullCard = action.payload;
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
					data: (state.homePage[action.payload.type] === null)
						? action.payload.films.map((v) => ({...v, id: v.filmId}))
						: [...state.homePage[action.payload.type]!.data, ...action.payload.films.map((v) => ({...v, id: v.filmId}))],
				}
			})
			.addCase(getMovieDataAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getMovieDataAsync.fulfilled, (state, action: PayloadAction<TFullCard>) => {
				state.status = 'idle';
				state.detailsPage.movie = action.payload;
			})
			.addMatcher(isError, (state, action: PayloadAction<string>) => {
				state.error = action.payload;
				state.status = 'failed';
			});
	},
});

export const {setIsAuth, setFullCard, } = movieFinderSlice.actions;

export const selectIsAuth = (state: RootState) => state.movieFinder.isAuth;
export const selectStatus = (state: RootState) => state.movieFinder.status;
export const selectHomePage = (state: RootState) => state.movieFinder.homePage;
export const selectDetails = (state: RootState) => state.movieFinder.detailsPage.movie;
export const selectSearchResult = (state: RootState) => state.movieFinder.searchResult;

export default movieFinderSlice.reducer;

function isError(action: AnyAction) {
	return action.type.endsWith('rejected');
}