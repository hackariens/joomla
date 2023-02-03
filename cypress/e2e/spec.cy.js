describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://joomla.traefik.me', {failOnStatusCode: false});
    cy.screenshot('first-page');
  })
})