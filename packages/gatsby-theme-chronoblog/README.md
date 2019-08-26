# Chronoblog - Gatsby Theme

**WIP**
Gatsby theme for building blogs with MDX

```sh
npm i gatsby-theme-chronoblog
```

## TODO

Community

- write a normal readme
- develop a starter with examples and descriptions

CMS and hosting

- simple installation and use for CMS [contentful](https://www.contentful.com/)
- simple installation netlify.com

Feed

- `read more` text/button in post card
- hover animation for link in link type card
- content type `podcast` for, so, podcasts - with player and links-icons to podcasts platforms (spotify, google podcasts, etc)
- feed **scrollspy** for dates - years and months
- `note` - item type for feed, like post, but need only `date`. No link too ful page (like 'reade more'), no cover image (but can have images), no title (but this is md so can have #). All content in feed. Similar to twitter tweets.

Dates

- content-related dates/calendar

Components

- component `contentMap` for MDX, with all Posts and Links and Pages of the site (in url links form) - by tags or/and dates. Examples: https://ricostacruz.com/til/ (by tags), https://tomcritchlow.com/writing/ (by years).
- `<LinkCard>` component for MDX - work as link, but looks as card and have title, image and description. This is for some important and special links (books, big projects etc.)

Other

- comments for blog posts (disqus?)
- simple theme-ui change (@theme-ui/\* presets)
