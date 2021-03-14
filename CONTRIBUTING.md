# How to Contribute

Any type of contribution to the project is also welcome! I use the GitHub issues as a todo list, so if you want to help, read existing issues. Or, if you want to add something new, write new issues with your ideas, and we will discuss it.

## Contribution to the README.md

Contributions to the README are welcome, especially considering that English is not my native language.

However, remember that you need to edit this README: https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/packages/gatsby-theme-chronoblog/README.md - this one located in `packages/gatsby-theme-chronoblog/README.md` is "real".

## Process

At the moment I am working to ensure that the development process here is consistent with [GitHub flow](https://guides.github.com/introduction/flow/)

### Tests

Every time there is a new push to any branch, a `.github/workflows/tests.yml` will be launched. It will run tests and run builds in various environments to check if they build correctly.

### Publish

Publishing a new version is publishing a new version in npm and publishing new versions of starters (with a new version) in their repositories.

To do this, run the command:

```
npm run version:minor
```

(`minor` can be replaced with `patch` or `major`)

Lerna will update all packages by itself, add tags of new versions to the branch and push to the repo. More details on how it works here: [@lerna/version](https://github.com/lerna/lerna/tree/main/commands/version#readme)

If a tag appears in the `master` branch, this will run `.github/workflows/new-version.yml`. This workflow has already automated running tests, publishing to npm, and publishing starters to their repository.

### Organization of this monorepository

This monorepo uses [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

- [packages](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages) folder. At the moment there is only [gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog) there, and all the main work on the project takes place in it. Perhaps in the future, additional packages will appear.

### TypeScript and JSDoc for type annotation

If you looked at the `package.json` file in the root of the project, then you saw TypeScript and types for various libraries in the dependencies (`@types/node`, `@types/react`, etc.). But the project is written in `js`?

The fact is that JSDoc comments are used to declare types. Read more about this method in these articles:

- [Type Safe JavaScript with JSDoc](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76)
- [Type annotations in JavaScript files](https://ricostacruz.com/til/typescript-jsdoc)
- [TypeScript without TypeScript -- JSDoc superpowers](https://fettblog.eu/typescript-jsdoc-superpowers/)
