module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Tests',
    siteUrl: 'https://chronoblog-tests.netlify.com/'
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {}
    },
    {
      resolve: `gatsby-plugin-sitemap`
    }
  ]
};
