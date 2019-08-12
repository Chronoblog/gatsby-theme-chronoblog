import { graphql } from 'gatsby';

import { PageLink } from '../components/content-page/content-page';

export default PageLink;

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
