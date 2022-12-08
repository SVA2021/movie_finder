import {CssBaseline, ThemeProvider} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './layout';
import {Details, Home, TopPage} from './pages';
import {theme} from './theme';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='top100' element={<TopPage type={'TOP_100_POPULAR_FILMS'} />} />
					<Route path='top250' element={<TopPage type={'TOP_250_BEST_FILMS'} />} />
					<Route path='topAwait' element={<TopPage type={'TOP_AWAIT_FILMS'} />} />
					<Route path='details/:id' element={<Details />} />
					<Route path='*' element={<Home />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
};