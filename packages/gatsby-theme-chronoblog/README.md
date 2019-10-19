# Chronoblog - Gatsby Theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys)

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

## TODO

Community

- move all todo to GitHub Issues
- write a normal readme
- `starters` should be more understandable and standardized
- A `step-by-step guide` on how to start the chronoblog and configure it "for yourself". In the `.md` file format inside the starter - so that it can be read both on the github and on the site.

Development environment

- [cypress](https://www.cypress.io/) for E2E tests ?

CMS and hosting

- [contentful](https://www.contentful.com/) (like [github.com/narative/gatsby-theme-novela](https://github.com/narative/gatsby-theme-novela))
- [prismic.io](prismic.io) (like [github.com/LekoArts/portfolio](https://github.com/LekoArts/portfolio))

Feed

- month separator
- global setting, the ability to turn separators on and off
- types of feed - type: "cards" (normal) and type: "compact" (feed with only dates, titles and tags)
- `search` should work across all content

Images

- Ability to set different behavior for **cover images**. Both for all content and for specific content. Leave the current behavior (with the blue background) as default.

Tags

- number of posts with this tag - inside the tag, and the order of tags depending on this
- ability to put `#` (or whatever else) before all tags

Content types

- `twitter` tweets in `notes` - [gatsby-plugin-twitter](https://www.npmjs.com/package/gatsby-plugin-twitter)
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
