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
 * check if page with this path exists
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

/**
 * @returns {object[]}
 */
const useFeed = () => {
  const feedQuery = graphql`
    query FeedQuery {
      allMdx(filter: { frontmatter: { hide: { ne: true } } }) {
        nodes {
          id
          body
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date
            tags
            draft
            hide
            cover {
              childImageSharp {
                fluid(maxWidth: 920, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
                resize(width: 768) {
                  src
                }
              }
            }
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
