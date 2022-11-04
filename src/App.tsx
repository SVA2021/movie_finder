import {CssBaseline, ThemeProvider} from '@mui/material';
import {Container} from '@mui/system';
import {Banner, Header, Main} from './components';
import {theme} from './theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header />
			<Container maxWidth='xl'>
				<Banner />
				<Main />
			</Container>
		</ThemeProvider>
	);
}

export default App;