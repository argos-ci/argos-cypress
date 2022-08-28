# @argos/cypress

[Cypress](https://cypress.io) command for [Argos](https://argos-ci.com) visual testing.

`cy.argosScreenshot` stabilize the UI before taking a screenshot.

## Installation

```sh
$ npm install --save-dev @argos/cypress
```

Add to your `cypress/support/index.js`

```javascript
// cypress/support/index.js
import "@argos/cypress";
```

## Usage

This is an example using the `cy.argosScreenshot` command.

```javascript
// cypress/e2e/homepage.cy.js
describe("Homepage", () => {
  it("should be stable", () => {
    cy.argosScreenshot("homepage");
  });
});
```

## Configuration

`cy.argosScreenshot([name][, options])`

- `name` - The snapshot name; must be unique to each snapshot; default value is test title.
- `options` - Send to [cy.screenshot command](https://docs.cypress.io/api/commands/screenshot)
