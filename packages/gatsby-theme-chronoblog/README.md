# Chronoblog - Gatsby Theme

[![npm](https://img.shields.io/npm/v/gatsby-theme-chronoblog?color=brightgreen)](https://www.npmjs.com/package/gatsby-theme-chronoblog) [![node](https://img.shields.io/node/v/gatsby-theme-chronoblog)](https://www.npmjs.com/package/gatsby-theme-chronoblog)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed253426-cae8-40fc-9647-28a8cd1f5a28/deploy-status)](https://app.netlify.com/sites/chronoblog-netlify-cms/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/89481a31-c0c3-46ac-bf12-1fa638f0cd82/deploy-status)](https://app.netlify.com/sites/chronoblog-minimal/deploys)

Chronoblog is a Gatsby js theme specifically designed to create a personal website.

The main idea of ​​Chronoblog is to allow you not only to write a personal blog, but also to keep a record of everything important that you have done.

I never liked the blog format so that, regardless of the platform (be it Medium or WordPress), they all expect that the content that I will create is text, and it is desirable that this be a long article. A blog consisting of long articles looks and works organically (on any platform). But a blog consisting of any other content (video, presentations, links to external resources, or even just short notes) - it feels and works "somehow wrong".

But what if we make a blog theme based on a feed? Something like twitter, but without restrictions, and in the form of a personal site?

This is the main idea of Chronoblog - to help create a personal website where any type of content will look and work organically.

# Guide - How to start working with Chronoblog Gatsby Theme

This guide will show how to create a personal website using Gatsby Theme Chronoblog.

## Installation and Development

If you have `gatsby-cli`:

```sh
gatsby new chronoblog-site https://github.com/Ganevru/gatsby-starter-chronoblog

cd chronoblog-site

npm start
```

Or using git clone:

```sh
git clone git@github.com:Ganevru/gatsby-starter-chronoblog.git chronoblog-site

cd chronoblog-site

npm i

npm start
```

Your site is now running at http://localhost:8000

You can start developing your site.

## Style

Chronoblog allows you to change many stylistic settings of the site. You can change the primary and secondary colors, fonts, border-radius of most elements, etc. All this happens thanks to the [Theme-UI](https://theme-ui.com/) library.

Browse to the **`/src/gatsby-plugin-theme-ui/index.js`** file.

This file looks like this:

```js
import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#000',
    background: '#fff',
    link: '#3d7e9a',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#dae1e3',
    modes: {
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#161b1d'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
```

In general, this file explains itself. The easiest way to understand what and how it works is simply to “play” with it. Try changing the primary and secondary colors, double the rounding of all elements, and so on.

# Status

## Starters status

If at least one starter is not working - something went wrong.

| Status | Repo | Link |
| --- | --- | --- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog | https://chronoblog.netlify.com |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/ed253426-cae8-40fc-9647-28a8cd1f5a28/deploy-status)](https://app.netlify.com/sites/chronoblog-netlify-cms/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog-netlify-cms | https://chronoblog-netlify-cms.netlify.com/ |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/89481a31-c0c3-46ac-bf12-1fa638f0cd82/deploy-status)](https://app.netlify.com/sites/chronoblog-minimal/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog-minimal | https://chronoblog-minimal.netlify.com/ |

## Status of development and test versions

All these versions work from master branch of this repository. It’s ok if they do not work.

| Status | Link |
| --- | --- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/e26ac6b2-92f3-4744-8384-c64b144a1f74/deploy-status)](https://app.netlify.com/sites/chronoblog-master/deploys) | https://chronoblog-master.netlify.com |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/d6c88fb7-14d5-495a-8bc4-f0994e728881/deploy-status)](https://app.netlify.com/sites/chronoblog-tests/deploys) | https://chronoblog-tests.netlify.com |
