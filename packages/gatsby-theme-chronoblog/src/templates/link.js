import { graphql } from 'gatsby';

import Link from '../components/link';

export default Link;

export const linkQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      frontmatter {
        title
        date
        link
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 768, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
              src
            }
            resize(width: 768) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      body
    }
  }
`;
