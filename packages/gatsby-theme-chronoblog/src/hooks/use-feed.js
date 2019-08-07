import { graphql, useStaticQuery } from 'gatsby';

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
          }
        }
      }
    }
  `;
  const data = useStaticQuery(feedQuery);
  return data.allMdx.nodes;
};

export default useFeed;
