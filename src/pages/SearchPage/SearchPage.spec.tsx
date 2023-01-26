import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../app/store";
import {SearchPage} from "./SearchPage";

describe('render SearchPage', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('search')).toMatchSnapshot();
  });

})