import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {movieFinderAPI} from './movieFinderAPI';
import {TFullCard, THomePageCurrent, TSearchResponseData, TStatus, TTopData, TTopList, TTopResponse, TUser, } from "./movieFinderTypes";

interface TMovieFinderState {
	isAuth: boolean
	user: TUser | null
	status: TStatus
	fullCard: TFullCard | null
	fullCardExtraInfo: null
	homePage: {[key in TTopList]: TTopData | null}
	homePageCurrent: THomePageCurrent
	movies: TSearchResponseData | null
	series: TSearchResponseData | null
	searchResult: TSearchResponseData
}

export const initialState: TMovieFinderState = {
	isAuth: false,
	user: null,
	status: 'idle',
	fullCard: null,
	fullCardExtraInfo: null,
	homePage: {
		TOP_250_BEST_FILMS: null,
		TOP_100_POPULAR_FILMS: null,
		TOP_AWAIT_FILMS: null,
	},
	homePageCurrent: {
		type: 'TOP_250_BEST_FILMS',
		page: 1,
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
};

export const getTopListAsync = createAsyncThunk<TTopResponse, THomePageCurrent, {rejectValue: string}>(
	'movieFinder/getTopList',
	async ({type, page}: THomePageCurrent) => {
		const response = await movieFinderAPI.getTopList(type, page);
		let result = null;
		if (response.status === 200) result = (response.data);
		return result;
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
		setHomePageCurrent: (state, action: PayloadAction<{type: TTopList, page: number}>) => {
			state.homePageCurrent = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getTopListAsync.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(getTopListAsync.fulfilled, (state, action: PayloadAction<TTopResponse>) => {
				state.status = 'idle';
				state.homePage[state.homePageCurrent.type] = {
					page: state.homePageCurrent.page,
					pagesCount: action.payload.pagesCount,
					[state.homePageCurrent.page]: action.payload.films.map((v) => ({...v, id: v.filmId})),
				}
			});
	},
});

export const {setIsAuth, setFullCard, setHomePageCurrent, } = movieFinderSlice.actions;

export const selectIsAuth = (state: RootState) => state.movieFinder.isAuth;
export const selectStatus = (state: RootState) => state.movieFinder.status;
export const selectHomePage = (state: RootState) => state.movieFinder.homePage;
export const selectHomePageCurrent = (state: RootState) => state.movieFinder.homePageCurrent;
export const selectSearchResult = (state: RootState) => state.movieFinder.searchResult;

export default movieFinderSlice.reducer;