import {render, screen, } from "@testing-library/react";
import {EmptyDataBox} from "./EmptyDataBox";

describe('render EmptyDataBox', () => {

  const setUp = () => render(<EmptyDataBox />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('empty-data-box')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})