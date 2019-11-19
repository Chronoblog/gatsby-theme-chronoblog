# Chronoblog - Gatsby Theme

[![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/ed253426-cae8-40fc-9647-28a8cd1f5a28/deploy-status)](https://app.netlify.com/sites/chronoblog-netlify-cms/deploys) [![Netlify Status](https://api.netlify.com/api/v1/badges/89481a31-c0c3-46ac-bf12-1fa638f0cd82/deploy-status)](https://app.netlify.com/sites/chronoblog-minimal/deploys)  
[![npm](https://img.shields.io/npm/v/gatsby-theme-chronoblog?color=brightgreen)](https://www.npmjs.com/package/gatsby-theme-chronoblog) [![node](https://img.shields.io/node/v/gatsby-theme-chronoblog)](https://www.npmjs.com/package/gatsby-theme-chronoblog)

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

## Icons

Brands svg icons from fontawesome [https://github.com/FortAwesome/react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

## Status

### Starters status

If at least one starter is not working - something went wrong.

| Status | Repo | Link |
| --- | --- | --- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/f36aa133-5611-484c-97fe-8d65fac4391b/deploy-status)](https://app.netlify.com/sites/chronoblog/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog | https://chronoblog.netlify.com |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/ed253426-cae8-40fc-9647-28a8cd1f5a28/deploy-status)](https://app.netlify.com/sites/chronoblog-netlify-cms/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog-netlify-cms | https://chronoblog-netlify-cms.netlify.com/ |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/89481a31-c0c3-46ac-bf12-1fa638f0cd82/deploy-status)](https://app.netlify.com/sites/chronoblog-minimal/deploys) | https://github.com/Ganevru/gatsby-starter-chronoblog-minimal | https://chronoblog-minimal.netlify.com/ |

### Status of development and test versions

All these versions work from master branch of this repository. It’s ok if they do not work.

| Status | Link |
| --- | --- |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/e26ac6b2-92f3-4744-8384-c64b144a1f74/deploy-status)](https://app.netlify.com/sites/chronoblog-master/deploys) | https://chronoblog-master.netlify.com |
| [![Netlify Status](https://api.netlify.com/api/v1/badges/d6c88fb7-14d5-495a-8bc4-f0994e728881/deploy-status)](https://app.netlify.com/sites/chronoblog-tests/deploys) | https://chronoblog-tests.netlify.com |

## TODO

Community

- move all todo to GitHub Issues
- write a normal readme

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
- different paths to content. Currently, `notes` all paths begin with `notes` - like `example.com/notes/some-note`, while `links` and `posts` do not have special paths. Make the user decide the path for each type of content. Save the current version as default.
- special type for `podcasts` - allowing to upload audio files directly to the site, and having a fixed audio control for the user

Dates

- content-related dates/calendar
- feed **scrollspy** for dates - years and months

Other

- comments for blog posts (disqus?) ?
- RSS Feed
- social media icons (in MDX?), [react-fontawesome](https://github.com/FortAwesome/react-fontawesome) ?
- author banner component for post footer. A component that takes information from `gatsby-config`, about the author’s name, social networks, his avatar and background img.
- The component with the buttons “next ->” and “<- previous”, working with all types of materials.
- include in starters [github.com/raae/gatsby-remark-oembed#example-site](https://github.com/raae/gatsby-remark-oembed#example-site) ?
