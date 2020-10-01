describe('Visitor can search Github registry of users', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users?q=Tom",
      response: "fixture:searchResgistryOfUsers.json",
    });
    cy.visit("/")

  })
;
it("visitor can see the search button", () => {
  cy.get('[data-cy="search"]').should("exist");
});

it("displays the user data", () => {
  cy.get('[data-cy="input"]').type('Tom')
  cy.get('[data-cy="search"]').click();
  cy.get('[data-cy="user-data"]').within(() => {
    cy.contains("Tom");
  });
})
})
