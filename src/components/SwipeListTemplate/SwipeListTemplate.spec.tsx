import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {SwipeListTemplate} from "./SwipeListTemplate";

const FakeCard = {
  "id": 325381,
  "nameRu": "fakeNameRu",
  "nameEn": "fakeNameEng",
  "year": "2000",
  "filmLength": "10:10",
  "rating": "7.0",
  "posterUrlPreview": "fakePosterUrlPreview",
}

describe('render SwipeListTemplate', () => {

  const setUp = () => render(
    <BrowserRouter>
      <SwipeListTemplate data={[FakeCard]} />
    </BrowserRouter>
  );
  const emptySetUp = () => render(
    <BrowserRouter>
      <SwipeListTemplate data={[]} />
    </BrowserRouter>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('swipe-list-template')).toMatchSnapshot();
  });

  it('check text in card', () => {
    setUp();
    expect(screen.getByText(/fakeNameRu/i)).toBeInTheDocument();
  });

  it('check empty data placeholder', () => {
    emptySetUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})