import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {FullCard} from "./FullCard";

describe('render FullCard', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <FullCard />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('fullcard')).toMatchSnapshot();
  });

})