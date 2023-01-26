import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {SearchForm} from "./SearchForm";

describe('render SearchForm', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchForm initialFilters={null} />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('search-form')).toMatchSnapshot();
  });

})