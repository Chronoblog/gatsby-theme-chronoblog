import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Post from '../components/post';

/**
 * Post template
 *
 * @param {object} props
 * @param {object} props.data
 * @param {object} props.data.mdx
 * @param {string} props.data.mdx.body
 * @param {object} props.data.mdx.frontmatter
 * @param {string} props.data.mdx.frontmatter.title
 * @param {string | Date} props.data.mdx.frontmatter.date
 * @param {boolean=} props.data.mdx.frontmatter.draft
 *
 */
const PostComp = (props) => {
  const { data } = props;
  const { mdx } = data;
  const { title, date, draft } = mdx.frontmatter;
  const { body } = mdx;

  return (
    <Post {...props} title={title} excerpt="excerpt" date={date} draft={draft}>
      <MDXRenderer>{body}</MDXRenderer>
    </Post>
  );
};

export default PostComp;

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        draft
      }
      body
    }
  }
`;
