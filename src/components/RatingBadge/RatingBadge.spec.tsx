import {render, screen} from "@testing-library/react";
import {RatingBadge} from "./RatingBadge";

describe('render RatingBadge', () => {

  const setUp = () => render(<RatingBadge rating={7.0} position={"left"} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('rating-badge')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/7/i)).toBeInTheDocument();
  });

})