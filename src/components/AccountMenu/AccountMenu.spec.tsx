import {render, screen, fireEvent} from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "../../app/store";
import {AccountMenu} from "./AccountMenu";

describe('render AccountMenu', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <AccountMenu />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('account-menu')).toMatchSnapshot();
  });

  it('check button open menu', () => {
    setUp();
    fireEvent.click(screen.getByTestId('panel-account'))
    expect(screen.getByTestId('panel-account-details')).toBeInTheDocument();
  });

})