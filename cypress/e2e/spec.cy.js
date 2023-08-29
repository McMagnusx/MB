describe("Search on Google", () => {
  const searchTerm = "JAGUN JAGUN";

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

describe.skip ("Facebook Tests", () => {
  const username = "your-facebook-username"; // Replace with your Facebook username
  const password = "your-facebook-password"; // Replace with your Facebook password
  const postContent = "I Kill Bugs!";

  beforeEach(() => {
    // Clear cookies and local storage before each test
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it("Should log in to Facebook successfully", () => {
    cy.visit("https://www.facebook.com");
    cy.get("#email").type(username);
    cy.get("#pass").type(password);
    cy.get('[data-testid="royal_login_button"]').click();
    cy.url().should("not.include", "login"); // Ensure that login is successful and user is redirected
  });

  it("Should make a post 'I Kill Bugs!'", () => {
    cy.visit("https://www.facebook.com");
    cy.get("#email").type(username);
    cy.get("#pass").type(password);
    cy.get('[data-testid="royal_login_button"]').click();
    cy.url().should("not.include", "login"); // Ensure that login is successful and user is redirected

    // Make a post "I Kill Bugs!"
    cy.get('[data-testid="status-attachment-mentions-input"]').type(postContent);
    cy.get('[data-testid="react-composer-post-button"]').click();
    cy.get('[data-testid="status-attachment-mentions-input"]').should("be.empty"); // Ensure that the input field is empty after posting
  });
});
