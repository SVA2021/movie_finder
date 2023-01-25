import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {ImgList} from "./ImgList";

describe('render ImgList', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <ImgList />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('img-list')).toMatchSnapshot();
  });

})