import {CssBaseline, ThemeProvider} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import {Layout} from './layout';
import {Home} from './pages';
import {theme} from './theme';
import 'swiper/css';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</ThemeProvider>
	)
};