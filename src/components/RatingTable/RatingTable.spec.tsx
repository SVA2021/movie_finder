import {render, screen} from "@testing-library/react";
import {RatingTable} from "./RatingTable";

describe('render RatingTable', () => {

  const setUp = () => render(<RatingTable movie={null} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('rating-table')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/Kinopoisk/i)).toBeInTheDocument();
    expect(screen.getByText(/Imdb/i)).toBeInTheDocument();
    expect(screen.getByText(/Await/i)).toBeInTheDocument();
    expect(screen.getByText(/RfCritics/i)).toBeInTheDocument();
    expect(screen.getByText(/FilmCritics/i)).toBeInTheDocument();
    expect(screen.getByText(/GoodReview/i)).toBeInTheDocument();
    expect(screen.getByText(/Количество рецензий/i)).toBeInTheDocument();
  });

})