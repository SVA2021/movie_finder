import {CssBaseline, Skeleton, ThemeProvider} from '@mui/material';
import {Container} from '@mui/system';
import {useAppSelector} from './app/hooks';
import {Banner, Header, Main} from './components';
import {selectStatus} from './features/movieFinder/movieFinderSlice';
import {theme} from './theme';

export const App = () => {
	const SERVER_STATUS = useAppSelector(selectStatus);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth='xl'>
				{/* <Banner /> */}
				{
					SERVER_STATUS === 'loading'
						? <Skeleton />
						: <Main />
				}
			</Container>
		</ThemeProvider>
	);
};