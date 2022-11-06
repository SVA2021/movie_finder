import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import {store} from './app/store';

describe('render movie finder', () => {
	const setUp = () => render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	);
	it('find movie', () => {
		setUp();
		expect(screen.getByText(/movie/i)).toBeInTheDocument();
	});
	it('find finder', () => {
		setUp();
		expect(screen.getByText(/finder/i)).toBeInTheDocument();
	});
	screen.debug();
});