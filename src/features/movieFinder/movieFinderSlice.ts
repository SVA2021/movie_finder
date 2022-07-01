import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TFullCard, TMovieFinderState } from "./movieFinderTypes";

export const initialState: TMovieFinderState = {
	isAuth: false,
	user: null,
	status: 'idle',
	fullCard: null,
	fullCardExtraInfo: null,
	home: null,
	movies: null,
	series: null,
	searchResult: null,
};

// export const getCurrentWeatherAsync = createAsyncThunk(
// 	'weather/getCurrentWeather',
// 	async (geo: CityGeoType) => {
// 		const response = await weatherAPI.getCurrentWeather(geo);
// 		let result: WeatherType = { description: 'no data', time: 0 };
// 		if (response.status === 200) result = convertWeatherData(response.data);
// 		return result;
// 	}
// );

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
		// builder
		// 	.addCase(getLocationsListAsync.pending, (state) => {
		// 		state.status = 'loading';
		// 	})
		// 	.addCase(getLocationsListAsync.fulfilled, (state, action: PayloadAction<LocationGeoType[]>) => {
		// 		state.status = 'idle';
		// 		state.locationsList = action.payload;
		// 	});
	},
});

export const { setIsAuth, setFullCard } = movieFinderSlice.actions;

export const selectIsAuth = (state: RootState) => state.movieFinder.isAuth;
export default movieFinderSlice.reducer;