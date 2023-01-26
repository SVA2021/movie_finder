import {render, screen} from "@testing-library/react";
import {Footer} from "./Footer";

describe('render Footer', () => {

  const setUp = () => render(<Footer />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('footer')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/SVA 2023/i)).toBeInTheDocument();
  });

  it('check links', () => {
    setUp();
    expect(screen.queryAllByRole('link')).toHaveLength(4);
  });
})