import {render, screen} from "@testing-library/react";
import {TVideoItem} from "../../features/movieFinder/movieFinderTypes";
import {VideoItem} from "./VideoItem";

const fakeItem: TVideoItem = {
  url: 'fakeUrl',
  name: "fakeName",
  site: "YOUTUBE"
}

describe('render VideoItem', () => {

  const setUp = () => render(<VideoItem item={fakeItem} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('videoitem')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/fakeName/i)).toBeInTheDocument();
  });

  it('check link href', () => {
    setUp();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'fakeUrl')
  });

})