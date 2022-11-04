import {render, screen} from '@testing-library/react';
import {StyledTextItem} from './Styled_TextItem';


describe('render styled-text-item', () => {

	const setUp = () => render(
		<StyledTextItem>Hello World</StyledTextItem>
	);

	it('snapshot test', () => {
		setUp();
		expect(screen.getByTestId('styled-text-item')).toMatchSnapshot();
	});

	it('find text test', () => {
		setUp();
		expect(screen.getByText(/hello world/i)).toBeInTheDocument();
	});

	it('not find text test', () => {
		setUp();
		expect(screen.queryByText(/another text/i)).toBeNull();
	});

	screen.debug();

})