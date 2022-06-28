import { fireEvent, render, screen } from '@testing-library/react';
import { fakeSmallCard, filmDataShort } from '../../features/movieFinder/fakeData';
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
		expect(screen.getByText(/FakeNameRu/i)).toBeInTheDocument();
	})
	it('find movie name Eng', () => {
		setUp();
		expect(screen.getByText(/FakeNameEng/i)).toBeInTheDocument();
	})
	it('img uses correct src', () => {
		setUp();
		const image = screen.getByAltText('FakeNameEng');
		expect(image).toHaveAttribute('src', 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/301.jpg');
	});
	it('click on Card', () => {
		setUp();
		fireEvent.click(screen.getByTestId('smallCard'));
		expect(handleClicker).toHaveBeenCalledTimes(1);
	});

	screen.debug();
})