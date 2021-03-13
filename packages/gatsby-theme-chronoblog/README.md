<br />
<p align="center">
<a href="https://chronoblog.now.sh" target="_blank">
<img src="https://github.com/Chronoblog/gatsby-theme-chronoblog/raw/master/assets/banner-small-2.png" alt="Chronoblog - Gatsby Theme" />
</a>
</p>

<h1 align="center">
Chronoblog - Gatsby Theme
</h1>

[![npm](https://img.shields.io/npm/v/gatsby-theme-chronoblog?color=brightgreen)](https://www.npmjs.com/package/gatsby-theme-chronoblog) [![node](https://img.shields.io/node/v/gatsby-theme-chronoblog)](https://www.npmjs.com/package/gatsby-theme-chronoblog) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md) ![](https://github.com/Chronoblog/gatsby-theme-chronoblog/workflows/tests/badge.svg)

Chronoblog is a [Gatsby js](https://github.com/gatsbyjs/gatsby) theme specifically designed to create a personal website.

The main idea of ​​Chronoblog is to allow you not only to write a personal blog but also to keep a record of everything important that you have done.

I never liked the blog format so that, regardless of the platform (be it Medium or WordPress), they all expect that the content that I will create is text, and this should be a long article. A blog consisting of long articles looks and works organically (on any platform). But a blog consisting of any other content (video, presentations, links to articles on other sites, or even just short notes) - it feels and works "somehow wrong".

Many people solve this problem like this - create separate pages on their website for a blog, for talks, for podcasts, for a portfolio, etc. But it is difficult to maintain and update.

But what if we make a blog theme based on a **feed**? Something like twitter or hackernews or reddit, but without restrictions, and in the form of a personal blog?

Chronoblog is a theme that allows you to do just that - create a more universal personal website.

> Despite the fact that versions start with "0.", I want to make the Chronoblog API as stable as possible.

<h2 align="center">
Demo and Starters
</h2>

<br />

####

<a target="_blank" href="https://chronoblog.now.sh"> <img align="left" src="https://github.com/Chronoblog/gatsby-theme-chronoblog/raw/master/assets/st-img-chronoblog.png" alt="Chronoblog - Gatsby Theme" style="max-width:100%;"> </a>

### Gatsby Starter Chronoblog

This starter is the standard way to start a Chronoblog Gatsby Theme website.

**Demo: [chronoblog.now.sh](https://chronoblog.now.sh)**  
Repo: [github.com/Chronoblog/gatsby-starter-chronoblog](https://github.com/Chronoblog/gatsby-starter-chronoblog)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Chronoblog/gatsby-starter-chronoblog) [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/Chronoblog/gatsby-starter-chronoblog)

<br />
<br />
<br />
<br />

####

<a target="_blank" href="https://chronoblog-profile.now.sh"> <img align="left" src="https://github.com/Chronoblog/gatsby-theme-chronoblog/raw/master/assets/st-img-profile.png" alt="Chronoblog - Gatsby Theme" style="max-width:100%;"> </a>

### Gatsby Starter Chronoblog Profile

This starter will help you launch a personal website with a simple text feed on the main page.

**Demo: [chronoblog-profile.now.sh](https://chronoblog-profile.now.sh)**  
Repo: [github.com/Chronoblog/gatsby-starter-chronoblog-profile](https://github.com/Chronoblog/gatsby-starter-chronoblog-profile)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Chronoblog/gatsby-starter-chronoblog-profile) [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/Chronoblog/gatsby-starter-chronoblog-profile)

<br />
<br />
<br />
<br />

####

<a target="_blank" href="https://chronoblog-hacker.now.sh"> <img align="left" src="https://github.com/Chronoblog/gatsby-theme-chronoblog/raw/master/assets/st-img-hacker.png" alt="Chronoblog - Gatsby Theme" style="max-width:100%"> </a>

### Gatsby Starter Chronoblog Hacker

A dark (but with ability to switch to light) starter that uses the [Source Code Pro](https://github.com/adobe-fonts/source-code-pro) font and minimalistic UI (without emoji, as by default in Chronoblog Theme).

**Demo: [chronoblog-hacker.now.sh](https://chronoblog-hacker.now.sh)**  
Repo: [github.com/Chronoblog/gatsby-starter-chronoblog-hacker](https://github.com/Chronoblog/gatsby-starter-chronoblog-hacker)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Chronoblog/gatsby-starter-chronoblog-hacker) [![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/Chronoblog/gatsby-starter-chronoblog-hacker)

<br />
<br />

####

### Examples

Examples are the same [standard starter](https://github.com/Chronoblog/gatsby-starter-chronoblog), but with some additional features. You can use the example to start your site or see how this feature was added.

- Chronoblog with Netlify CMS | [Repo](https://github.com/Chronoblog/gatsby-starter-chronoblog-netlify-cms) | [Demo](https://chronoblog-netlify-cms.now.sh/)

<br />

#### Use one of the starters as the basis for your unique site

To make your website look unique, you first need to work with the file **`src/gatsby-plugin-theme-ui/index.js`** with which you can control the style of the entire site. Basically, starters look different because of the different settings of this file. More about it here: [Style settings](#style-settings).

Also, all starters have a different main page, **`src/pages/index.mdx`** and content. Read about all this below in the guide.

<br />

## Table of Contents

- [Guide - How to start working with Chronoblog Gatsby Theme](#guide---how-to-start-working-with-chronoblog-gatsby-theme)
  - [Installation and Development](#installation-and-development)
  - [Folder structure](#folder-structure)
  - [Gatsby Config](#gatsby-config)
    - [Site Metadata](#site-metadata)
      - [favicon](#favicon)
    - [Global settings](#global-settings)
    - [Plugins](#plugins)
  - [Style settings](#style-settings)
  - [Content](#content)
    - [Content Types](#content-types)
      - [Posts](#posts)
      - [Links](#links)
      - [Notes](#notes)
    - [Adding Content](#adding-content)
    - [Additional options available to content](#additional-options-available-to-content)
    - [frontmatter-placeholder](#frontmatter-placeholder)
  - [Permanent parts of the site](#permanent-parts-of-the-site)
    - [site-header](#site-header)
    - [site-footer](#site-footer)
    - [post-footer](#post-footer)
      - [Get post data in post footer](#get-post-data-in-post-footer)
  - [Pages](#pages)
    - [index.mdx - homepage of your site](#indexmdx---homepage-of-your-site)
- [Documentation](#documentation)
  - [Feed](#feed)
    - [FeedItems component](#feeditems-component)
    - [Tags component](#tags-component)
    - [FeedSearch component](#feedsearch-component)
  - [SocialLinks component](#sociallinks-component)
  - [AuthorBanner component](#authorbanner-component)
  - [LightDarkSwitchButton component](#lightdarkswitchbutton-component)
  - [Content Cover](#content-cover)
  - [Font Awesome Icons](#font-awesome-icons)
  - [SEO and metadata](#seo-and-metadata)
    - [Metadata generation](#metadata-generation)
    - [Metadata Verification Tools](#metadata-verification-tools)
    - [SEO component in `.mdx`](#seo-component-in-mdx)
  - [Prism Code Highlight](#prism-code-highlight)
    - [Adding support for additional programming languages](#adding-support-for-additional-programming-languages)
  - [Shadowing in Chronoblog Gatsby Theme](#shadowing-in-chronoblog-gatsby-theme)
    - [Components that can and should be shadowed](#components-that-can-and-should-be-shadowed)
- [Feedback](#feedback)
- [Credits](#credits)
  - [Art](#art)

<br />

# Guide - How to start working with Chronoblog Gatsby Theme

This guide will show how to create a personal website using Gatsby Theme Chronoblog.

To create a website using the Chronoblog theme, you do not need to be an expert in using Gatsbyjs. However, it’s still recommended that you complete the basic tutorial: [Gatsby.js Tutorials](https://www.gatsbyjs.org/tutorial/)

## Installation and Development

In this guide, we will set up our new site using this starter: [gatsby-starter-chronoblog](https://github.com/Chronoblog/gatsby-starter-chronoblog)

If you have `gatsby-cli`:

```sh
gatsby new chronoblog-site https://github.com/Chronoblog/gatsby-starter-chronoblog

cd chronoblog-site

gatsby develop
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

> If you want to use some other starter for Chronoblog, for example, a [Profile Starter](https://github.com/Chronoblog/gatsby-starter-chronoblog-profile), just install it according to the instructions from its [readme](https://github.com/Chronoblog/gatsby-starter-chronoblog-profile), or just change the name during installation to:
>
> `gatsby new chronoblog-site https://github.com/Chronoblog/gatsby-starter-chronoblog-profile`
>
> or, if using git clone:  
> `git clone git@github.com:Ganevru/gatsby-starter-chronoblog-profile.git chronoblog-site`.

## Folder structure

Here's how the Chronoblog Starter is organized:

```
chronoblog-site
  ├─ content // unique site content is located here
  │  ├─ links // content type - link cards
  │  ├─ notes // content type - note cards
  │  └─ posts // content type - blog posts
  ├─ gatsby-config.js
  ├─ package.json
  ├─ src
  │  ├─ assets
  │  ├─ gatsby-plugin-theme-ui // style of the site
  │  │  └─ index.js
  │  ├─ gatsby-theme-chronoblog // chronoblog shadow
  │  │  ├─ post-footer.mdx // what comes after every blog post
  │  │  ├─ site-footer.mdx // site footer
  │  │  └─ site-header.mdx // where is the main menu of the site
  │  └─ pages // pages of the site
  │     ├─ index.mdx // the main page of the site
  │     └─ projects.mdx // optional site page
  └─ static
     └─ robots.txt
```

Below will be more explanation about various aspects of the site.

## Gatsby Config

**`gatsby-config.js`** located in the root of your site and looks like this:

```js
module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Starter',
    siteDescription: 'Starter for Gatsby Theme Chronoblog',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://chronoblog.now.sh/',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Site Author', // for example - 'Ivan Ganev'
    authorDescription: 'short author description', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `envelope`,
        url: `mailto:mymail@mail.com`,
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/ganevru`,
      },
      {
        icon: `github`,
        url: `https://github.com/Chronoblog/gatsby-theme-chronoblog`,
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags',
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
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
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X',
      },
    },
  ],
};
```

This is the standard file for the gatsby starter.

### Site Metadata

In **`siteMetadata`**, replace information about:

**`siteTitle`** - The main name of your site, if this is your personal site, you can simply write your name.

**`siteDescription`** - description of the website.

**`siteImage`** - image for metadata. Default: `static/banner.png` - you can simply replace this image with your own.

**`siteUrl`** - a domain where the site will be located. Example: https://chronoblog.now.sh.

**`author`** - the author of the site. For information at the end of each blog post, as well as for site metadata. Just write your name.

**`authorDescription`** - short description of the author. For example, "web developer", "designer", "front-end engineer" and so on.

**`avatar`** - author avatar. The file is located here: `static/avatar.jpg`. Replace this file with yours. It is recommended to use image with a resolution of 1:1 (the size of the default picture - 300x300).

**`twitterSite`** - twitter account of this site. Needed for twitter metadata.

**`twitterCreator`** - same as `twitterSite`, but for the author.

**`social`** - your social networks. List the links to your social networks in the format presented. All of them will be automatically used in the [SocialLinks component](#sociallinks-component) (in this starter this is the main menu, footer and the author banner).

- **`url`** - link to your social network profile. In general, it can be a link anywhere.
- **`icon`** - name of the icon of this social network. Icons use brand icons from [fontawesome.com/icons?d=gallery&s=brands](https://fontawesome.com/icons?d=gallery&s=brands) - most likely, there are icons for any site on which you have a profile. Additionally you can use icons `at` and `envelope` (a good option if you want to place a link to your email) and `phone`.

#### favicon

Thanks to the plugin [gatsby-plugin-manifest](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-manifest), you can use one image as an icon (including favicon) for all devices. Just replace `src/assets/favicon.png` image with your own. It is better to use the size of `512x512`.

### Global settings

In `options` for `gatsby-theme-chronoblog` you can find various global settings.

**`uiText`** - Here you can replace the default values of the UI of the elements of the Chronoblog. This is done to simplify the localization of the site in various languages. If your site is in English, you can leave it as it is. If the site will use any other language - translate the default values right here.

**`feedItems`** - global options for `feedItems` component. Inside any `feedItems` component on the site, you can specify other settings. Settings that are set through props are always in priority.

**`feedSearch`** - global options for `feedSearch` component.

### Plugins

All other plugins are optional. Chronoblog does not rely on them, so if you do not need, say, `gatsby-plugin-google-analytics`, you can ignore it or remove it from the list of plugins.

And of course, you can use any other plugins. Gatsby Plugin Ecosystem: [www.gatsbyjs.org/plugins](https://www.gatsbyjs.org/plugins/)

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
    text: '#222',
    background: '#fff',
    link: '#3d7e9a',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#dae1e3',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#eaeaea',
        background: '#0e0f17',
        muted: '#161b1d',
      },
    },
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6,
    authorBanner: 6,
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2,
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
};
```

In general, this file explains itself. The easiest way to understand what and how it works is simply to “play” with it. Try changing the primary and secondary colors, double the rounding of all elements, and so on.

`initialColorMode` - here you can select the starting color mode of the site. My be `light` or `dark`.

`colors` - site color management.

`borderRadius` - controlling rounding of various elements of a site, as a rule, it is better to use the same value. Usually, you want to have a lower value (for example `4`) for a more formal and serious appearance of the site, and a larger value (`12` for example) for a more informal and playful.

`borderWidth` - the width of the border of some elements of the site. It is recommended to use the value `2`, it is still possible `1` or `3`. The rest usually look very strange.

`fonts` - the choice of fonts for sites. Just enter the name of the font.  
Value _inherit_ in the `heading` means that in this case the headers will use the same font as for the `body`.

`chronoblogTheme` - you may have noticed this object throughout the file. This is done in order to add default values from the Chronoblog theme.

## Content

Chronoblog has three types of content: **posts**, **links**, and **notes**.

All of them are in the `content` folder. They are located in the appropriate folders.

Chronoblog has [pages](#pages), but they are not in the content folder, why? The fact is that everything in the content folder is not just website content, it is [Feed](#feed) content. Everything in the content folder is displayed in the feed (sorted by date, filtered by tags, etc.). But pages are not a `feed` content.

All types of content use markdown syntax, you can read more about this in the Gatsby documentation ([markdown-syntax](https://www.gatsbyjs.org/docs/mdx/markdown-syntax)). Especially useful to know about [frontmatter](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/#frontmatter).

> Markdown is a great format for content like articles - the reason is not an only confirmation but also because if you write your posts on the site in Markdown format, you will not depend on the theme (Chronoblog in this case) or even on the chosen engine (i.e. from Gatsby). At any time, you can easily change the platform on which your site is running, to any other platform that supports Markdown (now many support it).

### Content Types

#### Posts

Posts are regular blog posts.

Place your posts inside `content/posts`:

```
chronoblog-site
  ├─ content
  │  ├─ links
  │  ├─ notes
  │  └─ posts // <- your blog posts folder
  │     └─ some-blog-post // <- one blog post
  │        ├─ image.jpg // <- cover
  │        └─ index.md // <- post file
  ├─ gatsby-config.js
  ├─ package.json
  └─ src
```

A typical post looks like this:

`content/posts/some-blog-post/index.md`

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

The `cover` should lead to a picture file, in this case, the file is located in the same folder as the blog post itself.

The `description` will appear in the post card in the feed, and will also be used for post meta tags (for SEO). If there is no description, then the text of the beginning of the post itself will be used instead.

`tags` are needed for organization within the Chronoblog, they are displayed in the post itself and the post card in the feed.

#### Links

Links in the feed aren’t very different from blog posts. But when clicked, the user will follow the link.

The basic idea of ​​links is that they work and feel "equivalent" to blog posts - the link also has a cover, title, tags, date, description, etc.

Links are needed for materials that you consider important to post in your feed, but for some reason, you can’t post them in the form of posts. This can be your articles on other sites (which you do not have the right to host), interviews, your projects (say on the GitHub), received certificates, completed courses, etc.

To prevent users of the site from confusing posts and links, links have additional distinctive elements - emoji (🔗) in front of the title, path where the link leads under the heading, an outgoing link icon in the card. Also, links do not have a "read more ->" button like posts.

Place your links inside `content/links`:

```
chronoblog-site
  ├─ content
  │  ├─ links // <- your links folder
  │  │  └─ link-to-chronoblog // <- one link folder
  │  │     ├─ image.jpg // <- link cover
  │  │     └─ index.md // <- link file
  │  ├─ notes
  │  └─ posts
  ├─ gatsby-config.js
  ├─ package.json
  └─ src
```

A typical link looks like this:

`content/links/link-to-chronoblog/index.md`

```md
---
title: 'Link to Chronoblog Theme repo'
cover: ./image.jpg
date: 2019-11-12
link: https://github.com/Chronoblog/gatsby-theme-chronoblog
tags: ['link', 'project']
---

Link card is a card when clicked, the user goes to the specified link.
```

Like a post, a link must have a `title` and a `date`, and also, of course, the link must have a `link`.

All other elements are the same as the post. Only in contrast to the post, the body of the link is fully displayed in the feed - because when you click, the user will follow the link, and not the "full version". So do not make the link body too large.

#### Notes

Notes are a type of content that is fully located in the feed. Cards of notes do not refer anywhere and do not lead anywhere.

At the same time, notes allow you to place almost anything in the feed. The starter (demo: [chronoblog.now.sh](https://chronoblog.now.sh)) shows different options for how you can use notes - post podcasts, YouTube videos, presentations, post links or, in fact, text notes.

Place your notes inside `content/notes`:

```
chronoblog-site
  ├─ content
  │  ├─ links
  │  ├─ notes // <- notes folder
  │  │  └─ note-chronoblog // <- one note folder
  │  │     └─ index.md // <- note file
  │  └─ posts
  ├─ gatsby-config.js
  ├─ package.json
  └─ src
```

A typical note:

`content/notes/note-chronoblog/index.md`

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

The file `index.md` maybe something like this:

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

To create a new **`link`** you need to do the same thing but in the folder `content/links/` (and do not forget that the link must have `link:`).

And to create a new **`note`**, yes, again the same thing, but in the folder `content/notes/`.

The type of content is determined by the folder in which it is located!

### Additional options available to content

All types of content have additional, optional options that can help you manage the content on the site.

**`hide`** - if the content has `hide: true`, then this content will not be displayed in the feed on the site (in any feed). But at the same time, this content itself will exist and will be available.

**`draft`** - if the content has `draft: true`, this content will not be on the site in any form.

### frontmatter-placeholder

After you understand the content of the starter, you can delete the default content and start filling the site with your content.

However, it is better to leave the file `content/links/frontmatter-placeholder` in place and do not delete it. This content still doesn’t appear on the site (since it has `draft: true`). But its existence prevents some errors related to Gatsby and GraphQL, which may appear on an empty site.

## Permanent parts of the site

It makes sense to change the default values of some parts of the site.

All these parts are just theme components. Starter replaces them with its using [Component Shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/).

> Component Shadowing lets you replace the theme’s original file

You can replace any component of Chronoblog. But the parts listed here are not just possible to replace - it is recommended to do to make your site unique.

### site-header

You can find this file here: **`src/gatsby-theme-chronoblog/site-header.mdx`**

Usually here is the main menu of the site. By default, it looks like this:

```html
<MenuMain>
  <MenuBlock>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
  </MenuBlock>
  <MenuBlock>
    <SocialLinks />
    <span>&nbsp;&nbsp;</span>
    <LightDarkSwitchButton darkLabel="🌙" lightLabel="☀️" />
  </MenuBlock>
</MenuMain>
```

By default, the starter has two links in the menu - to the main page of the site (`<Link to="/">Home</Link>`) and to the additional page of the site (`<Link to="/projects">Projects</Link>`). The additional page of the site in the menu exists only as an example, you can change it or delete it if you do not need it. Then this file will look like this:

```html
<MenuMain>
  <MenuBlock>
    <Link to="/">Home</Link>
  </MenuBlock>
  <MenuBlock>
    <SocialLinks />
    <span>&nbsp;&nbsp;</span>
    <LightDarkSwitchButton darkLabel="🌙" lightLabel="☀️" />
  </MenuBlock>
</MenuMain>
```

You may also have noticed the `<SocialLinks />`. This component is designed to display social network icons. Read more about this component here: [`SocialLinks`](#sociallinks-component)

More about the button for switching between light and dark: [`LightDarkSwitchButton`](#lightdarkswitchbutton-component)

### site-footer

You can find this file here: **`src/gatsby-theme-chronoblog/site-footer.mdx`**

This is a footer of your site, place here everything that you consider necessary to see in the footer.

By default, this file looks like this:

```html
<div style={{textAlign: 'center'}}>
  <SocialLinks justifyContent='center' fontSize={40} />
  <p>&nbsp;</p>
  <div>© {new Date().getFullYear()}</div>
</div>
```

### post-footer

Footer of the post is what comes after every post on the blog. Usually, information about the author is placed here.

You can find this file here: **`src/gatsby-theme-chronoblog/post-footer.mdx`**

By default, this file looks like this:

```html
<AuthorBanner></AuthorBanner>
```

The whole point of this file is to show how you can use it! Feel free to modify this file. Or, if you do not need it, remove everything from it and leave it blank.

By default, there is the author’s banner component that displays the author of the site.

More about `AuthorBanner` component: [AuthorBanner Component](#authorbanner-component).

#### Get post data in post footer

You can get data about the post under which the footer is located:

```jsx
Post Slug: {{props.postData.fields.slug}}  // /full-blog-post/
Post Title: {{props.postData.frontmatter.title}} // Full Blog Post Example
Post Date: {{props.postData.frontmatter.date}} // 2019-12-01T00:00:00.000Z
Post id: {{props.postData.id}} // 0ff66c75-f55f-5a87-9652-e2998c7148e0
```

This can be useful, for example, to connect a comment system to the site. Example of how you can use Chronoblog and [Gatsby Plugin Disqus](https://github.com/tterb/gatsby-plugin-disqus):

```jsx
import { Disqus } from 'gatsby-plugin-disqus';

<AuthorBanner></AuthorBanner>
<p>&nbsp;</p>
<Disqus
	config={{
		url: props.siteMetadata.siteUrl + props.postData.fields.slug,
		title: props.postData.frontmatter.title,
		id: props.postData.id
	}}
/>
```

## Pages

Site pages can be found here: **`src/pages`**

In Chronoblog starter you can find two pages:

`index.mdx` - the main page of the site

`projects.mdx` - example page that you can rename, change, or simply delete

A path where you can find page corresponds to the name of the file, that is, the page `projects.mdx` can be found at `http://localhost:8000/projects`.

`index` is an exception to this.

Pages can be used to create: contact pages, portfolio/project pages, pages dedicated to one type of content (articles on a specific topic filtered by tags), etc.

Just remember to add a link to the page in the main menu (if you want to see this page in the menu). Read more about it here: [site-header](#site-header)

Due to how Chronoblog works, pages are not the primary way to provide information. It’s quite normal not to use a single page at all (except for the main page). The main way to organize content in Chronoblog is tags, not pages.

### index.mdx - homepage of your site

By default, it looks something like this:

`src/pages/index.mdx`

```html
<AuthorBanner />

Welcome to the Gatsby Starter Chronoblog! This starter will help you quickly and
easily create a website using Chronoblog Gatsby Theme. What you see is the main
page of the site. Replace everything here with your own content by editing this
file: `src/pages/index.mdx` ---

<FeedSearch />
<Tags />
<FeedItems />
```

You should replace the content of the main page with your own.

Pay attention to these components:

```html
<FeedSearch />
<Tags />
<FeedItems />
```

You can read more about them here:

- [FeedItems component](#feeditems-component)
- [Tags component](#tags-component)
- [FeedSearch component](#feedsearch-component)

# Documentation

Here is more in-depth information about various aspects of Chronoblog.

## Feed

Feed displays site content.

The standard way to use these components is how the main page of the site uses them:

`src/pages/index.mdx`

```html
<FeedSearch />
<Tags />
<FeedItems />
```

How do these components work in `mdx` files if we did not import them there? They are already imported to `mdx` inside Chronoblog! So you do not need to do this. You can read about this technique here: [mdxjs.com/advanced/components](https://mdxjs.com/advanced/components)

### FeedItems component

The most important component of the feed - this component displays content.

In this form, it is used, for example, on the main page of the site (`src/pages/index.mdx`):

```html
<FeedItems />
```

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `filterByTags` | optional | string[] | takes an array of tags and displays all content that have at least one of these tags |
| `filterByTypes` | optional | string[] | takes an array of content types (**`links`**, **`posts`**, **`notes`**) and displays only this content type |
| `itemsFormat` | optional | string | show **`compact`** or **`card`** items format |
| `limit` | optional | number | number of content items to be displayed |
| `showMoreButton` | optional | boolean | show or not to show the button "show more". |
| `yearSeparator` | optional | "year" / "space" / boolean | show or not the separator by year, and if the separator is displayed, then show the year or the gap of empty space |

`filterByTags` example. This component will display all site content that have the `project` tag:

```html
<FeedItems filterByTags={['project']} />
```

### Tags component

This component displays all tags available on the site.

```html
<Tags />
```

### FeedSearch component

The search string to search feed items. It makes no sense to put this component if there is no `<FeedItems />` component nearby.

```html
<FeedSearch /> <FeedItems />
```

## SocialLinks component

`SocialLinks` component displays links to your profiles on social networks in the form of icons. The information about what to display this component takes from [`gatsby-config.js`](#gatsby-config), from `siteMetadata.social`.

`<SocialLinks />` already included in all `mdx`, it can simply be used in any `.mdx` file:

```html
<SocialLinks />
```

| Prop | Required | Type | Description |
| --- | --- | --- | --- |
| `fontSize` | optional | number / string | size of the icons |
| `justifyContent` | optional | string[] / string |  |
| `socialLinks` | optional | array | allows you to set any links, instead of those taken from `siteMetadata.social` |

This component also accepts any other props, this can be used to, say, set the style you need. For example, change color:

```html
<SocialLinks sx={{ color: "#407b6e" }} />
```

## AuthorBanner component

`AuthorBanner` component displays information about the author of the site. First of all, this component is needed to display the author at the end of each blog post (see [`post-footer`](#post-footer)). But it can be used in any `.mdx` file.

Information about the author (name, description of the author, avatar and links to social networks) are taken from [`gatsby-config.js`](#gatsby-config).

```html
<AuthorBanner></AuthorBanner>
```

`AuthorBanner` accepts `children`, together with them it can be much more specific:

```html
<AuthorBanner sx={{color: '#f1f2f6', backgroundColor: `#222`}}>
  <AuthorBannerAvatar />
  <div>
    <AuthorBannerHeading as='h1' sx={{fontSize: [7]}} />
    <AuthorBannerDescription />
    <SocialLinks fontSize="30px" />
  </div>
</AuthorBanner>
```

This way you can more specifically customize the look of the banner.

## LightDarkSwitchButton component

This component displays a button for switching between light and dark themes.

In the starter, it is used in the main menu: [site-header](#site-header)

```html
<LightDarkSwitchButton />
```

| Prop         | Required | Type            | Description      |
| ------------ | -------- | --------------- | ---------------- |
| `fontSize`   | optional | number / string | size of the font |
| `darkLabel`  | optional | string          | dark mode label  |
| `lightLabel` | optional | string          | light mode label |

You can use any text for switches (including emoji):

```html
<LightDarkSwitchButton darkLabel="🌙" lightLabel="☀️" />
```

## Content Cover

Any [content](#content) can have a cover.

You most likely want to keep the cover image in the same folder as your blog `post` (or `link`, or `note`). But this is optional:

```
chronoblog-site
  └─ content
     ├─ links
     ├─ notes
     └─ posts
        └─ some-blog-post // <- blog post with cover
           ├─ image.jpg // <- cover image
           └─ index.md // <- post file
```

In `index.md` or in `index.mdx` file of the post:

```md
---
title: Full Blog Post Example
cover: ./image.jpg <- cover image
date: 2019-11-05
---

Some blog post text
```

Cover used in the feed, in the full blog post, as well as the main image for the metadata of the content.

Cover very forgiving to the size of the image, it is always in the center and always retains its proportions.

## Font Awesome Icons

Chronoblog uses [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) for icons. Brand icons (they call them “fab”) are already built into all `.mdx` files - you don’t need to import them from anywhere, just use them, for example like this:

```html
<FontAwesomeIcon icon={['fab', 'twitter']} /> <FontAwesomeIcon icon={['fab',
'github']} /> <FontAwesomeIcon icon={['fab', 'instagram']} />
```

These three icons that were not related to any brands were also built in:

```html
<FontAwesomeIcon icon="at" />
<FontAwesomeIcon icon="envelope" />
<FontAwesomeIcon icon="phone" />
```

You can use the icons inside the text in the `.md` and `.mdx` files:

```md
Some Text. Text with <FontAwesomeIcon icon={['fab', 'github']} /> Icon
```

## SEO and metadata

To work with metadata, Chronoblog relies on [react-helmet](https://www.npmjs.com/package/react-helmet) and [gatsby-plugin-react-helmet](https://www.npmjs.com/package/gatsby-plugin-react-helmet).

Most of the work related to SEO and metadata goes automatically. Just based on what information you most likely would like to see in metadata. It is enough for the user to correctly fill in the information about the site in `gatsby-config.js` - [gatsby-config](#gatsby-config).

### Metadata generation

**Basic metadata:**

- title is taken from the post title + site name.
- description is taken from the description of the post, or, if there is no description, from the beginning of the post itself.
- cover (if any) is used as the main image.

The same logic generates metadata for [Open Graph](https://www.ogp.me/) and for [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started).

### Metadata Verification Tools

See how Chronoblog works with metadata using these tools. For example, copy this link and paste it into the validation tool:

```
https://chronoblog.now.sh/full-blog-post/
```

Twitter card validator: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)  
Facebook debug OG: [developers.facebook.com/tools/debug/og/object](https://developers.facebook.com/tools/debug/og/object)

### SEO component in `.mdx`

You can use `SEO` component in any `.mdx` file (it does not need to be imported). This component accepts child elements and you can set any metatags inside it as if you used the [react-helmet](https://www.npmjs.com/package/react-helmet) plugin on its own.

This can be useful if you need to set, for example, a special title for some page on the site.

## Prism Code Highlight

Chronoblog already has built-in code highlighting for posts and other content. This is done thanks to [Prism](https://prismjs.com/) and [@theme-ui/prism](https://theme-ui.com/packages/prism). There is already built in support for many programming languages.

### Adding support for additional programming languages

## Shadowing in Chronoblog Gatsby Theme

Shadowing is a feature of any Gatsby Theme. You can read more about this in Gatsby docs: [Shadowing in Gatsby Themes](https://www.gatsbyjs.org/docs/themes/shadowing/)

> This feature allows users to replace a file in the src directory that is included in the webpack bundle with their own implementation. This works for React components, pages in src/pages, JSON files, TypeScript files, as well as any other imported file (such as .css) in your site.

This all works in the case of Chronoblog Theme. However, there are components that are still better not to touch so as not to break anything when updating Chronoblog.

For example, if you want to change the site menu, you need to create file `site-header.mdx` here: `src/gatsby-theme-chronoblog/site-header.mdx`. This will automatically replace default file of Chronoblog itself (which you can see here: [github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/packages/gatsby-theme-chronoblog/src/site-header.mdx](https://github.com/Chronoblog/gatsby-theme-chronoblog/blob/master/packages/gatsby-theme-chronoblog/src/site-header.mdx))

### Components that can and should be shadowed

Components that were specially created for you to change them:

| shadow | name | description |
| --- | --- | --- |
| ✅ | `src/gatsby-theme-chronoblog/post-footer.mdx` | read: [post-footer](#post-footer) |
| ✅ | `src/gatsby-theme-chronoblog/site-header.mdx` | read: [site-header](#site-header) |
| ✅ | `src/gatsby-theme-chronoblog/site-footer.mdx` | read: [post-footer](#post-footer) |
| ✅ | `src/gatsby-theme-chronoblog/content-bottom.mdx` |  |

# Feedback

🤝 If you have any problems with the Chronoblog, or you have interesting ideas, write to the github issue: [github.com/Chronoblog/gatsby-theme-chronoblog/issues](https://github.com/Chronoblog/gatsby-theme-chronoblog/issues)

🐦 You can also contact me on Twitter: [twitter.com/Ganevru](https://twitter.com/Ganevru), I will be glad to know your opinion about Chronoblog.

✍️ If you made a site using Chronoblog - write to me about it!

# Credits

## Art

Illustrations and Images that are used in the project (usually in [Starters](#demo-and-starters)).

- Illlustrations, open source illustrations kit: [illlustrations.co](https://illlustrations.co/)
- Lukasz Adam free illustrations: [lukaszadam.com/illustrations](https://lukaszadam.com/illustrations)
- Deszone: [deszone.net](https://deszone.net/), free vector graphics ratterns, illustrations, icons.
- Unsplash: [unsplash.com](https://unsplash.com/), the internet’s source of freely usable images. Powered by creators everywhere.
- Undraw: [undraw.co](https://undraw.co/), open-source illustrations for every project you can imagine and create.
