import {fireEvent, render, screen} from '@testing-library/react';
import {SmallCard} from './SmallCard';

const FakeCard = {
	"id": 325381,
	"nameRu": "fakeNameRu",
	"nameEn": "fakeNameEng",
	"year": "2000",
	"filmLength": "10:10",
	"rating": "fakeRating",
	"posterUrlPreview": "fakePosterUrlPreview",
}

describe('render SmallCard', () => {

	// const handleClicker = jest.fn();
	const setUp = () => render(<SmallCard item={FakeCard} />);

	it('snapshot test', () => {
		setUp();
		expect(screen.getByTestId('smallCard')).toMatchSnapshot();
	});
	it('find movie name RU', () => {
		setUp();
		expect(screen.getByText(/fakeNameRu/i)).toBeInTheDocument();
	})
	it('find movie name Eng', () => {
		setUp();
		expect(screen.getByText(/fakeNameEng/i)).toBeInTheDocument();
	})
	it('img uses correct src', () => {
		setUp();
		const image = screen.getByAltText('fakeNameRu');
		expect(image).toHaveAttribute('src', 'fakePosterUrlPreview');
	});
	it('find rating', () => {
		setUp();
		expect(screen.getByText(/fakeRating/i)).toBeInTheDocument();
	});
	it('find year', () => {
		setUp();
		expect(screen.getByText(/2000/i)).toBeInTheDocument();
	});
	it('find film length', () => {
		setUp();
		expect(screen.getByText(/10ч10м/i)).toBeInTheDocument();
	});
	// it('click on Card', () => {
	// 	setUp();
	// 	fireEvent.click(screen.getByTestId('smallCard'));
	// 	expect(handleClicker).toHaveBeenCalledTimes(1);
	// });

	screen.debug();
})