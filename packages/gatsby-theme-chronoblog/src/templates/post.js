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
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
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
