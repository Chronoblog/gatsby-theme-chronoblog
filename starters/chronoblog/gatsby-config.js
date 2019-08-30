module.exports = {
  siteMetadata: {
    title: 'Chronoblog Starter',
    description: 'Starter for Gatsby Theme Chronoblog',
    siteUrl: 'http://localhost:8000', // http://example.com
    pathPrefix: '/test',
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
