# Chronoblog - Gatsby Theme

**WIP**

**⚠️ This theme is very unstable ⚠️**

The theme for gatsbyjs designed specifically for creating a personal site. The main idea of ​​Chronoblog is to allow you not only to write a personal blog, but also to keep a record of everything important that you have done.

I never liked that most blog systems were created exclusively with the expectation of long articles, and any other content always looked foreign in them, whether it was links to other sites, videos, podcasts, or even just short notes. On most blog systems, all this does not look organic.

But what if we make a blog theme based on a feed? Something like Twitter, but without restrictions, and in the form of a personal site?

In the feed, almost anything looks organic - links to your articles on any site, videos of your lectures, your projects, completed courses, interviews, podcasts in which you participated - all this can be placed in the Chronoblog feed and structured using tags.

At the same time, this is still a blog, Chronoblog can be used as a theme for creating a personal blog.

```sh
npm i gatsby-theme-chronoblog
```

## List of Starters

The standard way to start using Chronoblog: [Gatsby Starter Chronoblog](https://github.com/Ganevru/gatsby-starter-chronoblog)

Minimum possible starter for Chronoblog Gatsby Theme:
[Gatsby Starter Chronoblog Minimal](https://github.com/Ganevru/gatsby-starter-chronoblog-minimal)

## Contribute

To install a new package for gatsby-theme-chronoblog:

```sh
yarn workspace gatsby-theme-chronoblog add [INSTALLABLE PACKAGE]
```

To start chronoblog starter:

```sh
yarn start:chronoblog
```

## TODO

Community

- move all todo to GitHub Issues
- write a normal readme
- develop a starter with examples and descriptions
- A `step-by-step guide` on how to start the chronoblog and configure it "for yourself". In the `.md` file format inside the starter - so that it can be read both on the github and on the site.

Development environment

- Automate NPM publish with GitHub Actions: https://medium.com/faun/automate-your-npm-publish-with-github-actions-dfe8059645dd ?
- GitHub Actions: start github builds on commit
- [cypress](https://www.cypress.io/) for E2E tests ?
- `eslint` and `prettier` for Starters

CMS and hosting

- create starter for netlify-cms, similar to ordinary Chronoblog starter, but with ready to go [netlifycms](https://www.netlifycms.org/)
- starter for [contentful](https://www.contentful.com/) ?
- starter for [sanity](https://www.sanity.io/) ?

Feed

- month separator
- global setting, the ability to turn separators on and off
- types of feed - type: "cards" (normal) and type: "compact" (feed with only dates, titles and tags)

Images

- Ability to set different behavior for **cover images**. Both for all content and for specific content. Leave the current behavior (with the blue background) as default.

Tags

- number of posts with this tag - inside the tag, and the order of tags depending on this
- ability to put `#` (or whatever else) before all tags

Content types

- `twitter` tweets in `notes`
- content type `podcast` for, so, podcasts - with player and links-icons to podcasts platforms (spotify, google podcasts, etc) ?
- different paths to content. Currently, `notes` all paths begin with `notes` - like `example.com/notes/some-note`, while `links` and `posts` do not have special paths. Make the user decide the path for each type of content. Save the current version as default.

Dates

- content-related dates/calendar
- feed **scrollspy** for dates - years and months

Other

- comments for blog posts (disqus?) ?
- RSS Feed
- social media sharing
- code in mdx

Bugs

- Firefox on Windows - search field is not displayed correctly
