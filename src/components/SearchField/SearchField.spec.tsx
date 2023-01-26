import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {SearchField} from "./SearchField";

describe('render SearchField', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchField />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('search-field')).toMatchSnapshot();
  });

})