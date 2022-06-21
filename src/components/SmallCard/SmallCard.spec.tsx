import { fireEvent, render, screen } from '@testing-library/react';
import { filmDataShort } from '../../features/movieFinder/fakeData';
import SmallCard from './SmallCard';

// const filmDataShort = {
// 	filmId: 100,
// 	nameRu: 'FakeNameRu',
// 	nameEng: 'FakeNameEng',
// 	nameOriginal: 'OriginalFakeName',
// 	posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/301.jpg',
// 	posterUrlPreview: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/eed1de3a-5400-43b3-839e-22490389bf54/360',
// 	relationType: 'SIMILAR',
// }

describe('render SmallCard', () => {

	const handleClicker = jest.fn();
	const setUp = () => render(<SmallCard {...filmDataShort} handleClick={ handleClicker()} />);

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
		expect(image).toHaveAttribute('src', 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/eed1de3a-5400-43b3-839e-22490389bf54/360');
	});
	it('click on Card', () => {
		setUp();
		fireEvent.click(screen.getByTestId('smallCard'));
		expect(handleClicker).toHaveBeenCalledTimes(1);
	});

	screen.debug();
})