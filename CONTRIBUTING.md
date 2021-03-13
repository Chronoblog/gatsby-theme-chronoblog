# How to Contribute

## Process

At the moment I am working to ensure that the development process here is consistent with [GitHub flow](https://guides.github.com/introduction/flow/)

## About used Technologies and Methods

Here to list the technologies and methods that are used in the project. **None of this needs to be known to use Chronoblog** (Read [Guide](#guide---how-to-start-working-with-chronoblog-gatsby-theme) and [Documentation](#documentation) for this), but it will help to understand how everything is organized here.

### Organization of this monorepository

This monorepo uses [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

- [packages](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages) folder. At the moment there is only [gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog) there, and all the main work on the project takes place in it. Perhaps in the future, additional packages will appear.

- [starters](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/starters) folder contains all the project starters.

- [examples](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/starters) folder contains examples of how Chronoblog can be used.

- [test-builds](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/test-builds) folder for test builds.

Such an organization allows you to check the work of any starter right during the work on the project. For example, by running `cd starters/chronoblog && npm run start` command, you can make changes to [gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/packages/gatsby-theme-chronoblog) and immediately look at how the "chronoblog starter" works with these changes (at http://localhost:8000).

### Tests and Publication

The github action scripts can be viewed here: [workflows](https://github.com/Chronoblog/gatsby-theme-chronoblog/tree/master/.github/workflows). Each time changes are added to the repo, tests are launched. This allows to check if everything is working correctly.

We can say that the master branch is a development branch since changes in the branch alone do not lead to the publication of the project. Therefore, there may be bugs and problems in the master branch.

When updating the project version, packages are sent to npm, and starters, using [publish-starters.yml](https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/.github/workflows/publish-starters.yml), update their individual repositories. Because of this, chronoblog starters have such strange commits (for example, https://github.com/Chronoblog/gatsby-starter-chronoblog).

### TypeScript and JSDoc for type annotation

If you looked at the `package.json` file in the root of the project, then you saw TypeScript and types for various libraries in the dependencies (`@types/node`, `@types/react`, etc.). But the project is written in `js`?

The fact is that JSDoc comments are used to declare types. Read more about this method in these articles:

- [Type Safe JavaScript with JSDoc](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76)
- [Type annotations in JavaScript files](https://ricostacruz.com/til/typescript-jsdoc)
- [TypeScript without TypeScript -- JSDoc superpowers](https://fettblog.eu/typescript-jsdoc-superpowers/)
