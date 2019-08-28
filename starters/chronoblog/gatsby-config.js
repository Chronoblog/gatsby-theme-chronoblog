module.exports = {
  siteMetadata: {
    title: 'gatsby-theme-chronoblog demo site',
    description: 'Demo site for gatsby-theme-chronoblog',
    siteUrl: 'http://localhost:8000', // http://example.com
    author: 'Site Author'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          feedShowMoreButton: '⬇️ show more ⬇️',
          feedSearchPlaceholder: 'feed search'
        }
      }
    }
  ]
};
