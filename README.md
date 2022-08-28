# @argos/cypress

[Cypress](https://cypress.io) commands and utilities for [Argos](https://argos-ci.com) visual testing.

## Installation

```sh
$ npm install --save-dev @argos/cypress
```

And add this line to your `cypress/support/index.js` file.

```javascript
import "@argos/cypress";
```

## Usage

`cy.argosScreenshot` - command stabilize the UI before taking a screenshot.

_How to take a screenshot with `cy.argosScreenshot` command_

```javascript
describe("Homepage", () => {
  it("should be stable", () => {
    // Screenshot a full page
    cy.argosScreenshot("home");

    // Screenshot a component
    cy.get("main div.breadcrumb").argosScreenshot("home-breadcrumb");
  });
});
```

### Configuration

`cy.argosScreenshot([name][, options])`

- `name` - The screenshot name; must be unique; default value to test title
- `options` - Send to [cy.screenshot command options](https://docs.cypress.io/api/commands/screenshot)

## Helper props

The helpers props can be used to improve screenshots stability.

- `data-test-no-radius` - remove border radius
- `data-test-hidden` - hide from screenshot (opacity: 0)
- `data-test-hidden="no-display"` - remove from screenshot (display: none)

_How to use an helper to hide a div from a screenshot_

```html
<div id="clock" data-test-hidden>
  <!-- the clock code -->
</div>
```
