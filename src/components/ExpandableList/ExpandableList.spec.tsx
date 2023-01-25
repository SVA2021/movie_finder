import {render, screen, fireEvent} from "@testing-library/react";
import {ExpandableList} from "./ExpandableList";
import {BrowserRouter} from 'react-router-dom';

const FakeCard = {
  "id": 325381,
  "nameRu": "fakeNameRu",
  "nameEn": "fakeNameEng",
  "year": "2000",
  "filmLength": "10:10",
  "rating": "7.0",
  "posterUrlPreview": "fakePosterUrlPreview",
}

describe('render ExpandableList', () => {

  const onClick = jest.fn();

  const setUp = () => render(
    <BrowserRouter>
      <ExpandableList
        title={"fakeTitle"}
        data={[FakeCard]}
        page={1}
        totalPages={3}
        addPage={onClick}
      />
    </BrowserRouter>
  );

  const disabledButtonSetUp = () => render(
    <BrowserRouter>
      <ExpandableList
        title={""}
        data={[FakeCard]}
        page={1}
        totalPages={1}
        addPage={onClick}
      />
    </BrowserRouter>
  );

  const emptySetUp = () => render(
    <BrowserRouter>
      <ExpandableList
        title={""}
        data={[]}
        page={0}
        totalPages={0}
        addPage={onClick}
      />
    </BrowserRouter>
  );

  it('snapshot test', () => {
    setUp();
    expect(screen.getByTestId('expandable-list')).toMatchSnapshot();
  });

  it('check title', () => {
    setUp();
    expect(screen.getByText(/fakeTitle/i)).toBeInTheDocument();
  });

  it('check button', () => {
    setUp();
    fireEvent.click(screen.getByText('Еще'))
    expect(onClick).toBeCalled();
  });

  it('check button is disabled', () => {
    disabledButtonSetUp();
    expect(screen.getByText('Еще')).toBeDisabled();
  });

  it('check empty data placeholder', () => {
    emptySetUp();
    expect(screen.getByText(/нет данных/i)).toBeInTheDocument();
  });

})