import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';

/**
 * remove first and last slash
 *
 * @param {string} param
 * @returns {string}
 */
const noSlash = (param) => {
  let string = param;
  string = string.replace(/^\//, '');
  string = string.replace(/\/$/, '');
  return string;
};

/**
 *
 * @param {object} node
 * @param {object[]} nodesPath
 * @returns {boolean}
 */
const checkIfPageExists = (node, nodesPath) => {
  if (!node.fields || !node.fields.slug) return false;
  const slugNoSlash = noSlash(node.fields.slug);
  const pathStrings = nodesPath.map((o) => noSlash(o.path));
  const any = pathStrings.filter((path) => path === slugNoSlash);
  return any.length > 0;
};

const useFeed = () => {
  const feedQuery = graphql`
    query FeedQuery {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            draft
            hide
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
        }
      }
      allSitePage {
        nodes {
          path
        }
      }
    }
  `;
  const data = useStaticQuery(feedQuery);

  let { nodes } = data.allMdx;

  // filters
  nodes = nodes.filter((n) => !n.frontmatter.hide);
  nodes = nodes.filter(
    (n) =>
      n.parent.sourceInstanceName === 'posts' ||
      n.parent.sourceInstanceName === 'links'
  );

  // check if page with this path exists
  const nodesPath = data.allSitePage.nodes;
  nodes = nodes.filter((n) => checkIfPageExists(n, nodesPath));

  // sort - ABC title and New to Old date
  nodes = _.sortBy(nodes, [(n) => n.frontmatter.title]);
  nodes = _.reverse(nodes);
  nodes = _.sortBy(nodes, [(n) => n.frontmatter.date]);
  nodes = _.reverse(nodes);

  return nodes;
};

export default useFeed;
