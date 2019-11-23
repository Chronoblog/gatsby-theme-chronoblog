# Chronoblog - Gatsby Theme

[![npm](https://img.shields.io/npm/v/gatsby-theme-chronoblog?color=brightgreen)](https://www.npmjs.com/package/gatsby-theme-chronoblog) [![node](https://img.shields.io/node/v/gatsby-theme-chronoblog)](https://www.npmjs.com/package/gatsby-theme-chronoblog)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed253426-cae8-40fc-9647-28a8cd1f5a28/deploy-status)](https://app.netlify.com/sites/chronoblog-netlify-cms/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/89481a31-c0c3-46ac-bf12-1fa638f0cd82/deploy-status)](https://app.netlify.com/sites/chronoblog-minimal/deploys)

Chronoblog is a Gatsby js theme specifically designed to create a personal website.

The main idea of ​​Chronoblog is to allow you not only to write a personal blog, but also to keep a record of everything important that you have done.

I never liked the blog format so that, regardless of the platform (be it Medium or WordPress), they all expect that the content that I will create is text, and it is desirable that this be a long article. A blog consisting of long articles looks and works organically (on any platform). But a blog consisting of any other content (video, presentations, links to external resources, or even just short notes) - it feels and works "somehow wrong".

But what if we make a blog theme based on a feed? something like twitter or hackernews, but without restrictions, and in the form of a personal blog?

The Chronoblog feed allows you to post almost anything, since it allows you to post not only blog **posts**, but also **links** in the form of cards. And also **notes** - an extremely flexible format similar to something like tweets. And all this in one feed, sorted by date and organized using tags.

# Guide - How to start working with Chronoblog Gatsby Theme

This guide will show how to create a personal website using Gatsby Theme Chronoblog.

## Installation and Development

In this guide, we will set up our new site using this starter: [gatsby-starter-chronoblog](https://github.com/Ganevru/gatsby-starter-chronoblog)

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

## Folder structure

Here's how the Chronoblog Starter is organized:

```
chronoblog-site
  ├─ content // unique site content is located here
  │  ├─ links // content type - link cards
  │  ├─ notes // content type - note cards
  │  └─ posts // standard blog posts
  ├─ gatsby-config.js
  ├─ package.json
  ├─ src
  │  ├─ assets
  │  ├─ gatsby-plugin-theme-ui // style of the site
  │  │  └─ index.js
  │  ├─ gatsby-theme-chronoblog // chronoblog shadow
  │  │  ├─ post-footer.mdx // what comes after every blog post
  │  │  ├─ site-footer.mdx
  │  │  └─ site-header.mdx // site main menu
  │  └─ pages // specially defined pages of the site
  │     ├─ index.mdx // the main page of the site
  │     └─ projects.mdx
  └─ static
     └─ robots.txt
```

Below will be more explanation about various aspects of the site.

## Gatsby Config

**`gatsby-config.js`** located in the root of your site and looks like this:

```js
/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Starter',
    siteDescription: 'Starter for Gatsby Theme Chronoblog',
    siteImage: '/banner.png', // main image of the site for meta tags
    siteUrl: 'https://chronoblog.netlify.com/', // example - http://example.com
    pathPrefix: '/', // '/' - default, example - '/someprefix'
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Site Author', // for example - 'Ivan Ganev'
    twitterSite: '', // web site account on twitter for cards meta data, example - '@ganevru'
    twitterCreator: '' // creator account on twitter for cards meta data, example - '@ganevru'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: '↓ show more ↓',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItemsLimit: 50
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
```

This is the standard file for the gatsby starter, just replace the information with your own.

## Style settings

Chronoblog allows you to change many style settings of the site. You can change the primary and secondary colors, fonts, border-radius of most elements, etc. All this happens thanks to the [Theme-UI](https://theme-ui.com/) library.

Browse to the **`/src/gatsby-plugin-theme-ui/index.js`** file. This file already exists in the starter.

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

## Content

Chronoblog has three types of content: **posts**, **links**, and **notes**.

All of them are in the `content` folder. They are located in the appropriate folders. The names of folders and their structure are important for the operation of the Chronoblog!

### Content Types

#### Posts

Posts are regular blog posts.

A typical post looks like this:

```md
---
title: Full Blog Post Example
cover: ./image.jpg
date: 2019-11-05
description: All the usual blog post.
tags: ['post']
---

Some blog post text
```

Each post should have a `title` and `date`.

The `cover` should lead to a picture file, in this case the file is located in the same folder as the blog post itself.

The `description` will appear in the post card in the feed, and will also be used for post meta tags (for SEO). If there is no description, then the text of the beginning of the post itself will be used instead.

`tags` are needed for organization within the Chronoblog, they are displayed in the post itself and in the post card in the feed.

#### Links

Links in the feed aren’t very different from blog posts. But when clicked, the user will follow the link.

The basic idea of ​​links is that they work and feel "equivalent" to blog posts - the link also has a cover, title, tags, date, description, etc.

Links are needed for materials that you consider important to post in your feed, but for some reason you can’t post them in the form of posts. This can be your articles on other sites (which you do not have the right to host), interviews, your projects (say on the github), received certificates, completed courses, etc.

To prevent users of the site from confusing posts and links, links have additional distinctive elements - emoji (🔗) in front of the title, an outgoing link icon in the card itself. Also, links do not have a "read more" button like posts.

A typical link looks like this:

```md
---
title: 'Link to Chronoblog Theme repo'
cover: ./image.jpg
date: 2019-11-12
link: https://github.com/Ganevru/gatsby-theme-chronoblog
tags: ['link', 'project']
---

Link card is a card, when clicked, the user goes to the specified link.
```

Like a post, a link must have a `title` and a `date`, and also, of course, the link must have a `link`.

All other elements are the same as the post. Only in contrast to the post, the body of the link is fully displayed in the feed - because when you click, the user will follow the link, and not the "full version". So do not make the link body too large.

#### Notes

Notes is a type of content that is fully located in the feed. Cards of notes in themselves do not refer anywhere and do not lead anywhere.

At the same time, notes allow you to place almost anything in the feed. The starter shows different options for how you can use notes - post podcasts, YouTube videos, presentations, post links or, in fact, text notes.

A typical note:

```md
---
date: 2019-11-02
tags: ['note']
---

Note card - the type of content that is fully displayed in the feed of the site.
```

A note only needs a `date`.

### Adding Content

To add content locally, you need to create a folder in `content/posts/` (if you are creating a new **blog `post`**). Give this folder any name (`some-blog-post` for example), and create file `index.md` inside this folder.

The file `index.md` may be something like this:

```md
---
title: Some Blog Post Example
cover: ./image.jpg
date: 2019-11-05
tags: ['post']
---

Some blog post text
```

Put some image in the same folder (in `some-blog-post`). If its name matches the `cover` from the `index.md` file, then this image will become the post cover.

To create a new **`link`** you need to do the same thing, but in the folder `content/links/` (and do not forget that the link must have `link:`).

And to create a new **`note`**, yes, again the same thing, but in the folder `content/notes/`.

The type of content is determined by the folder in which it is located!

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
| [![Netlify Status](https://api.netlify.com/api/v1/badges/856e7fea-a790-4b10-b982-76cab60ce4df/deploy-status)](https://app.netlify.com/sites/chronoblog-master-minimal/deploys) | https://chronoblog-master-minimal.netlify.com |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/3bddc25b-758e-4215-a6ee-4f0bc5997b87/deploy-status)](https://app.netlify.com/sites/chronoblog-master-netlify-cms/deploys) | https://chronoblog-master-netlify-cms.netlify.com |
