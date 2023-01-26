import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import {AccountForm} from "./AccountForm";

const mockLogin = jest.fn(({login, password}) => {
  return Promise.resolve({login, password});
});

describe('render AccountForm', () => {

  const setUp = () => render(<AccountForm accountSubmit={({login, password}) => mockLogin({login, password})} />);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('account-form')).toMatchSnapshot();
  });

  it('check form elements is rendered', () => {
    setUp();
    expect(screen.getByPlaceholderText(/логин/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/пароль/i)).toBeInTheDocument();
    expect(screen.getByText(/Войти/i)).toBeInTheDocument();
  });

  it('check form can input values', () => {
    setUp();
    fireEvent.change(screen.getByPlaceholderText(/логин/i), {target: {value: "login"}})
    expect(screen.getByPlaceholderText(/логин/i)).toHaveValue('login');
    fireEvent.change(screen.getByPlaceholderText(/пароль/i), {target: {value: "password"}})
    expect(screen.getByPlaceholderText(/пароль/i)).toHaveValue('password');
  });

  // it('check form can be submitted', async () => {
  //   setUp();

  //   fireEvent.input(screen.getByPlaceholderText(/логин/i), {target: {value: "login"}})
  //   fireEvent.input(screen.getByPlaceholderText(/пароль/i), {target: {value: "password"}})
  //   fireEvent.submit(screen.getByRole('button'))

  //   await waitFor(() => expect(screen.queryAllByRole("button")).toHaveLength(1));
  //   expect(mockLogin).toBeCalledWith("login", "password");
  // });
})