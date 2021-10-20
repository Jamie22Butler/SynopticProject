import { cleanup, render, screen } from '@testing-library/react'
import ChatBot from './ChatBot'

afterEach(() => {
    cleanup
})

test('Renders ChatBot', () => {
	render(<ChatBot />);
	const bot = screen.getByTestId('chat-bot');
	expect(bot).toBeInTheDocument();
});

test('Render toggle buttons', () => {
	render(<ChatBot/>);
	const toggle = screen.getAllByTestId('toggle-button');
	expect(toggle).toHaveLength(2)
});
