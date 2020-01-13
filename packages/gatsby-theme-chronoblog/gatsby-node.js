const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const Debug = require('debug');
const fs = require('fs');
const _ = require('lodash');
const pkg = require('./package.json');

const debug = Debug(pkg.name);

/**
 *
 * @param {object} node
 * @param {string} slugValueDefault
 * @returns {string}
 */
const getSlug = (node, slugValueDefault) => {
  if (!node.frontmatter) return slugValueDefault;
  if (node.frontmatter.slug) return node.frontmatter.slug;
  return slugValueDefault;
};
/**
 *
 * @param {object} node
 * @param {string} slugValueDefault
 * @returns {string}
 */
const makeSlug = (node, slugValueDefault) => {
  let slug = getSlug(node, slugValueDefault);
  slug = slug.toLowerCase();
  slug = slug.replace(/\s/g, '-');
  slug = slug.replace(/\/\//g, '/');
  slug = `/${slug}`;
  slug = slug.replace(/\/\//g, '/');
  return slug;
};

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, `content/posts`),
    path.join(program.directory, `content/links`),
    path.join(program.directory, `content/notes`),
    path.join(program.directory, `src/pages`),
    path.join(program.directory, `static`)
  ];

  dirs.forEach((dir) => {
    debug(`Initializing ${dir} directory`);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  //
  if (node.internal.type !== 'Mdx') return;
  // get slug Default
  const fileName = createFilePath({ node, getNode });
  // get parent folder name
  const parent = getNode(node.parent);
  const folderName = parent.sourceInstanceName;
  //
  // create type field
  const type = folderName;
  actions.createNodeField({
    name: 'type',
    node,
    value: type
  });
  //
  // create slug field (for links)
  let typeFromFolder = '';
  typeFromFolder = folderName === 'notes' ? 'notes' : typeFromFolder;
  typeFromFolder = folderName === 'links' ? 'links' : typeFromFolder;
  const slugDefault = `${typeFromFolder}${fileName}`;
  // make final slug
  const slug = makeSlug(node, slugDefault);
  //
  actions.createNodeField({
    name: 'slug',
    node,
    value: slug
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
              type
            }
            frontmatter {
              title
              date
              link
              draft
              tags
            }
            body
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  const allMdx = result.data.allMdx.edges;
  let allMdxNodes = allMdx.map((edge) => edge.node);
  allMdxNodes = allMdxNodes.filter((n) => !n.frontmatter.draft);

  // tag pages
  let tags = allMdxNodes.map((n) => _.get(n, 'frontmatter.tags', undefined));
  tags = _.flatten(tags);
  tags = _.uniq(tags);
  tags = tags.filter(Boolean);
  // Make tag pages
  if (tags.length > 0) {
    tags.forEach((tag) => {
      actions.createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: require.resolve('./src/templates/tag-template.js'),
        context: {
          tag
        }
      });
    });
  }

  // Links
  let links = allMdxNodes.filter((n) => n.fields.type === 'links');
  links = links.filter((n) => n.frontmatter.title);
  links = links.filter((n) => n.frontmatter.date);
  links = links.filter((n) => n.frontmatter.link);
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

  // Notes
  let notes = allMdxNodes.filter((n) => n.fields.type === 'notes');
  notes = notes.filter((n) => n.frontmatter.date);
  notes = notes.filter((n) => n.fields.slug);
  if (notes.length > 0) {
    notes.forEach((note) => {
      actions.createPage({
        path: note.fields.slug,
        component: require.resolve('./src/templates/note.js'),
        context: {
          id: note.id
        }
      });
    });
  }

  // Posts
  let posts = allMdxNodes.filter((n) => n.fields.type === 'posts');
  posts = posts.filter((n) => n.frontmatter.title);
  posts = posts.filter((n) => n.frontmatter.date);
  posts = posts.filter((n) => n.fields.slug);
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
  // posts should not have `links` in frontmatter
  posts.map((n) =>
    n.frontmatter.link
      ? console.warn(
          `post ${n.frontmatter.title}, have link ${n.frontmatter.link} in frontmatter`
        )
      : ''
  );
};
