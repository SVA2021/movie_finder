import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {FactsList} from "./FactsList";

describe('render FactsList', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <FactsList />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('facts-list')).toMatchSnapshot();
  });

  it('check empty text', () => {
    setUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})