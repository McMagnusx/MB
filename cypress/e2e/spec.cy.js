
describe.only("Search on Google", () => {
  const searchTerm = "best QA Engineering practices";
  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Should go to google.com and perform the search successfully", () => {
    cy.visit("https://www.google.com");
    cy.get('#APjFqb').type(searchTerm + "{enter}"); // Press the "Enter" key after typing the search term
    // Wait for the search results to load
    cy.get('div[id="rcnt"]').should("be.visible");
    // Check for the search input field to ensure the correct search term is typed
    cy.get('#APjFqb').should("have.value", searchTerm);
  });
});





