import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {VideoList} from "./VideoList";

describe('render VideoList', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <VideoList />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('video-list')).toMatchSnapshot();
  });

  it('check empty text', () => {
    setUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})