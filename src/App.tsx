import { CssBaseline, ThemeProvider } from '@mui/material';
import { Container } from '@mui/system';
import Header from './components/Header/Header';
import { theme } from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth='lg'>
				<Header />
			</Container>
		</ThemeProvider>
	);
}

export default App;