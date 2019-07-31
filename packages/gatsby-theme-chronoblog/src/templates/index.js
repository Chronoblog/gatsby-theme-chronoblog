import { graphql } from 'gatsby';
import React from 'react';

import Layouts from '../components/layouts';

export default (props) => {
  const posts = props.data.allMdx.edges
    .filter((edge) => edge.node.parent.sourceInstanceName === 'posts')
    .map(({ node }) => ({
      id: node.id,
      slug: node.fields.slug,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      excerpt: node.excerpt
    }));

  return <Layouts {...props} posts={posts} />;
};

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          fields {
            slug
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
`;
