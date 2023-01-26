import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../app/store";
import {Header} from "./Header";

describe('render Header', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('header')).toMatchSnapshot();
  });

})