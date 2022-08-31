# Contributing

If you're reading this, you're awesome!
Thank you for helping us make this project great and for being a part of the Argos community. Here are a few guidelines that will help you along the way.

## Open an Issue

If you think you have found a bug or have a new feature idea, please start by making sure it hasn't already been [reported or fixed](https://github.com/argos-ci/argos-cypress/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aclosed).

Then, you can search through existing issues and PRs to see if someone has written one similar to yours.

Next, please create a new issue that briefly explains the problem and provides some background on the circumstances that triggered it and the steps to reproduce it.

Please don't group multiple topics into one issue.

## Submit a Pull Request

Argos CI is a community project, so pull requests are always welcome, but before working on a significant change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request.
It's always best to create two smaller PRs than one big one.

When adding new features or modifying existing code, please attempt to include tests to confirm the new behavior.

## Getting started

You should push your local changes to your forked GitHub repository and then open a pull request from your repo to the `argos-ci/argos-cypress` repository.

1. Fork the argos repository on Github
2. Clone your fork to your local machine: `git clone --depth 1 git@github.com:<your-login>/argos-cypress.git`
3. Create a branch: `git checkout -b my-topic-branch`
4. Make your changes
5. Run the tests: `npm run test`
6. Format and lint the code: `npm run format && npm run lint`
7. Push your branch to github: `git push --set-upstream origin my-topic-branch`
8. Visit github and make your pull request.

### Update local repository

If you have an existing local repository, please update it before you start to minimize the chance of merge conflicts.

```js
git remote add upstream git@github.com:argos-ci/argos.git
git checkout main
git pull upstream main
git checkout -b my-topic-branch
npm install
```

## Coding style

Please follow the coding style of the current code base. Argos uses eslint, so if possible, enable linting in your editor to get real-time feedback.
Linting can be run manually with `npm run lint`.

When you submit a pull request, the Continuous Integration testing rerun the linting, but hopefully, by then, your code is already clean!

## Roadmap

To get a sense of where argos is heading, or for ideas on where you could contribute, take a look at the opened issues.

## License

By contributing your code to the argos-ci/argos GitHub repository, you agree to license your contribution under this repository license.
