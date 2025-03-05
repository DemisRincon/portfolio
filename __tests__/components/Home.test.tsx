import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../app/page';
import '@testing-library/jest-dom';
import { getPage } from '../../app/actions';

jest.mock('../../app/actions', () => ({
	getPage: jest.fn(),
}));

jest.mock('../../components/hero', () => () => <div>Hero Component</div>);
jest.mock('../../components/about', () => () => <div>About Component</div>);
jest.mock('../../components/projects', () => () => (
	<div>Projects Component</div>
));
jest.mock('../../components/contact', () => () => <div>Contact Component</div>);
jest.mock('../../components/iconWall', () => () => (
	<div>IconWall Component</div>
));

describe('Home Page', () => {
	beforeEach(() => {
		(getPage as jest.Mock).mockResolvedValue([
			{ title: 'Hero Data' },
			{ title: 'About Data' },
			{ title: 'IconWall Data 1' },
			{ title: 'IconWall Data 2' },
			{ title: 'IconWall Data 3' },
			{ title: 'IconWall Data 4' },
			{ title: 'Projects Data' },
			{ title: 'Contact Data' },
		]);
	});

	it('renders the Home page with all sections', async () => {
		render(await Home());

		expect(screen.getByText('Hero Component')).toBeInTheDocument();
		expect(screen.getByText('About Component')).toBeInTheDocument();
		expect(screen.getAllByText('IconWall Component').length).toBe(4);
		expect(screen.getByText('Projects Component')).toBeInTheDocument();
		expect(screen.getByText('Contact Component')).toBeInTheDocument();
	});
});
