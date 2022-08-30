import "cypress-wait-until";

const GLOBAL_STYLES = `
  /* Hide carets */
  * { caret-color: transparent !important; }

  /* Hide scrollbars */
  ::-webkit-scrollbar {
    display: none !important;
  }

  /* Generic hide */
  [data-visual-test="transparent"] {
    color: transparent !important;
    font-family: monospace !important;
    opacity: 0 !important;
  }

  [data-visual-test="removed"] {
    display: none !important;
  }
`;

/**
 * Injected style to hide elements and fix unstable rendering.
 */
function injectStyles(document) {
  const css = document.createElement("style");
  css.type = "text/css";
  css.textContent = GLOBAL_STYLES;
  document.body.appendChild(css);
}

/**
 * Check if an element is visible.
 */
function isVisible(element) {
  return Boolean(
    element.offsetWidth ||
      element.offsetHeight ||
      element.getClientRects().length
  );
}

/**
 * Wait until there is no `[aria-busy="true"]` element on the page.
 */
function waitUntilNoBusy() {
  cy.waitUntil(() =>
    cy.document().then((document) => {
      const busy = Array.from(document.querySelectorAll('[aria-busy="true"]'));
      return busy.every((element) => !isVisible(element));
    })
  );
}

/**
 * Takes a screenshot for Argos.
 */
Cypress.Commands.add(
  "argosScreenshot",
  { prevSubject: ["optional", "element", "window", "document"] },
  (subject, name, options = {}) => {
    if (typeof name === "object" && name !== null) {
      options = name;
      name = null;
    }

    const screenshotName = `argos/${name ?? cy.state("runnable").fullTitle()}`;
    Cypress.log({
      name: "argosScreenshot",
      displayName: `Argos Screenshot`,
      message: screenshotName,
    });
    // Inject styles
    cy.document().then((doc) => injectStyles(doc));
    // Wait until there is no `[aria-busy="true"]` element on the page.
    waitUntilNoBusy();
    // Wait for fonts to be loaded
    cy.document().its("fonts.status").should("equal", "loaded");

    // Screenshot
    cy.wrap(subject).screenshot(screenshotName, {
      capture: "viewport",
      overwrite: true,
      blackout: ['[data-visual-test="blackout"]', ...(options.blackout ?? [])],
      ...options,
    });
  }
);
