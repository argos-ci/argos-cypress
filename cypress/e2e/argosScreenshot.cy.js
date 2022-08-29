const screenshotsFolder = Cypress.browser.isHeaded
  ? `./cypress/screenshots/`
  : `./cypress/screenshots/${Cypress.spec.name}`;

describe("argosScreenshot", () => {
  before(() => {
    cy.visit("cypress/pages/index.html");
    cy.argosScreenshot();
  });

  describe("without name", () => {
    it("should wait for loader hiding", () => {
      cy.get("#loader", { timeout: 0 }).should("not.exist");
    });

    it("should hide hidden div", () => {
      cy.get("[data-test-hidden]", { timeout: 0 }).should("not.be.visible");
    });

    it("should take a screenshot with generic name", () => {
      cy.readFile(`${screenshotsFolder}/argosScreenshot before all hook.png`);
    });
  });

  describe("with name", () => {
    it("should take a named screenshot", () => {
      const screenshotName = "named-screenshot";
      cy.argosScreenshot(screenshotName);
      cy.readFile(`${screenshotsFolder}/${screenshotName}.png`);
    });
  });
});
