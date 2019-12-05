import { graphql, useStaticQuery } from 'gatsby';

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
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { hide: { ne: true }, draft: { ne: true } } }
      ) {
        nodes {
          id
          body
          excerpt
          fields {
            slug
            type
          }
          headings {
            value
            depth
          }
          frontmatter {
            title
            description
            link
            date
            tags
            draft
            hide
            cover {
              childImageSharp {
                fluid(maxWidth: 768, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                  presentationWidth
                  presentationHeight
                  src
                }
              }
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
      n.fields.type === 'posts' ||
      n.fields.type === 'links' ||
      n.fields.type === 'notes'
  );

  // check if page with this path exists
  const nodesPath = data.allSitePage.nodes;
  nodes = nodes.filter((n) => checkIfPageExists(n, nodesPath));

  return nodes;
};

export default useFeed;
