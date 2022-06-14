import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth='xl'>
				<Banner/>
				<Main/>
			</Container>
		</ThemeProvider>
	);
}

export default App;