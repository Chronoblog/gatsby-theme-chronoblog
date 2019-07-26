const path = require('path');
const remarkUnwrapImages = require('remark-unwrap-images');
const remarkSlug = require('remark-slug');
const feedOptions = require('./feed-options');

module.exports = (opts = {}) => {
  const { path: posts = 'content/feed/posts', mdx = true } = opts;

  return {
    siteMetadata: {
      title: 'gatsby-theme-chronoblog',
      description: 'gatsby-theme-chronoblog',
      author: 'Author Name',
      siteUrl: 'http://example.com'
    },
    plugins: [
      mdx && {
        resolve: 'gatsby-plugin-mdx',
        options: {
          extensions: ['.mdx', '.md'],
          remarkPlugins: [remarkSlug, remarkUnwrapImages]
        }
      },
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-emotion',
      `gatsby-plugin-typescript`,
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'posts',
          path: path.resolve(posts)
        }
      },
      {
        resolve: 'gatsby-plugin-feed',
        options: feedOptions
      }
    ].filter(Boolean)
  };
};
