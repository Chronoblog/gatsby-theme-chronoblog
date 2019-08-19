import { graphql } from 'gatsby';

import Post from '../components/post';

export default Post;

export const postQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      frontmatter {
        title
        date
        description
      }
      fields {
        slug
      }
      body
    }
  }
`;
