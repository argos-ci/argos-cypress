declare namespace Cypress {
  interface Chainable<Subject> {
    argosScreenshot: (name: string, options: any) => Chainable<any>
  }
}