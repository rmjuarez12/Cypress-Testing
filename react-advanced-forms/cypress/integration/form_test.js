describe("Signup Form Tests", function () {
  // Visit the page of the form
  beforeEach(() => {
    cy.visit("/");
  });

  it("Fill Out Form", function () {
    // Check the name field
    cy.get("[data-cy=name]")
      .type("Richard Rodriguez")
      .should(($input) => {
        const val = $input.val();

        // Check to see if the value typed equals to the value of the field
        expect(val).to.match(/Richard Rodriguez/);

        // Check to see if the value typed does NOT contain numbers
        expect(val).to.not.match(/[0-9]/);

        // Check to see if the value of the field is at least 1 character long
        expect(val).to.have.length.of.at.least(1);
      });

    // Check the email field
    cy.get("[data-cy=email]")
      .type("rmjuarez12@gmail.com")
      .should(($input) => {
        const val = $input.val();

        // Check to see if the value typed equals to the value of the field
        expect(val).to.match(/rmjuarez12@gmail.com/);

        // Check to see if the value of the field is at least 1 character long
        expect(val).to.have.length.of.at.least(1);

        // Check if the email is an actual email by checking if it has an "@"
        expect(val).to.include("@");
      });

    // Check the password field
    cy.get("[data-cy=password]")
      .type("Xx1234xX!@")
      .should(($input) => {
        const val = $input.val();

        // Check to see if the value typed equals to the value of the field
        expect(val).to.match(/Xx1234xX!@/);

        // Check to see if the password uses special characters to make password stronger
        expect(val).to.match(/\W/);

        // Check to see if the value of the field is at least 1 character long
        expect(val).to.have.length.of.at.least(8);
      });

    // Check the terms field
    cy.get("[data-cy=terms]").click().should("be.checked");

    // Check the terms field
    cy.get("[data-cy=submit]").click();

    // Check if the form properly submitted and returned a value output
    cy.get("pre").should("exist");

    // Check if the form cleared
    cy.get(".signup-form")
      .children()
      .should(($input) => {
        const val = $input.val();

        // Check to see if the value of the field is at least 1 character long
        expect(val.length).to.be.lessThan(1);
      });
  });
});
