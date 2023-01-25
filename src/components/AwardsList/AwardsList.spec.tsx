import {render, screen} from "@testing-library/react";
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {store} from "../../app/store";
import {AwardsList} from "./AwardsList";

describe('render AwardsList', () => {

  const setUp = () => render(
    <Provider store={store}>
      <BrowserRouter>
        <AwardsList />
      </BrowserRouter>
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('awards-list')).toMatchSnapshot();
  });

  it('check empty text', () => {
    setUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})