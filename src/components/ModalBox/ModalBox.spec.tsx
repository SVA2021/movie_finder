import {render, screen, fireEvent} from "@testing-library/react";
import {ModalBox} from "./ModalBox";

describe('render ModalBox', () => {

  const onClick = jest.fn();
  const setUp = () => render(<ModalBox closeHandler={onClick} >children</ModalBox>);

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('modal-box')).toMatchSnapshot();
  });

  it('check text', () => {
    setUp();
    expect(screen.getByText(/children/i)).toBeInTheDocument();
  });

  it('check button', () => {
    setUp();
    fireEvent.click(screen.getByRole('button'))
    expect(onClick).toBeCalled();
  });

})