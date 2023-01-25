import {fireEvent, render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import {store} from "../../app/store";
import {SearchMenuMobile} from "./SearchMenuMobile";

describe('render SearchMenuMobile', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchMenuMobile />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('search-menu-mobile')).toMatchSnapshot();
  });

  it('check button open menu', () => {
    setUp();
    fireEvent.click(screen.getByTestId('search-menu-mobile-btn'))
    expect(screen.getByTestId('search-menu-mobile-content')).toBeInTheDocument();
  });

})