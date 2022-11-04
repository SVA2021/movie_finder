import { fireEvent, render, screen } from '@testing-library/react';
import {StyledButton} from './Styled_Button';

describe('render logo', () => {

	const handleClicker = jest.fn();

	const setUp = () => render(
		<StyledButton variant="contained" aria-label="hello button" size='large' onClick={handleClicker}>Hello World</StyledButton>
	);

	it('snapshot test', () => {
		setUp();
		expect(screen.getByRole('button')).toMatchSnapshot();
	});

	it('find button in document by role', () => {
		setUp();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('not find button by text', () => {
		setUp();
		expect(screen.queryByText(/another/i)).toBeNull();
	});

	it('find button by text', () => {
		setUp();
		expect(screen.getByText(/hello/i)).toBeInTheDocument();
	});

	it('click button', () => {
		setUp();
		fireEvent.click(screen.getByRole('button'));
		expect(handleClicker).toHaveBeenCalledTimes(1);
	});

	screen.debug();

})