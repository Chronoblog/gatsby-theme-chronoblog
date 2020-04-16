module.exports = {
  siteMetadata: {
    siteTitle: 'Chronoblog Tests',
    siteUrl: 'https://chronoblog-tests.now.sh/',
    author: 'Site Author', // for example - 'Ivan Ganev'
    authorDescription: 'short text about the', // short text about the author
    avatar: '/avatar.jpg',
    social: [
      {
        icon: `envelope`,
        url: `mailto:mymail@mail.com`
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/ganevru`,
        altText: 'alt text for Twitter'
      },
      {
        icon: `github`,
        url: `https://github.com/Chronoblog/gatsby-theme-chronoblog`
      },
      {
        icon: `npm`,
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
