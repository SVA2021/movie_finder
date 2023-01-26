import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../app/store";
import {Home} from "./Home";

describe('render Home', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('home')).toMatchSnapshot();
  });

})