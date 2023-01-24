import {render, screen, } from "@testing-library/react";
import {AccountLabel} from "./AccountLabel";
import {Provider} from 'react-redux';
import {store} from "../../app/store";

describe('render AccountLabel', () => {

  const setUp = () => render(
    <Provider store={store}>
      <AccountLabel />
    </Provider>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByText(/гость/i)).toMatchSnapshot();
  });


})