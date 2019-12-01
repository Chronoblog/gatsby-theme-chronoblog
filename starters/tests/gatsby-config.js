module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Tests',
    siteUrl: 'https://chronoblog-tests.netlify.com/',
    author: 'Site Author', // for example - 'Ivan Ganev'
    authorDescription: 'short text about the', // short text about the author
    avatar: '/avatar.jpg',
    social: [
      {
        icon: `twitter`,
        url: `https://twitter.com/ganevru`
      },
      {
        icon: `github`,
        url: `https://github.com/Ganevru/gatsby-theme-chronoblog`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      },
      {
        icon: `node-js`,
        url: `https://www.npmjs.com/package/gatsby-theme-chronoblog`
      }
    ]
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
