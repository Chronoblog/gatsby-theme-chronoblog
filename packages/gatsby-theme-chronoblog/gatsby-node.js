const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const Debug = require('debug');
const mkdirp = require('mkdirp');
const fs = require('fs');
const pkg = require('./package.json');

const debug = Debug(pkg.name);

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `content/feed/posts`),
    path.join(program.directory, `content/feed/links`),
    path.join(program.directory, `content/pages`),
    path.join(program.directory, `content/assets`)
  ];

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }, opts = {}) => {
  const { name = '' } = opts;
  if (node.internal.type !== 'Mdx') return;

  const value = path.join('/', name, createFilePath({ node, getNode }));
  actions.createNodeField({
    name: 'slug',
    node,
    value
  });
};

/**
 * @param {number} indexForFun
 * @param {number} previousIndex
 * @param {string} name
 * @returns {string}
 */
function previousFun(indexForFun, previousIndex, name) {
  if (indexForFun > 0) {
    if (previousIndex === 1) {
      return path.join('/', name);
    }
    return path.join('/', name, `${previousIndex}`);
  }
  return '';
}

/**
 * @param {*} some
 * @returns {string | number}
 */
function testJsdoc(some) {
  if (some) {
    return 1;
  }
  return 'some';
}

const someTest = testJsdoc(1);
console.log(someTest);

exports.createPages = async ({ graphql, actions }, opts = {}) => {
  const { name = '', pageSize = 12 } = opts;

  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              draft
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    console.log(result.errors);
    return;
  }
  const posts = result.data.allMdx.edges
    .map((edge) => edge.node)
    .filter((node) => node.parent.sourceInstanceName === 'posts');

  posts.forEach((post) => {
    actions.createPage({
      path: post.fields.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id
      }
    });
  });

  // pagination
  const filtered = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { frontmatter: { draft: { ne: true } } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              date
              draft
            }
            parent {
              ... on File {
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `);
  if (filtered.errors) {
    console.log(filtered.errors);
    return;
  }
  const index = filtered.data.allMdx.edges
    .map((edge) => edge.node)
    .filter((node) => node.parent.sourceInstanceName === 'posts');
  const limit = pageSize;
  const length = Math.ceil(index.length / limit);

  Array.from({ length }).forEach((_, i) => {
    const previousIndex = i;
    const nextIndex = i + 2;

    const previous = previousFun(i, previousIndex, name);
    const next =
      nextIndex <= length ? path.join('/', name, `${nextIndex}`) : '';

    actions.createPage({
      path: i === 0 ? `/${name}` : path.join('/', name, `${i + 1}`),
      component: require.resolve('./src/templates/index.js'),
      context: {
        previous,
        next,
        limit,
        skip: i * limit
      }
    });
  });
};
