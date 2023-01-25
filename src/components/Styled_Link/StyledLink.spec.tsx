import {render, screen} from "@testing-library/react";
import {StyledLink} from "./StyledLink";

describe('render StyledLink', () => {

  const setUp = () => render(<StyledLink href={'fakehref'} title={"fakeTitle"} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('styled-link')).toMatchSnapshot();
  });

  it('check title', () => {
    setUp();
    expect(screen.getByText(/fakeTitle/i)).toBeInTheDocument();
  });

  it('check link href', () => {
    setUp();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'fakehref')
  });

})