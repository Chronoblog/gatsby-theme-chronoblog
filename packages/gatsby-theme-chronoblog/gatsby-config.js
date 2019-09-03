const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');

module.exports = (options) => {
  //
  const {
    feedItemsLimit = 50,
    uiText = {
      feedShowMoreButton: 'show more',
      feedSearchPlaceholder: 'search',
      allTagsButton: 'all tags'
    }
  } = options;
  const {
    feedShowMoreButton = 'show more',
    feedSearchPlaceholder = 'search',
    allTagsButton = 'all tags'
  } = uiText;
  //
  return {
    siteMetadata: {
      title: 'Chronoblog - Theme for Gatsby js',
      description: 'Gatsby Theme Chronoblog',
      image: '/banner.jpg', // main image of the site for meta tags
      avatar: '/avatar.jpg', // author avatar
      siteUrl: 'http://localhost:8000', // http://localhost:8000
      language: 'en',
      author: 'Name Placeholder',
      twitter: '',
      uiText: {
        feedShowMoreButton,
        feedSearchPlaceholder,
        allTagsButton
      },
      feedItemsLimit
    },
    plugins: [
      {
        // for theme default pages
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.join(__dirname, `src`, `pages`)
        }
      },
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: path.resolve('pages')
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
                linkImagesToOriginal: false
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
                linkImagesToOriginal: false
              }
            },
            'gatsby-remark-responsive-iframe'
          ]
        }
      },
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
        resolve: 'gatsby-redirect-from',
        options: {
          query: 'allMdx'
        }
      },
      'gatsby-plugin-meta-redirect',
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
        // for theme default pages
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.join(__dirname, `src`, `pages`)
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'pages',
          path: path.resolve('pages')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'images',
          path: path.resolve('images')
        }
      }
    ]
  };
};
