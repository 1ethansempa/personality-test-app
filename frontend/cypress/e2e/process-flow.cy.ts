describe("process flow test", () => {
  it("visits the home page", () => {
    cy.visit("/");
  });

  it("clicks test button", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:4000/assessment/questions", {
      fixture: "questions.json",
    }).then(() => {
      cy.get('[data-cy="primary-button"]').eq(1).click();
    });

    cy.url().should("include", "/test");

    cy.wait(3000).get('[data-cy="card"]').should("be.visible");

    cy.get('[data-cy="question-option"]').eq(1).click();

    cy.get('[data-cy="primary-button"]').eq(2).click();

    cy.get('[data-cy="question-option"]').eq(0).click();

    cy.get('[data-cy="primary-button"]').eq(2).click();

    cy.get('[data-cy="question-option"]').eq(1).click();

    cy.intercept("POST", "http://localhost:4000/assessment/results", {
      fixture: "result.json",
    }).then(() => {
      cy.get('[data-cy="primary-button"]').eq(2).click();
    });

    cy.url().should("include", "/results");

    cy.get('[data-cy="small-quote-text"]').should("be.visible");
  });
});
