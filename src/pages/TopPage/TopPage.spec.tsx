import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {store} from "../../app/store";
import {TopPage} from "./TopPage";

describe('render TopPage', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <TopPage />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('top')).toMatchSnapshot();
  });

})