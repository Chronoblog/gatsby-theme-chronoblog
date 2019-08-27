const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');

module.exports = (options) => {
  const {
    uiText: {
      feedShowMoreButton = '⬇️ show more ⬇️',
      feedSearchPlaceholder = 'search'
    },
    feedItemsLimit = 50
  } = options;
  //
  return {
    siteMetadata: {
      title: 'Chronoblog - Theme for Gatsby js', // site title for SEO and meta
      description: 'Gatsby Theme Chronoblog', // description for SEO and meta
      image: '/banner.jpg', // main image of the site for meta tags
      siteUrl: 'http://localhost:8000', // http://example.com
      language: 'en',
      author: '', // for example - 'Ivan Ganev'
      twitter: '', // for twitter cards meta data, example - '@ganevru'
      // ui text fot translate
      uiText: {
        feedShowMoreButton,
        feedSearchPlaceholder
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
            }
          ],
          plugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 820,
                quality: 90,
                linkImagesToOriginal: false
              }
            }
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
      }
    ]
  };
};
