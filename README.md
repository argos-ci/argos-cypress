# @argos-ci/cypress

[Cypress](https://cypress.io) commands and utilities for [Argos](https://argos-ci.com) visual testing.

[![npm version](https://img.shields.io/npm/v/@argos-ci/cypress.svg)](https://www.npmjs.com/package/@argos-ci/cypress)
[![npm dm](https://img.shields.io/npm/dm/@argos-ci/cypress.svg)](https://www.npmjs.com/package/@argos-ci/cypress)
[![npm dt](https://img.shields.io/npm/dt/@argos-ci/cypress.svg)](https://www.npmjs.com/package/@argos-ci/cypress)

## Installation

```sh
npm install --save-dev @argos-ci/cypress
```

And add this line to your `cypress/support/index.js` file.

```js
import "@argos-ci/cypress/support";
```

## Usage

`cy.argosScreenshot` command stabilizes the UI and takes a screenshot.

_How to take a screenshot with `cy.argosScreenshot` command_

```js
describe("Homepage", () => {
  it("should be stable", () => {
    // Screenshot a full page
    cy.argosScreenshot("home");

    // Screenshot a component
    cy.get("main div.breadcrumb").argosScreenshot("home-breadcrumb");
  });
});
```

## API

### cy.argosScreenshot([name][, options])

- `name` - The screenshot name; must be unique; default value to test title
- `options` - See [cy.screenshot command options](https://docs.cypress.io/api/commands/screenshot)

## Helper attributes

The `data-visual-test` attributes allow you to control how elements behave in the Argos screenshot.

It is often used to hide changing element like dates.

- `[data-visual-test="transparent"]` - Make the element transparent (`opacity: 0`)
- `[data-visual-test="removed"]` - Remove the element (`display: none`)
- `[data-visual-test="blackout"]` - Blacked out the element

_How to use an helper to hide a div from a screenshot_

```html
<div id="clock" data-visual-test="transparent">
  <!-- the clock code -->
</div>
```
