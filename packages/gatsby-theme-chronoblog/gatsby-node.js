const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const Debug = require('debug');
const mkdirp = require('mkdirp');
const fs = require('fs');
const pkg = require('./package.json');

const debug = Debug(pkg.name);

/**
 *
 * @param {object} node
 * @param {string} slugValueDefault
 * @returns {string}
 */
const createSlug = (node, slugValueDefault) => {
  if (!node.frontmatter) return slugValueDefault;
  if (node.frontmatter.slug) return node.frontmatter.slug;
  return slugValueDefault;
};

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `feed/posts`),
    path.join(program.directory, `feed/links`),
    path.join(program.directory, `pages`)
  ];

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type !== 'Mdx') return;

  const slugValueDefault = createFilePath({ node, getNode });
  let value = createSlug(node, slugValueDefault);
  value = value.toLowerCase();
  value = value.replace(/\s/g, '-');
  value = path.join('/', value);

  actions.createNodeField({
    name: 'slug',
    node,
    value
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              link
              draft
            }
            body
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

  const allMdx = result.data.allMdx.edges;
  let allMdxNodes = allMdx.map((edge) => edge.node);
  allMdxNodes = allMdxNodes.filter((n) => !n.frontmatter.draft);

  let posts = allMdxNodes.filter(
    (n) => n.parent.sourceInstanceName === 'posts'
  );
  posts = posts.filter((n) => n.frontmatter.title);
  posts = posts.filter((n) => n.frontmatter.date);

  let links = allMdxNodes.filter(
    (n) => n.parent.sourceInstanceName === 'links'
  );
  links = links.filter((n) => n.frontmatter.title);
  links = links.filter((n) => n.frontmatter.date);
  links = links.filter((n) => n.frontmatter.link);

  if (posts.length > 0) {
    posts.forEach((post) => {
      actions.createPage({
        path: post.fields.slug,
        component: require.resolve('./src/templates/post.js'),
        context: {
          id: post.id
        }
      });
    });
  }

  if (links.length > 0) {
    links.forEach((link) => {
      actions.createPage({
        path: link.fields.slug,
        component: require.resolve('./src/templates/link.js'),
        context: {
          id: link.id
        }
      });
    });
  }
};
