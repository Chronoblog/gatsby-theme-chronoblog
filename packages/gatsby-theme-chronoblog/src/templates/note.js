import { graphql } from 'gatsby';

import Note from '../components/note';

export default Note;

export const noteQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      excerpt
      frontmatter {
        title
        date
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
