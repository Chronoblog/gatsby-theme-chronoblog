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
