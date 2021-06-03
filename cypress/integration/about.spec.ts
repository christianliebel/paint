context('About', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('clicking Help > About should open about dialog', () => {
    cy.get('paint-app')
      .find('paint-menu-bar')
      .find('ul > li:last') // Help
      .click();

    cy.get('paint-app')
      .find('paint-menu-bar')
      .find('ul > li.active')
      .find('paint-menu')
      .find('.menu-entry:last > span.opener') // About
      .click();

    cy.get('paint-app').find('paint-dialog-about').should('exist');
  });

  it('clicking the OK button within the about dialog should close it', () => {
    cy.get('paint-app')
      .find('paint-menu-bar')
      .find('ul > li:last') // Help
      .click();

    cy.get('paint-app')
      .find('paint-menu-bar')
      .find('ul > li.active')
      .find('paint-menu')
      .find('.menu-entry:last > span.opener') // About
      .click();

    cy.get('paint-app')
      .find('paint-dialog-about')
      .find('paint-window')
      .find('paint-button')
      .click();

    cy.get('paint-app').find('paint-dialog-about').should('not.exist');
  });
});
