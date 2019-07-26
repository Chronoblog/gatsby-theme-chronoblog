import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

import Post from '../components/post';

interface PageQuery {
  id: string;
  frontmatter: {
    title: string;
    date: string | Date;
    draft: boolean;
  };
  body: string;
}

interface Props {
  [elemName: string]: unknown;
  data: {
    mdx: PageQuery;
  };
}

export default (props: Props): JSX.Element => {
  const { data } = props;
  const { mdx } = data;
  const { title, date, draft } = mdx.frontmatter;

  return (
    <Post {...props} title={title} date={date} draft={draft}>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Post>
  );
};

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
