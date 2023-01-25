import {render, screen, fireEvent} from "@testing-library/react";
import {Banner, myPortfolioLink} from "./Banner";

describe('render Banner', () => {

  const onClick = jest.fn();
  const setUp = () => render(<Banner closeHandler={onClick} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('banner')).toMatchSnapshot();
  });

  it('check s', () => {
    setUp();
    expect(screen.getByText(/s/i)).toBeInTheDocument();
  });

  it('check v', () => {
    setUp();
    expect(screen.getByText(/v/i)).toBeInTheDocument();
  });

  it('check a', () => {
    setUp();
    expect(screen.getByText(/a/i)).toBeInTheDocument();
  });
  
  it('check link href', () => {
    setUp();
    expect(screen.getByRole('link')).toHaveAttribute('href', myPortfolioLink)
  });

  it('check button', () => {
    setUp();
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toBeCalled();
  });

})