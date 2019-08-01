const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');

module.exports = () => {
  return {
    siteMetadata: {
      title: 'Chronoblog - Theme for Gatsby js', // site title for SEO and meta
      navTitle: 'Chronoblog', // site title for navigation
      description: 'Gatsby Theme Chronoblog', // description for SEO and meta
      siteUrl: 'http://example.com',
      pathPrefix: '/', // prefixes for all links
      language: 'en',
      author: '', // for JSON-LD Person, example - 'Ivan Ganev'
      twitter: '' // for twitter cards, example - '@ganevru'
    },
    plugins: [
      {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [remarkSlug, remarkUnwrapImages]
        }
      },
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve('feed/posts')
        }
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'links',
          path: path.resolve('feed/links')
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
