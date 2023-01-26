import {render, screen} from "@testing-library/react";
import {MovieDataTable} from "./MovieDataTable";

describe('render MovieDataTable', () => {

  const setUp = () => render(<MovieDataTable movie={null} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('movie-data-table')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/Время/i)).toBeInTheDocument();
    expect(screen.getByText(/Страны/i)).toBeInTheDocument();
    expect(screen.getByText(/Год/i)).toBeInTheDocument();
    expect(screen.getByText(/Жанр/i)).toBeInTheDocument();
  });

})