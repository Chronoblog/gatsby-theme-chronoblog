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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
