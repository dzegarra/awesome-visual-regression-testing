/// <reference types="cypress" />
describe("create dobble game", () => {
  
  it("13 emojis are preselected", async () => {
    cy.visit("http://localhost:5173");

    cy.get("textarea").invoke('val').should('have.length', 13);
  });
  
  it("send to Dobble page after confirm emojis", () => {
    cy.visit("http://localhost:5173");
    
    cy.contains("button", "See result").click();

    cy.contains("Number of images").should("be.visible");
  });

  it("user can choose its own emojis", () => {
    cy.visit("http://localhost:5173");

    const emojis = "abcdefghijklm";

    cy.get("textarea").clear();

    cy.get("textarea").type(emojis);

    cy.get("textarea").invoke('val').should('have.length', 13);

    cy.contains("button", "See result").click();

    cy.matchImageSnapshot();
  })
});
