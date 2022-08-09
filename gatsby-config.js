module.exports = {
  siteMetadata: {
    siteTitle: 'Gökhan Ayrancıoğlu',
    siteDescription: 'Gökhan Ayrancıoğlu\'nun Kişisel Blogu',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://gokhana.dev',
    pathPrefix: '/',
    siteLanguage: 'tr',
    ogLanguage: `tr_TR`,
    author: 'Gökhan Ayrancıoğlu', // for example - 'Ivan Ganev'
    authorDescription: 'Software Engineer @Yemeksepeti | Tech Blogger', // short text about the author
    avatar: '/avatar.jpg',
    twitterSite: 'https://twitter.com/gokhanadev', // website account on twitter
    twitterCreator: 'https://twitter.com/gokhanadev', // creator account on twitter
    social: [
      {
        icon: `at`,
        url: `mailto:gokhana@mail.com`,
      },
      {
        icon: `medium`,
        url: `https://gokhana.medium.com/`,
      },
      {
        icon: `twitter`,
        url: `https://twitter.com/gokhanadev`,
      },
      {
        icon: `github`,
        url: `https://github.com/G-khan`,
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/gokhan-a/`,
      },
      {
        icon: `superpeer`,
        url: `https://superpeer.com/gokhana`,
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all posts',
        },
        feedItems: {
          // global settings for feed items
          limit: 10,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 ',
            },
          },
        },
        feedSearch: {
          symbol: '🔍',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gokhan Ayrancioglu`,
        short_name: `gokhana.dev`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-111444912-1',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `https-gokhana-dev`,
      },
    },
  ],
};
