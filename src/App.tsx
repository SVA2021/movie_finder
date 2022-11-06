import {CssBaseline, ThemeProvider} from '@mui/material';
import {Header, Main} from './layout';
import {theme} from './theme';

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Main />
		</ThemeProvider>
	);
};