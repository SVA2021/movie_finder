import {render, screen, fireEvent} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import {MenuMain} from "./MenuMain";
import {Provider} from 'react-redux';
import {store} from "../../app/store";

describe('render MenuMain', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <MenuMain />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByRole('button')).toMatchSnapshot();
  });

  it('check button open menu', () => {
    setUp();
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByTestId('main-menu')).toBeInTheDocument();
  });

})