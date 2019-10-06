module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Starter with Netlify CMS',
    siteDescription: 'Starter for Gatsby Theme Chronoblog',
    siteImage: '/banner.png', // main image of the site for meta tags
    siteUrl: 'https://chronoblog-netlify-cms.netlify.com/', // example - http://example.com
    pathPrefix: '/', // '/' - default, example - '/someprefix'
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Site Author', // for example - 'Ivan Ganev'
    twitter: '' // for twitter cards meta data, example - '@ganevru'
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
      resolve: 'gatsby-plugin-netlify-cms',
      options: {}
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
