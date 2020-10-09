describe("Signup Form Tests", function () {
  // Visit the page of the form
  beforeEach(() => {
    cy.visit("/");
  });

  it("Fill Out Form", function () {
    // Check the name field
    cy.get("[data-cy=name]").type("Richard Rodriguez").should("have.value", "Richard Rodriguez");

    // Check the email field
    cy.get("[data-cy=email]").type("rmjuarez12@gmail.com").should("have.value", "rmjuarez12@gmail.com");

    // Check the password field
    cy.get("[data-cy=password]").type("Xx1234xX").should("have.value", "Xx1234xX");

    // Check the terms field
    cy.get("[data-cy=terms]").click();

    // Check the terms field
    cy.get("[data-cy=submit]").click();
  });
});
