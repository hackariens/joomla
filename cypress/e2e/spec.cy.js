describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://joomla.traefik.me');
    cy.screenshot('first-page');
  })
})