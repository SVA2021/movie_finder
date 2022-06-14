import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth='xl'>
				<Banner/>
			</Container>
		</ThemeProvider>
	);
}

export default App;