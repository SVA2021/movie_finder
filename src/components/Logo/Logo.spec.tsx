import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('render logo', () => {

	const setUp = () => render(<Logo />);

	it('find movie text', () => {
		setUp();
		expect(screen.getByText(/movie/i)).toBeInTheDocument();
	})
	it('find finder text', () => {
		setUp();
		expect(screen.getByText(/finder/i)).toBeInTheDocument();
	})
	it('find svg icon', () => {
		setUp();
		expect(screen.getByTestId('LocalMoviesIcon')).toBeInTheDocument();
	})
	it('snapshot test', () => {
		setUp();
		expect(screen.getByTestId('logo')).toMatchSnapshot();
	})

	screen.debug();

})