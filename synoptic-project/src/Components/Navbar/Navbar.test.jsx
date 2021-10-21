import NavBar from './NavBar';

import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

afterEach(() => {
	cleanup();
});

test('Renders NavBar', () => {
	render(<NavBar />, { wrapper: MemoryRouter });
	const navBar = screen.getByTestId('nav-bar');
	expect(navBar).toBeInTheDocument();
});

test('Renders all links', () => {
	render(<NavBar />, { wrapper: MemoryRouter });
	const links = screen.getAllByTestId('nav-bar-link');
	expect(links).toHaveLength(2);
});

test('Matches snapshot', () => {
	const tree = TestRenderer.create(
		<Router>
			<NavBar />
		</Router>
	).toJSON();
	expect(tree).toMatchSnapshot();
});
