module.exports = {
  siteMetadata: {
    title: 'Chronoblog',
    description: 'Starter for Gatsby Theme Chronoblog',
    siteUrl: 'http://localhost:8000', // http://example.com
    author: 'Site Author'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          feedShowMoreButton: '⬇️ show more ⬇️',
          feedSearchPlaceholder: 'search'
        }
      }
    }
  ]
};
