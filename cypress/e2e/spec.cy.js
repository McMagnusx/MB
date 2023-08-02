describe("Login to Facebook", () => {
  const username = "your_facebook_username"; // Replace with actual username
  const password = "your_facebook_password"; // Replace with actual password

  it("Should log in to Facebook successfully", () => {
    cy.visit("https://www.facebook.com");
    cy.get("#email").type(username);
    cy.get("#pass").type(password);
    cy.get("#loginbutton").click();
    cy.url().should("include", "facebook.com");
  });
});


describe("Make a Post on Facebook", () => {
  const postMessage = "I Kill Bugs!";

  it("Should make a post on Facebook successfully", () => {
    // Assume user is already logged in (You can use `beforeEach` to login before this test case)
    cy.get('[data-testid="status-attachment-mentions-input"]').type(postMessage);
    cy.get('[data-testid="react-composer-post-button"]').click();
    cy.contains("Post").should("be.disabled"); // To confirm that the post was successful
  });
});


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
    // Optional: You can also check for the search input field to ensure the correct search term is typed
    cy.get('#APjFqb').should("have.value", searchTerm);
  });
});





