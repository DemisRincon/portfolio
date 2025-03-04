describe('Home', () => {
	it('It renders h1 title', () => {
		cy.visit('http://localhost:3000');

		cy.get('[data-testid="cypress-title"]')
			.should('exist')
			.should('have.text', 'Portfolio');
	});

	it('It renders nav links', () => {
		cy.visit('http://localhost:3000');

		cy.get('[data-testid="cypress-nav-links"]')
			.should('exist')
			.should('have.length', 4);
	});

	it('renders photo', () => {
		cy.visit('http://localhost:3000');

		cy.get('[data-testid="cypress-photo"]').should('exist');
	});
});
