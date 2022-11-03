import { fireEvent, render, screen } from '@testing-library/react';
import {SmallCard} from './SmallCard';

const FakeCard = {
	"id": 325381,
	"nameRu": "Вверх",
	"nameEn": "Up",
	"year": "2009",
	"filmLength": "01:36",
	"countries": [
		{
			"country": "США"
		}
	],
	"genres": [
		{
			"genre": "драма"
		},
		{
			"genre": "приключения"
		},
		{
			"genre": "комедия"
		},
		{
			"genre": "мультфильм"
		},
		{
			"genre": "семейный"
		}
	],
	"rating": "8.0",
	"ratingVoteCount": 366532,
	"posterUrl": "https://kinopoiskapiunofficial.tech/images/posters/kp/325381.jpg",
	"posterUrlPreview": "https://kinopoiskapiunofficial.tech/images/posters/kp_small/325381.jpg",
	"ratingChange": null
}

describe('render SmallCard', () => {

	// const handleClicker = jest.fn();
	const setUp = () => render(<SmallCard item={FakeCard}  />);

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
	// it('click on Card', () => {
	// 	setUp();
	// 	fireEvent.click(screen.getByTestId('smallCard'));
	// 	expect(handleClicker).toHaveBeenCalledTimes(1);
	// });

	screen.debug();
})