const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');

module.exports = (options) => {
  //
  const {
    feedItems = {
      limit: 50,
      yearSeparator: true,
      yearSeparatorSkipFirst: true,
      contentTypes: {
        links: {
          beforeTitle: '🔗 '
        }
      }
    },
    feedSearch = {
      symbol: '🔍'
    },
    uiText = {
      feedShowMoreButton: 'show more',
      feedSearchPlaceholder: 'search',
      cardReadMoreButton: 'read more →',
      allTagsButton: 'all tags'
    }
  } = options;
  //
  const {
    feedShowMoreButton = 'show more',
    feedSearchPlaceholder = 'search',
    cardReadMoreButton = 'read more →',
    allTagsButton = 'all tags'
  } = uiText;
  const {
    limit = 50,
    yearSeparator = true,
    yearSeparatorSkipFirst = true,
    contentTypes = { links: { beforeTitle: '🔗 ' } }
  } = feedItems;
  const { symbol = '🔍' } = feedSearch;
  //
  return {
    siteMetadata: {
      siteTitle: '',
      siteDescription: '',
      siteImage: '',
      siteUrl: 'http://localhost:8000',
      pathPrefix: '/',
      siteLanguage: 'en',
      ogLanguage: `en_US`,
      author: '',
      authorDescription: '',
      avatar: '',
      avatarAltText: '',
      twitterSite: '',
      twitterCreator: '',
      uiText: {
        feedShowMoreButton,
        feedSearchPlaceholder,
        cardReadMoreButton,
        allTagsButton
      },
      feedItems: {
        limit,
        yearSeparator,
        yearSeparatorSkipFirst,
        contentTypes
      },
      feedSearch: {
        symbol
      },
      social: [
        {
          icon: ``,
          url: ``,
          altText: ``
        }
      ]
    },
    plugins: [
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaultQuality: 90
        }
      },
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('src/pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve('content/posts')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'links',
          path: path.resolve('content/links')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'notes',
          path: path.resolve('content/notes')
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      },
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [remarkSlug, remarkUnwrapImages],
          defaultLayouts: {
            pages: require.resolve('./src/components/page')
          },
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: 'transparent'
              }
            },
            'gatsby-remark-responsive-iframe'
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false,
                backgroundColor: 'transparent'
              }
            },
            'gatsby-remark-responsive-iframe'
          ]
        }
      }
    ]
  };
};
