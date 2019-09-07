module.exports = {
  siteMetadata: {
    title: 'Chronoblog Starter',
    description: 'Starter for Gatsby Theme Chronoblog',
    siteUrl: 'http://localhost:8000', // example - http://example.com
    pathPrefix: '/',
    language: 'en',
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
    }
  ]
};
