import waitForExpect from "wait-for-expect";

/**
 * Injected style to hide elements and fix unstable rendering.
 * @param {*} document
 */
function injectStyles(document) {
  const cssText = `
  /* Hide carets */
  * { caret-color: transparent !important; }

  /* Hide scrollbars */
  ::-webkit-scrollbar {
    display: none !important;
  }


  /* Generic hide */
  [data-test-no-radius] {
    border-radius: 0 !important;
  }

  /* Generic hide */
  [data-test-hidden] {
    color: transparent !important;
    font-family: monospace !important;
    opacity: 0 !important;
  }

  [data-test-hidden="no-display"] {
    display: none !important;
  }

  `;
  const css = document.createElement("style");
  css.type = "text/css";
  css.textContent = cssText;
  document.body.appendChild(css);
}

function isVisible(element) {
  return Boolean(
    element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
  );
}

/**
 * Ensure there is no loader in the page.
 * @function cy.ensureNoBusy
 */
Cypress.Commands.add("ensureNoBusy", () => {
  cy.document().then((document) => {
    const busy = [...document.querySelectorAll('[aria-busy="true"]')];
    return new Cypress.Promise((resolve, reject) =>
      waitForExpect(
        () => expect(busy.every((element) => !isVisible(element))).to.be.true
      )
        .then(resolve)
        .catch(reject)
    );
  });
});

/**
 * Take a screenshot for Argos.
 * @function cy.argosScreenshot
 * @param {string} name Screenshot name
 * @param {Object} options Cypress screenshot options
 */
Cypress.Commands.add("argosScreenshot", (name, options = {}) => {
  const screenshotName = name || cy.state("runnable").fullTitle();
  Cypress.log({ name: "argosScreenshot", displayName: "Argos Screenshot" });
  cy.ensureNoBusy();
  cy.document().then((doc) => injectStyles(doc));
  cy.document().its("fonts.status").should("equal", "loaded");
  cy.screenshot(screenshotName, { capture: "viewport", ...options });
});
