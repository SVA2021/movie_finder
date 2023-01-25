import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {SimilarList} from "./SimilarList";

describe('render SimilarList', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <SimilarList />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('similar-list')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/Похожее/i)).toBeInTheDocument();
  });

})