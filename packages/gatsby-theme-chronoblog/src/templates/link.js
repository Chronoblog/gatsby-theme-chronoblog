import { graphql } from 'gatsby';

import Link from '../components/link';

export default Link;

export const linkQuery = graphql`
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
