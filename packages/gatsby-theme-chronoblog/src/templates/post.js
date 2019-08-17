import { graphql } from 'gatsby';

import PagePost from '../components/page-post';

export default PagePost;

export const postQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        slug
      }
      body
    }
  }
`;
