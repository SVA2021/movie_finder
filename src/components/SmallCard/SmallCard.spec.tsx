import { fireEvent, render, screen } from '@testing-library/react';
import { fakeSmallCard } from '../../features/movieFinder/fakeData';
import SmallCard from './SmallCard';

describe('render SmallCard', () => {

	const handleClicker = jest.fn();
	const setUp = () => render(<SmallCard item={fakeSmallCard} handleClick={ handleClicker()} />);

	it('snapshot test', () => {
		setUp();
		expect(screen.getByTestId('smallCard')).toMatchSnapshot();
	})
	it('find movie name RU', () => {
		setUp();
		expect(screen.getByText(/Семь жизней/i)).toBeInTheDocument();
	})
	it('find movie name Eng', () => {
		setUp();
		expect(screen.getByText(/Seven Pounds/i)).toBeInTheDocument();
	})
	it('img uses correct src', () => {
		setUp();
		const image = screen.getByAltText('Семь жизней');
		expect(image).toHaveAttribute('src', 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/395787.jpg');
	});
	it('click on Card', () => {
		setUp();
		fireEvent.click(screen.getByTestId('smallCard'));
		expect(handleClicker).toHaveBeenCalledTimes(1);
	});

	screen.debug();
})